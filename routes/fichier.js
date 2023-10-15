const express = require('express');



// import all controllers
const fichierCtrl = require('../contrlollers/fichier')



const routes = new express.Router();

// Add routes
routes.get('/',fichierCtrl.all);
routes.get('/:id', fichierCtrl.one);
routes.post('/', fichierCtrl.add);
routes.put('/:id', fichierCtrl.update);
routes.delete('/:id', fichierCtrl.delete);

module.exports = routes;