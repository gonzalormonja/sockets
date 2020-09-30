const { io } = require('../server');
//saber cuando un usuario se conecta
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    });
    //saber si un usuario pierde conexion
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //recibir mensaje
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //broadcast es para TODOS los clientes
        client.broadcast.emit('enviarMensaje', data);
        // //avisamos al frontend de que llego todo ok y fue correcto  o no
        // callback('15');
    });
});