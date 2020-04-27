const opts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de una tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('borrar', 'Borrar un elemento por hacer', opts)
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