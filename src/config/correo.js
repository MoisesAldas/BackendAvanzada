const nodemailer = require("nodemailer");
const {
  email1_rechazoPedido,
} = require("../document/email_templates/correo1_rechazarRegistro.js");
const {
  email2_aceptoPedido,
} = require("../document/email_templates/correo2_aceptarRegistro.js");
const {
  email3_aceptoPago,
} = require("../document/email_templates/correo3_aceptarPago.js");
const {
  email4_rechazoPago,
} = require("../document/email_templates/correo4_rechazarPago.js");
const {
  email0_procesoCompra,
} = require("../document/email_templates/correo0_procesoCompra.js");

const enviarCorreo = async (cedula, email, tipo, formulario = null) => {
  try {
    // Configuración del transportador de correos
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // or 'STARTTLS'
      auth: {
        user: process.env.USER_MAIL_SERVER1, // Usuario del servidor de correo
        pass: process.env.PSWD_MAIL_SERVER1, // Contraseña del servidor de correo
      },
      tls:{
        rejectUnauthorized: false
      }
    });

    // Definición de las opciones del correo en función del tipo
    const opcionesCorreo = {
      1: {
        from: '"Game Galaxy" <melycaicedo@gmail.com>', // Nombre y dirección del remitente
        subject: "Solicitud de Compra en Proceso de Revisión",
        to: email,
        html: email0_procesoCompra(formulario),
      },
      2: {
        from: '"Game Galaxy" <melycaicedo@gmail.com>',
        subject: "Corrección de datos de solicitud",
        to: email, // Dirección del destinatario
        html: email1_rechazoPedido(formulario), // Contenido HTML del correo
      },
      3: {
        from: '"Game Galaxy" <melycaicedo@gmail.com>',
        subject: "Realizar pago",
        to: email,
        html: email2_aceptoPedido(formulario),
      },
      4: {
        from: '"Game Galaxy" <melycaicedo@gmail.com>',
        subject: "Pago aceptado",
        to: email,
        html: email3_aceptoPago(formulario),
      },
      5: {
        from: '"Game Galaxy" <melycaicedo@gmail.com>',
        subject: "Pago rechazado",
        to: email,
        html: email4_rechazoPago(formulario),
      },
    };

    // Selección de las opciones según el tipo de correo
    const opciones = opcionesCorreo[tipo];
    if (!opciones) {
      throw new Error("Tipo de correo no válido");
    }

    // Envío del correo
    transporter.sendMail(opciones, (error, info) => {
      if (error) {
        throw new Error("Error al enviar email: " + error.message);
      }
      console.log("Correo enviado: " + info.response);
    });
  } catch (err) {
    throw new Error(`Error al enviar: ${err.message}`);
  }
};

module.exports = { enviarCorreo };
