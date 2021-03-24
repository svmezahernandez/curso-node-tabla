const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type:'number',
        default: 10, 
        describe: 'Este es el numero hasta donde quiere la tabla'
    })
    .option('l', {
        alias: 'listar',
        type:'boolean',
        demandOption: true,
        default: false, 
        describe: 'Muestra la tabla en consola'
    })
    
    .check( ( argv, options ) => {
        if( isNaN(argv.b) ){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;