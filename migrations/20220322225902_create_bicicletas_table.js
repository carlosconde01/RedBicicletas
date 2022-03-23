exports.up = function (knex) {
    return knex.schema
        .createTable('bicicletas', (table) => {
            table.increments('id');
            table.string('color', 255).notNullable();
            table.string('modelo', 512).notNullable();
            table.float('lat', 25, 6).notNullable();
            table.double('lon', 25, 6).notNullable();
            table.timestamps(true, true);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('bicicletas');
};

