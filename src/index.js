const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const healthRoutes = require('./routes/healthRoutes');

// Import middleware
const errorMiddleware = require('./middlewares/errorMiddleware');

// Import utils
const logger = require('./utils/logger');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/health', healthRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to Hyperlocal Marketplace API',
    version: '1.0.0'
  });
});

// Error handling middleware
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
