const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 3000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

process.on('uncaughtException', (err) => {
  console.error('An uncaught exception occurred:', err);
  process.exit(1);
});

startServer();