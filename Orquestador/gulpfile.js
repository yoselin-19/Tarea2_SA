// importaciones
const gulp = require('gulp');
zip = require('gulp-zip');


// Crear ZIP del servicio
gulp.task('zip_orquestador', function () {
    //Origen del codigo
    //Nombre del zip
    //Destino del zip
    //Notificacion
    return gulp.src('src/*')
        .pipe(zip('Orquestador.zip'))
        .pipe(gulp.dest('dist'));
});

// Tarea por defecto, creo una serie, con esto ya solo ejecuto el comando: gulp
gulp.task('default', gulp.series('zip_orquestador'));