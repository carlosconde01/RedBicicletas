/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bicicletas').del()
    .then(function () {
      // Inserts seed entries
      return knex('bicicletas').insert([
        { id: '1', color: 'Roja', modelo: 'Benotto', lat: 19.284076, lon: -99.135555 },
        { id: '2', color: 'Verde', modelo: 'Merida', lat: 19.354076, lon: -99.145837 },
      ]);
    });
};
