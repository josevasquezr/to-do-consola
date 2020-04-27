const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let nuevaTarea = porHacer.crearTarea(argv.descripcion);
        console.log(nuevaTarea);
        break;
    case 'listar':
        let listadoTareas = porHacer.getListado();
        for (let tarea of listadoTareas) {
            console.log('======= Por Hacer ======='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log('No se reconoce comando');
        break;
}