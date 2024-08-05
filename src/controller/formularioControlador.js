const { enviarCorreo } = require("../config/correo.js");
const { getDB } = require("../config/conexion");
const Formulario = require("../document/formulario");
const { ObjectId } = require("mongodb");
const { validateFormulario } = require("../validations/formularioValidation");

exports.getAllFormularios = async (req, res) => {
  try {
    const db = getDB();
    const formularios = await db.collection("Formularios").find().toArray();
    res.json(formularios);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.getFormularioById = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "Invalid ID format" });
  }

  try {
    const db = getDB();
    const formulario = await db
      .collection("Formularios")
      .findOne({ _id: new ObjectId(id) });
    if (!formulario) {
      return res.status(404).json({ msg: "Formulario not found" });
    }
    res.json(formulario);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.createFormulario = async (req, res) => {
  const {
    nombre,
    cedula,
    email,
    telefono,
    idVideojuego,
    codigoDescuento,
    total,
    subtotal,
    precio,
    imagenComprobante,
    juego,
    estado
  } = req.body;
  const formularioData = {
    nombre,
    cedula,
    email,
    telefono,
    idVideojuego,
    codigoDescuento,
    total,
    subtotal,
    precio,
    imagenComprobante,
    juego,
    estado: estado || 'pendiente' // Default to 'pendiente'
  };
  const errors = validateFormulario(formularioData);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const db = getDB();
    const formulario = new Formulario(
      nombre,
      cedula,
      email,
      telefono,
      idVideojuego,
      codigoDescuento,
      total,
      subtotal,
      precio,
      imagenComprobante,
    juego,
    estado || 'pendiente' // Default value for estado
    );

    // Enviar correo antes de guardar el formulario
    try {
      await enviarCorreo(cedula, email, 1, formulario);
    } catch (err) {
      console.error("Error al enviar el correo:", err);
      return res.status(500).send("Error al enviar el correo");
    }

    await db.collection("Formularios").insertOne(formulario);
    res.status(201).json(formulario);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
exports.updateFormulario = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  if (!estado) {
    return res.status(400).json({ msg: "Estado es requerido" });
  }

  try {
    const db = getDB();
    const result = await db.collection("Formularios").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { estado } },
      { returnOriginal: false }
    );

    if (!result.value) {
      return res.status(404).json({ msg: "Formulario no encontrado" });
    }

    res.json(result.value);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.deleteFormulario = async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDB();
    await db.collection("Formularios").deleteOne({ _id: new ObjectId(id) });
    res.json({ msg: "Formulario deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};


//quiero que me configures un enpoitn para enviar un correo electronico de esta manera await enviarCorreo(cedula, email, 2, formulario)
exports.enviarCorreoDePruebaDenegado = async (req, res) => {
  const { cedula, email, formulario } = req.body;

  if (!cedula || !email || !formulario) {
    return res.status(400).json({
      msg: "Por favor, proporcione todos los datos necesarios: cedula, email, y formulario.",
    });
  }

  try {
    await enviarCorreo(cedula, email, 2, formulario);
    res.json({ msg: "Correo enviado" });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    res.status(500).send("Error al enviar el correo");
  }
};
exports.enviarCorreoAceptado = async (req, res) => {
  const { cedula, email, formulario } = req.body;

  if (!cedula || !email || !formulario) {
    return res.status(400).json({
      msg: "Por favor, proporcione todos los datos necesarios: cedula, email, y formulario.",
    });
  }

  try {
    await enviarCorreo(cedula, email, 3, formulario);
    res.json({ msg: "Correo enviado" });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    res.status(500).send("Error al enviar el correo");
  }
};

exports.enviarCorreoJuego = async (req, res) => {
  const { cedula, email, formulario } = req.body;

  if (!cedula || !email || !formulario) {
    return res.status(400).json({
      msg: "Por favor, proporcione todos los datos necesarios: cedula, email, y formulario.",
    });
  }

  try {
    await enviarCorreo(cedula, email, 4, formulario);
    res.json({ msg: "Correo enviado" });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    res.status(500).send("Error al enviar el correo");
  }
};

exports.enviarCorreoJuegoDenegado = async (req, res) => {
  const { cedula, email, formulario } = req.body;

  if (!cedula || !email || !formulario) {
    return res.status(400).json({
      msg: "Por favor, proporcione todos los datos necesarios: cedula, email, y formulario.",
    });
  }

  try {
    await enviarCorreo(cedula, email, 5, formulario);
    res.json({ msg: "Correo enviado" });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    res.status(500).send("Error al enviar el correo");
  }
};


