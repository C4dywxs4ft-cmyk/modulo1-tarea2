const express = require('express');
const app = express ();

app.get('/', (req, res) => {
    res.send('servidor activo y funcionando');
});

app.get('/estado', (req, res) => {
    res.json({
        estado: "servidor funcionando",
        servicio: "API comunitaria"
    });
});

app.listen(3000, () => {
    console.log('servidor ejecutandose en puerto 3000');
});