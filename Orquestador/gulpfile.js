// importaciones
var gulp = require('gulp');
var zip = require('gulp-zip');
// Cliente = require('../Cliente/gulpfile');
// Repartidor = require('../Repartidor_Server/gulpfile');
// Restaurante = require('../Restaurante_Cliente_Server/gulpfile');
fs = require('fs');

//Creo la funcion que hara el zip
const Fun_zip_Orquestador = function () {
  //Origen del codigo
  //Nombre del zip
  //Destino del zip
  return gulp.src('../Orquestador/src/*')
    .pipe(zip('Orquestador.zip'))
    .pipe(gulp.dest('dist'));
};

const Pagina_de_download = function (cb) {
  let contenido2 = `<h1> Descargas - 201403819- </h1> <br>
  <a download="Servicios.zip" href="Servicios.zip"> Download Zip All Servicios</a> <br>
  `
  fs.writeFile('dist/index.html', contenido2, cb);
};

// Crear task que hara el ZIP del servicio
gulp.task('zip_orquestador', Fun_zip_Orquestador);
// gulp.task('zip_cliente', Cliente.Fun_zip_Cliente);
// gulp.task('zip_repartidor', Repartidor.Fun_zip_Repartidor);
// gulp.task('zip_restaurante', Restaurante.Fun_zip_Restaurante);
gulp.task('listado_zips', Pagina_de_download);

gulp.task('Todo', function () {//FUNCION UTILIZADA PARA EMPAQUETAR TODO LOS SERVICIOS EN UN ZIP 
  return gulp.src('../*/src/*')//carpeta de la cual se extraera el codigo
    .pipe(zip('Servicios.zip'))// nombre del zip
    .pipe(gulp.dest('dist'));//ubicacion del zip
});


// Tarea por defecto, creo una serie, con esto ya solo ejecuto el comando: gulp
gulp.task('All', gulp.series('Todo', 'listado_zips'));

// module.exports.Task_Orquestador = this.Task_Orquestador;