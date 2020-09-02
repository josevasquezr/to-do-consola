let getEspacios = (cantidad) => {
    let cadenaEspacios = '';

    for (let i = 0; i < cantidad; i++) {
        cadenaEspacios += ' ';
    }

    return cadenaEspacios;
};

module.exports = {
    getEspacios
};