const fs = require('fs');
const  colors = require('colors');
const crearArchivo = async( base = 5, listar = false, hasta= 10 ) =>{
    try{

        let salida = '';
        let consola = '';
    
        for( let i = 1; i <= hasta ; i++ ){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }
    

        if( listar ) {
            console.clear();
            console.log('================================'.green);
            console.log('Tabla de:'.green, colors.blue( base ) );
            console.log('================================'.green);

            console.log(consola);
        }
      
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida)
    
        return `tabla-${base}.txt`;
    } catch(err){
        throw err
    }
}


// const crearArchivo = ( base = 5 ) =>{

//     return new Promise( (resolve, reject) => {
//         console.clear();
//         console.log('================================');
//         console.log(`  Tabla de: ${base}  `);
//         console.log('================================');


//         let salida = '';

//         for( let i = 1; i <= 10 ; i ++ ){
//             salida += `${ base } x ${ i } = ${ base * i }\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync( `tabla-${ base }.txt`, salida)

//         resolve('tabla-' + base + '.txt creado');
//     })  

// }


module.exports = {
    crearArchivo
}