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
        try {
            let listadoTareas = porHacer.getListado(argv.completado);
            let cont = 1;

            console.log('======= Por Hacer ======='.green);
            console.log('');

            if (listadoTareas.length !== 0) {
                for (let tarea of listadoTareas) {
                    console.log(`${cont}. ${tarea.descripcion}`);
                    console.log(`${util.getEspacios(String(cont).split('').length  + 1)} ${tarea.completado}`);
                    console.log('');
                    cont++;
                }
            } else if (listadoTareas.length === 0 && argv.completado) {
                console.log('No se ha compleado ninguna tarea.');
            } else {
                console.log('No hay tareas pendientes');
            }

            console.log('');
            console.log('========================='.green);
        } catch (err) {
            console.error(err.message);
        }
        break;

    case 'actualizar':
        try {
            let actualizado = porHacer.actualizar(argv.descripcion, argv.realizado);
            console.log(actualizado);
        } catch (err) {
            console.error(err.message);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No se reconoce comando');
        break;
}