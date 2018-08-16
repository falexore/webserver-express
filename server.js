const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
//Express
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //     let salida = {
    //         nombre: 'Fredy Orellana',
    //         edad: 32,
    //         url: req.url
    //     }
    res.render('home.hbs', {
        nombre: 'Fredy'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});


// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});