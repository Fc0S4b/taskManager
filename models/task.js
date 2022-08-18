const mongoose = require('mongoose');
// el objeto que tiene name es un validador, ya que si no lo tiene, entonces si se hacen solicitudes post vacías, se guardarán en la db y no son necesarias, es necesario un par de requisitos para que se guarde en el name ( y también un validador para completed). Mas info de validadores en los docs del paquete de mongoose
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'must provide name'],
    trim: true, //para eliminar espacios en blanco en extremos
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
