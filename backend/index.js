require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./models/User');

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors());
app.use(express.json());

// ==========================================
// MONGODB CONNECTION
// ==========================================

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in .env file');
} else {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('✅ MongoDB connected successfully');
    })
    .catch((error) => {
      console.error('❌ MongoDB connection error:', error);
    });
}

// ==========================================
// TEST ROUTE
// ==========================================

app.get('/', (req, res) => {
  res.json({
    message: 'CampusKart backend is running 🚀'
  });
});

// ==========================================
// SIGNUP
// ==========================================

app.post('/api/signup', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      college
    } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email and password are required'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase().trim()
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'An account with this email already exists'
      });
    }

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: password,
      college: college || '',
      role: 'user'
    });

    res.status(201).json({
      message: 'Account created successfully',
      name: user.name,
      email: user.email,
      college: user.college,
      role: user.role
    });

  } catch (error) {
    console.error('Signup error:', error);

    res.status(500).json({
      message: 'Could not create account'
    });
  }
});

// ==========================================
// LOGIN
// ==========================================

app.post('/api/login', async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      });
    }

    // Find user
    const user = await User.findOne({
      email: email.toLowerCase().trim()
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    // Login successful
    res.json({
      message: 'Login successful',
      name: user.name,
      email: user.email,
      college: user.college,
      role: user.role || 'user'
    });

  } catch (error) {
    console.error('Login error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

// ==========================================
// CREATE CAMPUSKART ADMIN
// ==========================================

app.post('/api/admin/create', async (req, res) => {
  try {

    console.log('🔵 Admin creation request received');

    // Check whether admin already exists
    const existingAdmin = await User.findOne({
      email: 'admin@campuskart.com'
    });

    if (existingAdmin) {
      return res.status(400).json({
        message: 'Admin already exists'
      });
    }

    // Create admin
    const admin = await User.create({
      name: 'CampusKart Admin',
      email: 'admin@campuskart.com',
      password: 'CampusKart@Admin123',
      college: 'CampusKart',
      role: 'admin'
    });

    console.log('✅ CampusKart admin created');

    res.status(201).json({
      message: 'Admin created successfully',
      email: admin.email
    });

  } catch (error) {

    console.error('❌ Admin creation error:', error);

    res.status(500).json({
      message: 'Could not create admin',
      error: error.message
    });
  }
});

// ==========================================
// GET ALL USERS - ADMIN
// ==========================================

app.get('/api/admin/users', async (req, res) => {
  try {

    const users = await User.find()
      .select('-password')
      .sort({
        createdAt: -1
      });

    res.json({
      users: users
    });

  } catch (error) {

    console.error('Get users error:', error);

    res.status(500).json({
      message: 'Could not fetch users'
    });
  }
});

// ==========================================
// SERVER
// ==========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});