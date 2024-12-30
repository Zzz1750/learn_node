const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;
const client = new MongoClient(process.env.MONGO_URI);

let db;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from "public" folder

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        db = client.db('test'); // Replace 'test' with your database name
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
connectDB();

// POST route to handle form submission
app.post('/submit', async (req, res) => {
    const { name, address } = req.body;

    if (!name || !address) {
        return res.status(400).json({ message: 'Name and Address are required' });
    }

    try {
        const collection = db.collection('users'); // Replace 'users' with your collection name
        await collection.insertOne({ name, address });
        res.status(200).json({ message: 'Data inserted successfully!' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'Failed to insert data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
