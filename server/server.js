const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware to parse JSON data in POST requests
app.use(bodyParser.json());
app.use(cors());

// Define a route to handle the POST request
app.post('/api/save-configuration', (req, res) => {
  const userConfiguration = req.body;

  console.log('Received user configuration:', userConfiguration);

  res.json({ message: 'Configuration received successfully' });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
