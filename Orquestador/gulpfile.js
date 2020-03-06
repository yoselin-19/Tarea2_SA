// importaciones
const gulp = require('gulp');
zip = require('gulp-zip');
Cliente = require('../Cliente/gulpfile');
Repartidor = require('../Repartidor_Server/gulpfile');
Restaurante = require('../Restaurante_Cliente_Server/gulpfile');
fs = require('fs');

//Creo la funcion que hara el zip
const Fun_zip_Orquestador = function () {
    //Origen del codigo
    //Nombre del zip
    //Destino del zip
    return gulp.src('../Orquestador/src/*')
        .pipe(zip('Orquestador.zip'))
        .pipe(gulp.dest('./dist'));
};

const Pagina_de_download = function (cb) {
  let contenido = `<h1> Descargas - 201403819- </h1> <br>
  <a download="Cliente.zip" href="Cliente.zip"> Download Zip Cliente</a> <br>
  <a download="Repartidor.zip" href="Repartidor.zip"> Download Zip Repartidor</a> <br>
  <a download="Restaurante.zip" href="Restaurante.zip"> Download Zip Restaurante</a> <br>
  <a download="Orquestador.zip" href="Orquestador.zip"> Download Zip Orquestador</a> <br>
  `
  fs.writeFile('./dist/index.html', contenido, cb);
};

// Crear task que hara el ZIP del servicio
gulp.task('zip_orquestador', Fun_zip_Orquestador);
gulp.task('zip_cliente', Cliente.Fun_zip_Cliente);
gulp.task('zip_repartidor', Repartidor.Fun_zip_Repartidor);
gulp.task('zip_restaurante', Restaurante.Fun_zip_Restaurante);
gulp.task('listado_zips', Pagina_de_download);


// Tarea por defecto, creo una serie, con esto ya solo ejecuto el comando: gulp
gulp.task('default', gulp.series(
                                    'zip_orquestador', 'zip_cliente', 
                                    'zip_repartidor', 'zip_restaurante', 'listado_zips'
                                ));

module.exports.Task_Orquestador = this.Task_Orquestador;