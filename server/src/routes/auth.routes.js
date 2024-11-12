const express = require('express');
const authRoutes = express.Router();

authRoutes.post('/register', authController.register);
