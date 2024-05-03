const express = require('express');
const routes = require('./routes/server.js');

const app = express();
app.set('view engine', 'ejs');

const heureOuvrable = (req, res, next) => {
    const date = new Date();
    const jour = date.getDay(); 
    const heure = date.getHours();

    if (jour >= 1 && jour <= 5 && heure >= 9 && heure < 17) {
        next(); 
    } else {
        res.send('Désolé, cette application est disponible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).');
    }
};

app.use(heureOuvrable);

app.use(routes);
app.listen(3000 , ()=>{
    console.log(' server started at htttp://localhost:3000')
});