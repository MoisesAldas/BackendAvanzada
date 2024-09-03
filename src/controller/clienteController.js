const Cliente = require("./../model/Client.js");
const { enviarCorreo } = require("../config/correo.js");

const { getDB } = require("../config/conexion");
const { ObjectId } = require("mongodb");

const obtenerClientes = async (req, res) => {
  try {
    const db = getDB();
    const clientes = await db.collection("Clientes").find().toArray();
    res.json(clientes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los clientes: " + error.message });
  }
};

const aceptarRegistro = async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDB();
    const cliente = await db
      .collection("Clientes")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { estado: "aceptado" } },
        { returnOriginal: false }
      );

    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    await enviarCorreo(cliente.cedula, cliente.email, 3);
    res.json(cliente);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al aceptar el registro: " + error.message });
  }
};

const denegarRegistro = async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDB();
    const cliente = await db
      .collection("Clientes")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { estado: "denegado" } },
        { returnOriginal: false }
      );

    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await enviarCorreo(cliente.cedula, cliente.email, 2);
    res.json(cliente);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al denegar el registro: " + error.message });
  }
};

module.exports = {
  obtenerClientes,
  aceptarRegistro,
  denegarRegistro,
};
