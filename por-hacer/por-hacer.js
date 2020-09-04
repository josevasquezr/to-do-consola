let fs = require('fs');
let listadoPorHacer = [];

let guardarInfo = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./bd/bd.json', data, (err) => {
        if (err) {
            throw new Error('Error al crear archivo', err);
        }
    });
};

let crearTarea = (descripcion) => {
    cargarInfo();

    let nuevaTarea = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(nuevaTarea);
    guardarInfo();

    return nuevaTarea;
};

let cargarInfo = () => {
    try {
        listadoPorHacer = require('../bd/bd.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

let getListado = (completado) => {
    cargarInfo();

    try {
        let listado = [];

        switch (completado) {
            case 't':
                listado = listadoPorHacer;
                break;

            case 'true':
                listado = listadoPorHacer.filter(tarea => tarea.completado === true);
                break;

            case 'false':
                listado = listadoPorHacer.filter(tarea => tarea.completado === false);
                break;

            default:
                throw new Error("Valor de completado incorrecto.");
                break;
        }

        return listado;

    } catch (err) {
        throw err;
    }
};

let actualizar = (descripcion, realizado = true) => {
    cargarInfo();
    console.log(realizado);
    try {
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

        if (index >= 0) {
            listadoPorHacer[index].completado = (realizado === 'true' && true);
            guardarInfo();
            return true;
        } else {
            return false;
        }
    } catch (err) {
        throw new Error('Error al actualizar tarea', err);
    }
};

let borrar = (descripcion) => {
    cargarInfo();
    let nuevoListado = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarInfo();
        return true;
    }
};

module.exports = {
    crearTarea,
    getListado,
    actualizar,
    borrar
};