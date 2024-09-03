const email0_procesoCompra = (formulario) => {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compra en Proceso - Game Galaxy</title>
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
        .order-details, .client-info {
            margin-top: 20px;
        }
        .order-details table, .client-info table {
            width: 100%;
            border-collapse: collapse;
        }
        .order-details th, .order-details td, .client-info th, .client-info td {
            padding: 10px;
            border: 1px solid #4CAF50;
            text-align: left;
        }
        .order-details th, .client-info th {
            background-color: #4CAF50;
            color: #ffffff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎮 Game Galaxy 🎮</h1>
        </div>
        <div class="content">
            <h2>¡Compra en Proceso!</h2>
            <p>Estimado(a) cliente: ${formulario.nombre},</p>
            <p>¡Gracias por tu compra! Tu pedido está siendo procesado y pronto estará listo para ti. A continuación, encontrarás los detalles de tu compra y tu información:</p>
            <div class="client-info">
                <h3>Información del Cliente</h3>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <td>${formulario.nombre}</td>
                    </tr>
                    <tr>
                        <th>Cédula</th>
                        <td>${formulario.cedula}</td>
                    </tr>
                    <tr>
                        <th>Correo Electrónico</th>
                        <td>${formulario.email}</td>
                    </tr>
                    <tr>
                        <th>Teléfono</th>
                        <td>${formulario.telefono}</td>
                    </tr>
                </table>
            </div>
            <div class="order-details">
                <h3>Detalles del Pedido</h3>
                <table>
                    <tr>
                        <th>Nombre del Juego</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>${formulario.videojuego}</td>
                                                <td>$${formulario.precio} </td>
                        <td>$${formulario.subtotal} </td>
                    </tr>
                </table>
            </div>
            <h3>Total: $${formulario.total} </h3>
        </div>
        <div class="footer">
            <p>Los juegos y aplicaciones compradas en Game Galaxy califican para un reembolso en un plazo de 14 días a partir de la compra (o después de 14 días del lanzamiento, en el caso de las precompras) si jugaste menos de 2 horas, a menos que se indique lo contrario en sus páginas de producto. Las ofertas que incluyen monedas virtuales u otros consumibles se marcan como "no reembolsables" y no es posible procesar un reembolso para ellas. La mayoría de las compras dentro de la aplicación no son reembolsables.</p>
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en <a href="mailto:melycaicedo7@gmail.com">contactarnos</a>.</p>
            <p>&copy; 2024 Game Galaxy. Todos los derechos reservados.</p>
            <p>Gracias por su paciencia y por preferirnos.</p>
        </div>
    </div>
</body>
</html>
    `;
};

module.exports = { email0_procesoCompra };