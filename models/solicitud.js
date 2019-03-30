const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const solicitudSchema = new Schema({
  user_id: { type: Schema.ObjectId, ref: 'Usuario' },
  emergencia_id: { type: Schema.ObjectId, ref: 'emergencia' },
  mensaje: String,
  fecha_emergencia: String,
  hora_emergencia: String,
  tipo_sangre: String,
  emergencia: Boolean,
  
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })
const Solicitud = mongoose.model('Solicitud', adopcionSchema)
module.exports = Solicitud;