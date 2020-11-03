const ChatRepository = require("../../data/repositories/chatRepository.js");

module.exports = {
    // custom

    // getAllCreatedChatsByUserId: async (id) => {
    //     try {
    //         return await ChatRepository.getUserCreatedChats(id);
    //     } catch (error) {
    //         return {
    //             error: error.message
    //         };
    //     }
    // },

    getAllConnectedByUserId: async (id) => {
        try {
            return await ChatRepository.getUserConnectedChatsByUserId(id);
        } catch (error) {
            throw Error(error.message);
            // return {
            //     error: error.message
            // };
        }
    },

    joinChat: async (chatData) => {
        try {
            return await ChatRepository.joinChatByUserAndChatId(chatData);
        } catch (error) {
            throw Error(error.message);
            // return {
            //     error: error.message
            // };
        }
    },

    //base

    getAll: async () => {
        try {
            return await ChatRepository.getAllChats();
        } catch (error) {
            throw Error(error.message);
            // return {
            //     error: error.message
            // };
        }
    },

    getById: async (id) => {
        try {
            return await ChatRepository.getChatById(id);
        } catch (error) {
            throw Error(error.message);
            // return {
            //     error: error.message
            // };
        }
    },

    create: async (chatData) => {
        try {
            const newChat = await ChatRepository.createChat(chatData);

            return (newChat);
        } catch (error) {
            throw Error(error.message);
            // return {
            //     error: error.message
            // };
        }
    },

    update: async (chatData) => {
        try {
            const { chatId, body } = chatData;

            // if chat exists

            return await ChatRepository.updateChatById(chatId, body);
        } catch (error) {
            throw Error(error.message);
            // return {
            //     error: error.message
            // };
        }
    },

    delete: async (chatId) => {
        try {
            //
            return await ChatRepository.deleteChatById(chatId);
        } catch (error) {
            throw Error(error.message);
            // return {
            //     error: error.message
            // };
        }
    },
}