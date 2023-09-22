// exportamos los arreglos a traves de la funcion require encontrada en el archivo datos.js 
const datos = require('./datos');
//Creamos una funcion asincronica de callback para poder buscar a el usuario
function buscarusuario(id, callback){
    const user = datos.user.find((user)=> user.id==id );
    if (!user)
    {
        const error= new Error();
        error.message="Usuario no encontrado";
        return callback(error);
    }
    return callback(null, user );

}