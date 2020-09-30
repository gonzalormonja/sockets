 //io es el mismo objeto que tengo el sever.js
 var socket = io();

 //saber si el usuario esta conectado
 socket.on('connect', function() {
     console.log("Conectado al servidor");
 });

 //pierdo conexion
 socket.on('disconnect', function() {
     console.log('Perdimos conexion con el servidor');
 });



 //enviar informacion al backend
 socket.emit('enviarMensaje', {
     usuario: 'Gonzalo',
     mensaje: 'Hola mundo'
 }, function(resp) { //esto es el callback para q el servidor confirme que recibio y proceso el dato
     console.log('Se disparó el callback', resp);
 });
 //recibir informacion
 socket.on('enviarMensaje', function(mensaje) {
     console.log(mensaje);
 });