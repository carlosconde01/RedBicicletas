const knex = require('../database/connection');

let Bicicleta = function (id, color, modelo, lat, lon) {
    this.id = id
    this.color = color
    this.modelo = modelo
    this.lat = lat
    this.lon = lon
}

Bicicleta.prototype.toString = function () {
    return `Id: ${this.id}, color: ${this.color}`
}

Bicicleta.all = () => {
    // Realiza la consulta dentro de knex
    return knex
        .select('*')
        .from('bicicletas');
}


// Almacena en la base de datos el producto
Bicicleta.create = (bicicleta) => {
    return knex('bicicletas')
        .insert({
            id: bicicleta.id,
            color: bicicleta.color,
            modelo: bicicleta.modelo,
            lat: bicicleta.lat,
            lon: bicicleta.lon
        });
}

// Elimina el producto con el id dado
Bicicleta.delete = (id) => {
    return knex('bicicletas')
        .delete()
        .where('id', id);
}

Bicicleta.find = (id) => {
    return knex
        .select('*')
        .from('bicicletas')
        .where('id', id)
        .first();
}

// Actualiza la bicicleta con el id dado con la información definida en bicicleta
Bicicleta.update = (id, bicicleta) => {
    return knex('bicicletas')
        .update(bicicleta)
        .update('updated_at', knex.fn.now())
        .where('id', id);
}

Bicicleta.allBicis = []

Bicicleta.add = function (aBici) {
    Bicicleta.allBicis.push(aBici)
}

//Añadir un par de bicis:
let b1 = new Bicicleta(1, 'rojo', 'bmx', 19.284770943610578, -99.13729060406136)
let b2 = new Bicicleta(2, 'blanca', 'Benotto', 19.286055116801744, -99.1369912899661)

Bicicleta.add(b1)
Bicicleta.add(b2)

//Eliminar
Bicicleta.findById = function (aBiciId) {
    let aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)
    if (aBici) {
        return aBici
    }
    else {
        throw new Error(`No existe una bici con el id: ${aBiciId}`)
    }
}

Bicicleta.removeById = function (aBiciId) {
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId) {
            //Borrar
            Bicicleta.allBicis.splice(i, 1)
            break
        }
    }
}

module.exports = Bicicleta