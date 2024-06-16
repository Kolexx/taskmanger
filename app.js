const express = require('express');
const movieRoutes = require('./route.js/task');
const DbConnect = require('./Config/db_connect');
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handle');
const app = express();

//Middleware
app.use(express.json()); //Parse incoming requests of application/json
app.use(notFound);
app.use(errorHandlerMiddleware);

//route
app.use('/api/v1/movie', movieRoutes);

const PORT = process.env.port || 9000;

const startServer = async () => {
  try {
    await DbConnect('mongodb://localhost:27017/movie');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
