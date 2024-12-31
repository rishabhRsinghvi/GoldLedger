const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize app
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const supplierRoutes = require('./routes/supplierRoutes');
const retailerRoutes = require('./routes/retailerRoutes');

// Use routes
app.use('/api/suppliers', supplierRoutes);
app.use('/api/retailers', retailerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
