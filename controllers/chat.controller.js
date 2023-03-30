import {chatQueries} from "../queries/chat.queries.js"  ;
import {request, response} from "express"   ;
import {Payload} from "../helpers/payload.js";
import req from "express/lib/request.js"  ;
import {MessagesQueries} from "../queries/messages.queries.js";


class ChatController {

    async findChat(request, response) {
        const user1 = request.params.id1
        const user2 = request.params.id2;
        const query = await chatQueries.find(user1, user2)
        if (query.ok) {
            const query2 = await MessagesQueries.findAll(query.data.id);
            if (query2.ok) {
                return response.status(200).json({ok: true, data: query2.data, id_conversacion: query.data.id})
            } else {
                return response.status(200).json({ok: true, data: query.data.id})
            }
        } else {
            await chatQueries.create(user1, user2)
        }
    }
}


export const chatController = new ChatController();

