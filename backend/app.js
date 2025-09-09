
const express = require('express');

const app = express();

const healthRoutes = require('./routes/health.js');

const PORT = process.env.PORT || 3001;

// Middleware לניתוח JSON
app.use('/api/health', healthRoutes);

// התחלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;