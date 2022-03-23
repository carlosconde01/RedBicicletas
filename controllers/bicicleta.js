const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = function (req, res) {
    Bicicleta.all()
        .then((data) => {
            let bicicletas = data;
            res.render('bicicletas/index', { bicis: bicicletas })
        })
    // res.render('bicicletas/index', { bicis: Bicicleta.allBicis })
}

exports.bicicleta_create_get = function (req, res) {
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function (req, res) {
    // let temp_bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    // temp_bici.ubicacion = [req.body.lat, req.body.lon]
    // Bicicleta.add(temp_bici)
    let bicicleta = {
        id: req.body.id,
        color: req.body.color,
        modelo: req.body.modelo,
        lat: req.body.lat,
        lon: req.body.lon
    }

    Bicicleta.create(bicicleta)
        .then((id) => {
            res.redirect('/bicicletas')
        })

}

// exports.bicicleta_delete_post = function (req, res) {
//     Bicicleta.removeById(req.params.id)
//     res.redirect('/bicicletas')
// }

// Maneja la eliminación del producto
exports.bicicleta_delete_post = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bicicleta) => {
        // Si el producto no existe entonces
        if (bicicleta == null) {
            // Regresa el error 404
            res.status(404).send('Not found');
            return;
        }
        // Elimina los datos del producto
        Bicicleta.delete(bicicleta.id)
            .then((id) => {
                // Al terminar redirige el índice
                res.redirect('/bicicletas');
            });
    });
}

// exports.bicicleta_update_get = function (req, res) {
//     let bici = Bicicleta.findById(req.params.id)
//     res.render('bicicletas/update', { bici })
// }

exports.bicicleta_update_get = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bicicleta) => {
        // Si el producto no existe entonces
        if (bicicleta == null) {
            // Regresa el error 404
            res.status(404).send('Not found');
            return;
        }
        res.render('bicicletas/update', { bici: bicicleta })

    });
}

exports.bicicleta_update_post = function (req, res) {
    let id = req.params.id;

    Bicicleta.find(id).then((bicicleta) => {
        if (bicicleta == null) {
            res.status(404).send('Not found');
            return;
        }
        let newBicicleta = {
            id: req.body.id,
            color: req.body.color,
            modelo: req.body.modelo,
            lat: req.body.lat,
            lon: req.body.lon
        };

        Bicicleta.update(bicicleta.id, newBicicleta)
            .then((id) => {
                res.redirect('/bicicletas')
            });
    });
}


//   // Define los datos del producto actualizado
//   let updateBicicleta = {
//     id: req.body.id,
//     color: req.body.color,
//     modelo: req.body.modelo,
//     lat: req.body.lat,
//     lon: req.body.lon
// }

// // Actualiza los datos del producto
// Bicicleta.update(bicicleta.id, updateBicicleta)
//     .then((id) => {
//         // Al terminar redirige el índice
//         res.redirect('/bicicletas');
//     });