const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let router = express.Router();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profiles'));
app.use('/api/researchlines', require('./routes/api/researchlines'));

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
