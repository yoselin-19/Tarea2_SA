// importaciones
const express = require('express')
request = require('request');
bodyParser = require('body-parser')

// configuraciones
app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ruteo
/*
  ruta: /platillos_json
  metodo: get
  descripcion: Pedira una lista de platillos disponible mediante una peticion al servicio Restaurante
 */
app.get('/platillos_json', function (req, res) {
    let options = {
        url: 'http://localhost:5000/platillos_json'
    };

    // Haciendo peticion get
    request.get(options, function (err, res_, body) {
        res.send(body)
    });
})

/*
  ruta: /pedido
  metodo: post
  descripcion: Realizara un pedido mediante una peticion al servicio del Restaurante
 */
app.post('/pedido', function (req, res) {
    
    // campos que se enviaran para hacer el post
    let options = {
        url: 'http://localhost:5000/pedido',
        json: true,
        body: req.body
    };

    // Haciendo peticion post
    request.post(options, (err, res_, body) => {
        //Se reenvia la informacion que nos devuelve el restaurante
        res.send(body);
    });
})

/*
  ruta: /repartidor_json
  metodo: get
  descripcion: Pedira un repartidor disponible mediante una peticion al servicio de Repartidores
 */
app.get('/repartidor_json', function (req, res) {
    let options = {
        url: 'http://localhost:4000/repartidor_json'
    };

    // Haciendo peticion get
    request.get(options, function (err, res_, body) {
        res.send(body)
    });
})

app.listen(9000)