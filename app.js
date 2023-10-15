const express = require('express');

const app = express();

//const fichierRoute = require('./routes/fichier');

//app.use('/fichiers',fichierRoute);

app.use(( req, res, next) => {
    //res.status(500).send('Quelque chose s\'est mal passe!');
    let sexe = 'garcon'
    if (sexe == 'garcon') {
        req.user ='Issa KANE est  un garcon';

    }
    else {
        req.user ='Maguette DRAME est une fille';
    }
    next();
});


app.get('/erreur',(req, res, next) => {
    //const erreur = new Error('Ceci est un erreur de test');
    //next(erreur);
    res.status(200).send('Bonjour, '+req.user);

});






const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log('Le serveur Express ecoute sur le port ',port);
});

//app.listen(3001);