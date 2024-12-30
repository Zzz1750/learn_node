require('dotenv').config(); // Load environment variables
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const uri = process.env.MONGO_URI; // Your MongoDB Atlas connection string

// Serve the HTML file
app.use(express.static('public'));

// Route to check MongoDB connection
app.get('/check-connection', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  } finally {
    await client.close();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
