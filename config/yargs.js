let colors = require('colors');;

let descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de una tarea'
};

let completado = {
    alias: 'c',
    demand: true,
    desc: `Todas: ${colors.green('t')}, Hechas: ${colors.blue('true')}, Pendientes: ${colors.red('false')}`
};

let realizado = {
    alias: 'r',
    default: true,
    desc: 'Marca que indica tarea realizada'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Borrar un elemento por hacer', { descripcion })
    .command('listar', 'Muestra una lista de todas las tareas', { completado })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        realizado
    })
    .help()
    .argv;

module.exports = {
    argv
};