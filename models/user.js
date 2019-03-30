const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  sexo: {
    type: String,
    enum: ['H', 'M']
  },
  email: String,
  password: String,
  edad: String,
  estado: String,
  descripcion: String,
  image: String,
  typeBlode: {
    type: String,
    enum: ['A+', 'B+', 'AB', 'O+', 'A-', 'B-', 'AB-' ,'O-'],
    default: 'A+'
  },
  typeUSer: {
    type: String,
    enum: ['donar', 'solicitar'],
    default: 'donar'
  }
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

const Usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = Usuario;