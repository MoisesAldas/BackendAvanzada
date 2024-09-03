class Formulario {
  constructor(
    nombre,
    cedula,
    email,
    telefono,
    videojuego,
    codigoDescuento,
    total,
    subtotal,
    precio,
    imagenComprobante,
    juego,
    estado
  ) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.email = email;
    this.telefono = telefono;
    this.videojuego = videojuego;
    this.codigoDescuento = codigoDescuento;
    this.total = total;
    this.subtotal = subtotal;
    this.precio = precio;
    this.imagenComprobante = imagenComprobante;
    this.juego = juego;
    this.estado=estado
  }
}

module.exports = Formulario;
