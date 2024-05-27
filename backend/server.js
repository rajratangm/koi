// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(cors({
//   origin: 'http://localhost:3000' // Replace with your actual frontend domain
// }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Define Routes
// app.use('/api/auth', require('./routes/auth'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
