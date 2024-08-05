const express = require("express");
const router = express.Router();

// Importar el controlador de formulario
const formularioControlador = require("../controller/formularioControlador");

// Definir las rutas
router.get("/", formularioControlador.getAllFormularios);
router.get("/:id", formularioControlador.getFormularioById);
router.post("/", formularioControlador.createFormulario);
router.put("/:id", formularioControlador.updateFormulario);
router.delete("/:id", formularioControlador.deleteFormulario);
router.post(
  "/enviarCorreoDePruebaDenegado",
  formularioControlador.enviarCorreoDePruebaDenegado
);
router.post(
  "/enviarCorreoAceptado",
  formularioControlador.enviarCorreoAceptado
);
router.post(
  "/enviarCorreoJuego",
  formularioControlador.enviarCorreoJuego
);

router.post(
  "/enviarCorreoJuegoDenegado",
  formularioControlador.enviarCorreoJuegoDenegado
);



module.exports = router;
