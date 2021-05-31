import {createStore,combineReducers} from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
import {DialogType, MessageType} from "./store";
import users_reducer from "./users_reducer";

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}

let reducers = combineReducers({
    profilePage:profileReducer,
    DialogsPage:dialogReducer,
    userPage:users_reducer

})

let store = createStore(reducers);
export default store