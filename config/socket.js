import { Server } from 'socket.io';
import { Op } from 'sequelize';
import { UserModel } from '../models/user.model.js';


export class SocketIo {

  async SocketinitListen(io) {
    io.on('connection', (socket) => {
      //Mensaje de usuario conectado
      console.log('NewUserConnected', socket.id)
      socket.emit("new-user-onLine", socket.id)
      //Mensaje de usuario desconectado
      socket.on('disconnect', async () => {
        console.log('user disconnected', socket.id);
      });
      //Mensajes
      socket.on('new-message', data => {
        console.log(data)
        io.emit('new-message',
          "mensaje guardado")
      });



    //socket.on('message', (data) => {
    //  socket.emit('new message', data)
    //  socket.broadcast.emit('message', contenido)
    //});
  })
}
}