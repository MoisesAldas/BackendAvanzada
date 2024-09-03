const email3_aceptoPago = (formulario) => {
  return `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Compra Exitosa - Game Galaxy</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #ffffff;
              color: #333333;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
          }
          .header {
              background-color: #4CAF50;
              color: #ffffff;
              padding: 10px 0;
              text-align: center;
          }
          .header h1 {
              margin: 0;
          }
          .content {
              padding: 20px;
              border: 1px solid #4CAF50;
              margin-top: 20px;
              text-align: center;
          }
          .content h2 {
              color: #4CAF50;
          }
          .content p {
              margin: 15px 0;
          }
          .footer {
              background-color: #f0f0f0;
              color: #333333;
              padding: 20px;
              text-align: center;
              margin-top: 20px;
              border-top: 1px solid #4CAF50;
              font-size: 12px;
          }
          .footer p {
              margin: 5px 0;
          }
          .footer a {
              color: #4CAF50;
              text-decoration: none;
          }
          .button {
              background-color: #4CAF50;
              color: #ffffff;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              display: inline-block;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>🎮 Game Galaxy 🎮</h1>
          </div>
          <div class="content">
              <div style="font-size: 70px;">🛒</div>
              <h2>¡Compra Realizada!</h2>
              <p>Estimado(a) cliente: ${formulario.nombre},</p>
              <p>¡Gracias por elegirnos para tu compra en Game Galaxy!</p>
              <p>Tu compra ha sido procesada exitosamente. Puedes dirigirte al siguiente enlace para comenzar a jugar:</p>
              <a href="https://drive.google.com/drive/folders/1xVoCU34Z169h_HXXLu5kwahkZ-Y2JwrY?usp=sharing" class="button">Jugar Ahora</a>
              <p>Gracias por preferirnos.</p>
          </div>
          <div class="footer">
              <p>Los juegos y aplicaciones compradas en Game Galaxy califican para un reembolso en un plazo de 14 días a partir de la compra (o después de 14 días del lanzamiento, en el caso de las precompras) si jugaste menos de 2 horas, a menos que se indique lo contrario en sus páginas de producto. Las ofertas que incluyen monedas virtuales u otros consumibles se marcan como "no reembolsables" y no es posible procesar un reembolso para ellas. La mayoría de las compras dentro de la aplicación no son reembolsables.</p>
              <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en <a href="mailto:melycaicedo7@gmail.com">contactarnos</a>.</p>
              <p>&copy; 2024 Game Galaxy. Todos los derechos reservados.</p>
              <p>Gracias por su paciencia y por preferirnos.</p>
          </div>
      </div>
  </body>
  </html>`;
};

module.exports = { email3_aceptoPago };
