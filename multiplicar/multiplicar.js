//requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    console.log('==============='.red);
    console.log(`tabla de ${base}`.red);
    console.log('==============='.red);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index} \n`);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} No es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base } al ${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}