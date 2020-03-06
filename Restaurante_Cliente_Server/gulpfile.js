// importaciones
const gulp = require('gulp');
zip = require('gulp-zip');


//Creo la funcion que hara el zip
var Fun_zip_Restaurante = function () {
    //Origen del codigo
    //Nombre del zip
    //Destino del zip
    return gulp.src('../Restaurante_Cliente_Server/src/*')
        .pipe(zip('Restaurante.zip'))
        .pipe(gulp.dest('./dist'));
};

// Crear ZIP del servicio
gulp.task('zip_restaurante', Fun_zip_Restaurante);

// Tarea por defecto, creo una serie, con esto ya solo ejecuto el comando: gulp
gulp.task('default', gulp.series('zip_restaurante'));

module.exports.Fun_zip_Restaurante = Fun_zip_Restaurante;