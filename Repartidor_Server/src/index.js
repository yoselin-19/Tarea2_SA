// importaciones
const express = require('express'),
  BD_repartidores = require('./BD_repartidores').data_

// configuraciones
app = express()

// Motor de plantillas
app.set("view engine", "jade");

// ruteo
/*
  ruta: /
  metodo: get
  descripcion: Mostrara una pagina con el listado de los repartidores disponibles en la BD
 */
app.get('/', function (req, res) {
  res.render("showRepartidores", { repartidores: BD_repartidores })
})

/*
  ruta: /repartidor_json
  metodo: get
  descripcion: Retornara el json con los repartidores disponibles en la BD
 */
app.get('/repartidor_json', function (req, res) {
  res.json(BD_repartidores)
})

app.listen(4000)