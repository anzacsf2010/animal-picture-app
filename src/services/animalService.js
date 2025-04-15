'use strict'

const axios = require('axios');
const prisma = require('../db');

const urls = {
  cat: 'https://api.thecatapi.com/v1/images/search',
  dog: 'https://dog.ceo/api/breeds/image/random',
  fox: 'https://randomfox.ca/floof/'
};

// Controller to fetch latest random picture and save it to the database.
exports.fetchAndSave = async (type, count) => {
  if (!urls[type]) throw new Error('Invalid animal type');
  const saved = [];
  for (let i = 0; i < count; i++) {
    let imageUrl;
    if (type === 'cat') {
      const res = await axios.get(urls.cat);
      imageUrl = res.data[0]?.url;
    } else if (type === 'dog') {
      const res = await axios.get(urls.dog);
      imageUrl = res.data?.message;
    } else if (type === 'fox') {
      const res = await axios.get(urls.fox);
      imageUrl = res.data?.image;
    }
    if (!imageUrl) continue;
    const record = await prisma.animalPicture.create({
      data: {
        type,
        url: imageUrl,
      },
    });
    saved.push(record);
  }
  return saved;
};

// Fetch the latest animal picture saved in the database (by type)
exports.getLast = async (type) => {
  return prisma.animalPicture.findFirst({
    where: { type },
    orderBy: { createdAt: 'desc' },
  });
};