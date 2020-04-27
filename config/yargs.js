const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de una tarea'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de una tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca que indica si una tarea fue realizada'
        }
    })
    .help()
    .argv;




module.exports = {
    argv
};