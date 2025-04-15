'use strict'

require('dotenv').config({ path: '.env.local' });
const express = require('express');
const cors = require('cors');
const animalRoutes = require('./routes/animalRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/animals', animalRoutes);
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Starting app on port specified in .env file or by default port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});