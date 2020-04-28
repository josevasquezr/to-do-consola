let descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de una tarea'
};

let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca que indica si una tarea fue realizada'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Borrar un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
};