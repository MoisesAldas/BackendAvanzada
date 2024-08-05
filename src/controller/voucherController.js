// controllers/voucherController.js
const { getDB } = require("../config/conexion");
const { ObjectId } = require("mongodb");

// Función para manejar la subida del comprobante
const uploadVoucher = async (req, res) => {
    const { cedula } = req.params;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ msg: "No file uploaded" });
    }

    try {
        const db = getDB();
        const result = await db.collection("Formularios").findOneAndUpdate(
            { cedula: cedula.toString() },
            { $set: { imagenComprobante: file.buffer } },
            { returnOriginal: false }
        );

        if (!result.value) {
            return res.status(404).json({ msg: "Formulario not found" });
        }

        res.json({ msg: "Comprobante uploaded successfully", formulario: result.value });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    uploadVoucher,
};
