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

let getListado = () => {
    cargarInfo();
    return listadoPorHacer;
};

let actualizar = (descripcion, completado = true) => {
    cargarInfo();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarInfo();
        return true;
    } else {
        return false;
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