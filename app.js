const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
// middleware
app.use(express.static('./public'));
app.use(express.json());
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
// prueba en consola PORT=6000 node app.js y verás que se cambia a port 6000, esto es para manejar errores en el deployment y tenga conflicto con puerto único
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
