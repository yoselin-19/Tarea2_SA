// importaciones
const express = require('express')
request = require('request');
bodyParser = require('body-parser')

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
  descripcion: Mostrara una pagina con el listado de los platillos que el restaurante ofrece
 */
app.get('/', function (req, res) {
    let options = {
        url: 'http://localhost:9000/platillos_json'
    };

    // Haciendo peticion get
    request.get(options, function (err, res_, body) {
        if (err) {
            let json = []
            res.render("pedido")
        }
        else {
            let json = JSON.parse(body);
            json = json['platillos']
            res.render("pedido", { platillos: json })
        }
    });
})

/*
  ruta: /make_pedido
  metodo: post
  descripcion: Realizara una peticion al servidor del Restaurante, para realizar el pedido de comida, despues
                nos devolvera la informacion del pedido y los datos del repartidor que nos entregara la comida
                si todo salio bien, de lo contrario mostrara un mensaje de error
 */
app.post('/make_pedido', function (req, res) {
    // Obteniendo valor del platillo seleccionado para hacer el pedido
    pedido = req.body.platillos

    // campos que se enviaran para hacer el post
    let options = {
        url: 'http://localhost:9000/pedido',
        json: true,
        body: {
            orden: pedido
        }
    };

    // Haciendo peticion post
    request.post(options, (err, res_, body) => {
        // informacion a mostrar en la pagina
        informacion = { mensaje: body.mensaje, pedido: body.Ped, Cod: body.Rcod, Name: body.Rname }

        if (err) {
            res.render("exito", informacion)
        }
        else {
            res.render("exito", informacion)
        }
    });
})

app.listen(3000)