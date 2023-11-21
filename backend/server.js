const express = require('express');
const cors = require('cors');
const doctorsRouter = require('./routes/doctors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
    exposeHeaders: 'WWW-Authenticate, Server-Authorization'
}));

// Parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api/doctors', doctorsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
