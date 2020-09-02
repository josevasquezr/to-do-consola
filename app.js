const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
const util = require('./util/util');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let nuevaTarea = porHacer.crearTarea(argv.descripcion);
        console.log(nuevaTarea);
        break;
    case 'listar':
        let listadoTareas = porHacer.getListado();
        let cont = 1;

        console.log('======= Por Hacer ======='.green);
        console.log('');

        for (let tarea of listadoTareas) {
            console.log(`${cont}. ${tarea.descripcion}`);
            console.log(`${util.getEspacios(String(cont).split('').length  + 1)} ${tarea.completado}`);
            console.log('');
            cont++;
        }

        console.log('');
        console.log('========================='.green);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No se reconoce comando');
        break;
}