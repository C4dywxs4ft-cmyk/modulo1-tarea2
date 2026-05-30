const express = require ('express');
const app = express ();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
    res.send('hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) =>{
    const mensaje = req.body.mensaje;

    res.json({
        estado: "Reporte recibido",
        mensaje: mensaje 
    });
});

app.listen(3000, () => {
    console.log ('servidor ejecutandose en puerto 3000');
});