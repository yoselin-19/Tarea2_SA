// importaciones
const gulp = require('gulp');
zip = require('gulp-zip');
Cliente = require('../Cliente/gulpfile');
Repartidor = require('../Repartidor_Server/gulpfile');
Restaurante = require('../Restaurante_Cliente_Server/gulpfile');

//Creo la funcion que hara el zip
const Fun_zip_Orquestador = function () {
    //Origen del codigo
    //Nombre del zip
    //Destino del zip
    return gulp.src('../Orquestador/src/*')
        .pipe(zip('Orquestador.zip'))
        .pipe(gulp.dest('./dist'));
};

// Crear task que hara el ZIP del servicio
gulp.task('zip_orquestador', Fun_zip_Orquestador);
gulp.task('zip_cliente', Cliente.Fun_zip_Cliente);
gulp.task('zip_repartidor', Repartidor.Fun_zip_Repartidor);
gulp.task('zip_restaurante', Restaurante.Fun_zip_Restaurante);

// Tarea por defecto, creo una serie, con esto ya solo ejecuto el comando: gulp
gulp.task('default', gulp.series('zip_orquestador', 'zip_cliente', 'zip_repartidor', 'zip_restaurante'));

module.exports.Task_Orquestador = this.Task_Orquestador;