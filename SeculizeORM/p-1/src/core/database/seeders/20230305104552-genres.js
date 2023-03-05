'use strict';

const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = fs.readFileSync('src/constants/default-genres.json', {
      encoding: 'utf8',
    });
    const genres = JSON.parse(data);

    const newGenres = [];
    for (const genre of genres.data) {
      const exists = await queryInterface.rawSelect(
        'genres',
        {
          where: {
            genre: genre.genre,
          },
        },
        ['id'],
      );
      if (exists) continue;
      newGenres.push(genre);
    }
    if (!newGenres.length) return;

    return queryInterface.bulkInsert('genres', newGenres, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {});
  },
};
