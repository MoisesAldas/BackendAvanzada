const email1_rechazoPedido = (formulario) => {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rechazo de Pedido - Game Galaxy</title>
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
        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎮 Game Galaxy 🎮</h1>
        </div>
        <div class="content">
            <div style="font-size: 70px;">🚫</div>
            <h2>¡Pedido Rechazado!</h2>
            <p>Estimado(a) cliente: ${formulario.nombre},</p>
            <p>Lamentamos informarte que tu pedido ha sido rechazado.</p>
            <p>Para continuar con el proceso de compra, te pedimos que ingreses nuevamente tus datos en el formulario.</p>
            <p>Por favor, haz clic en el siguiente enlace para redirigirte al formulario y completar los datos requeridos:</p>
            <p><a href="http://34.67.50.99:4200/videojuego-form" target="_blank" class="button">Ir al formulario</a></p>
        </div>
        <div class="footer">
            <p>Los juegos y aplicaciones compradas en Game Galaxy califican para un reembolso en un plazo de 14 días a partir de la compra (o después de 14 días del lanzamiento, en el caso de las precompras) si jugaste menos de 2 horas, a menos que se indique lo contrario en sus páginas de producto. Las ofertas que incluyen monedas virtuales u otros consumibles se marcan como "no reembolsables" y no es posible procesar un reembolso para ellas. La mayoría de las compras dentro de la aplicación no son reembolsables.</p>
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en <a href="mailto:melycaicedo7@gmail.com">contactarnos</a>.</p>
            <p>&copy; 2024 Game Galaxy. Todos los derechos reservados.</p>
            <p>Gracias por tu paciencia y por preferirnos.</p>
        </div>
    </div>
</body>
</html>`;
};

module.exports = { email1_rechazoPedido };