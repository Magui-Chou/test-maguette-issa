const express = require('express');

const app = express();

//const fichierRoute = require('./routes/fichier');

//app.use('/fichiers',fichierRoute);

app.use((err, req, res, next) => {
    res.status(500).send('Quelque chose s\'est mal passe!');
});


app.get('/erreur',(req, res, next) => {
    const erreur = new Error('Ceciest un erreur de test');
    next(erreur);
});






const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log('Le serveur Express ecoute sur le port ${port}');
});

//app.listen(3001);