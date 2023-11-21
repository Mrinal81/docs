const express = require('express');
const cors = require('cors');
const doctorsRouter = require('./routes/doctors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    next();
});

// Parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api/doctors', doctorsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
