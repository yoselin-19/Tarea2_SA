// importaciones
const gulp = require('gulp');
zip = require('gulp-zip');

//Creo la funcion que hara el zip
var Fun_zip_Cliente = function() {
    //Origen del codigo
    //Nombre del zip
    //Destino del zip
    return gulp.src('../Cliente/src/*')
        .pipe(zip('Cliente.zip'))
        .pipe(gulp.dest('./dist'));
};

// Crear task que hara el ZIP del servicio
gulp.task('zip_cliente', Fun_zip_Cliente);

// Tarea por defecto, creo una serie, con esto ya solo ejecuto el comando: gulp
gulp.task('default', gulp.series('zip_cliente'));

module.exports.Fun_zip_Cliente = Fun_zip_Cliente;