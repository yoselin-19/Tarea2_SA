// importaciones
const gulp = require('gulp');
zip = require('gulp-zip');


//Creo la funcion que hara el zip
var Fun_zip_Repartidor = function () {
    //Origen del codigo
    //Nombre del zip
    //Destino del zip
    return gulp.src('../Repartidor_Server/src/*')
        .pipe(zip('Repartidor.zip'))
        .pipe(gulp.dest('./dist'));
};

// Crear ZIP del servicio
gulp.task('zip_repartidor', Fun_zip_Repartidor);

// Tarea por defecto, creo una serie, con esto ya solo ejecuto el comando: gulp
gulp.task('default', gulp.series('zip_repartidor'));

module.exports.Fun_zip_Repartidor = Fun_zip_Repartidor;