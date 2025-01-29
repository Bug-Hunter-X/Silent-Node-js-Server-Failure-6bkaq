const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
//This code will run perfectly fine most of the times, however, if there is any error in the server setup or listening, it might not show any error message and the server might not start.