// importaciones
const gulp = require('gulp');
zip = require('gulp-zip');


// Crear ZIP del servicio
gulp.task('zip_restaurante', function () {
    //Origen del codigo
    //Nombre del zip
    //Destino del zip
    //Notificacion
    return gulp.src('src/*')
        .pipe(zip('Restaurante.zip'))
        .pipe(gulp.dest('dist'));
});