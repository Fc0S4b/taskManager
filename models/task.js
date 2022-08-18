const mongoose = require('mongoose');
// este es el único esquema válido, cualquier otra propiedad será ignorada (si pones en el body al hacer post en createTask en postman, otra propiedad que no sea name y completed, será ignorada)
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)
