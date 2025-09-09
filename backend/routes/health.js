const express = require('express');
const router = express.Router();

// Basic health check endpoint
router.get('/', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

// Detailed health check endpoint
router.get('/detailed', (req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        message: 'OK',
        timestamp: new Date().toISOString()
    };
    res.status(200).json(healthCheck);
});

module.exports = router;