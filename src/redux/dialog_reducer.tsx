import {DialogType, MessageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}
const initialstate = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Will you drink revo?"},
    ],
    dialogs: [
        {id: 1, name: "Dunduk"},
        {id: 2, name: "Misha"},
        {id: 3, name: "lol"},
        {id: 4, name: "Yriy"},
        {id: 5, name: "Andriy"},
        {id: 6, name: "Dara"}],
    newMessageBody: ""

}

function dialogReducer(state: DialogPageType = initialstate, action: any) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {...state,
                newMessageBody:action.body
            }
        }
        case SEND_MESSAGE: {
            let Body = state.newMessageBody
            return {
                ...state,
                newMessageBody:"",
                messages: [...state.messages,{id:6,message:Body}]
            }
        }
        default:
            return state
    }
}

export function sendMessageCreator() {
    return {
        type: SEND_MESSAGE
    } as const
}

export function updateNewMessageBodyCreator(body: string) {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body} as const
}

export default dialogReducer;