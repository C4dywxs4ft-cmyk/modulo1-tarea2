const express = require('express');
const app = express ();

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
    res.json(reportes);
});

app.post('/reportes', (req, res) =>{

    const reporte = {
        id: reportes.length + 1,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion 
    };

    reportes.push(reporte);

    res.json({
        mensaje: "reporte registrado",
        reporte: reporte 
    });

});

app.listen(3000, () => {
    console.log('servidor ejecutandose en puerto 3000');
});