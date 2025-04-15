'use strict'

const animalService = require('../services/animalService');

exports.savePictures = async (req, res) => {
  const { type } = req.params;
  const count = parseInt(req.query.count) || 1;
  try {
    const saved = await animalService.fetchAndSave(type.toLowerCase(), count);
    console.log(`✅ Saved ${saved.length} ${type} pictures`);
    res.json(saved);
  } catch (err) {
    console.error('❌ Error saving pictures:', err.message);
    res.status(400).json({ error: err.message });
  }
};

exports.getLatest = async (req, res) => {
  const { type } = req.params;
  const picture = await animalService.getLast(type);
  if (picture) res.json(picture);
  else res.status(404).json({ error: 'No picture found' });
};
