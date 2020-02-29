// importaciones
const express = require('express')
request = require('request');
bodyParser = require('body-parser')
BD_platillos = require('./BD_platillos').data_

// configuraciones
app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Motor de plantillas
app.set("view engine", "jade");

// ruteo
/*
  ruta: /
  metodo: get
  descripcion: Mostrara una pagina con el listado de los platillos que se tienen en la BD
 */
app.get('/', function (req, res) {
    res.render("showPlatillos", { platillos: BD_platillos["platillos"] })
})

/*
  ruta: /platillos_json
  metodo: get
  descripcion: Retornara el json con los platillos disponibles en la BD
 */
app.get('/platillos_json', function (req, res) {
    res.json(BD_platillos)
})

/*
  ruta: /pedido
  metodo: post
  descripcion: Realizara una peticion al servidor de Repartidores, del cual se toma el primer repartidor disponible,
                y como simulacion del pedido se devuelve un objeto con un mensaje, el pedido que se solicito y los
                datos del repartidor que nos devolvio el servidor de repartidores
 */
app.post('/pedido', function (req, res) {
    // Obteniendo valor del platillo que se pidio
    let pedido_recibido = req.body.orden

    // Haciendo peticion get al servidor de Repartidores
    request.get('http://localhost:9000/repartidor_json', function (err, res_, body) {
        if (err) {
            valores_retornar = {
                mensaje: 'Ocurrio un error, no se pudo realizar el pedido',
                Ped: null,
                Rcod: null,
                Rname: null
            }
            res.send(valores_retornar)
        }
        else {
            let json = JSON.parse(body);
            // para efectos de demostracion de resultados, tomo por default el primer elemento del json
            let repart = json[0];
            valores_retornar = {
                mensaje: 'Pedido realizado',
                Ped: pedido_recibido,
                Rcod: repart.codigo,
                Rname: repart.name
            }
            res.send(valores_retornar)
        }
    })

})


app.listen(5000)