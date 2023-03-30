import express from "express";
import { userController } from '../controllers/user.controller.js';

import { validateToken } from "../middlewares/accessToken.middleware.js"
import { chatController } from "../controllers/chat.controller.js";
import { messagesController } from "../controllers/messages.controller.js";

export class Routes {

    routes(app = express.application) {
        app.get('/', (req, res) => {
            res.send(" hola mundo")
        });

        app.post('/data', userController.processData);
        app.get('/test', userController.sayHello);
        app.route('/user-create').post(userController.create);
        app.get('/find_all', userController.findAll);
        app.post('/login', userController.login)
        app.post('/registro', userController.registro)
        app.route('/findone_user/:id').get(userController.findOneUser)
        app.route('/update_user/:id').put(userController.updateUser)
        app.route('/create_message').post(messagesController.createMessages)
        app.route('/findChat/:id1/:id2').get(chatController.findChat)


    }

}
