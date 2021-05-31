import dialog_reducer from "./dialog_reducer";
import profile_reducer from "./profile_reducer";


export type MessageType = {
    message: string;
    id: number;
}
export type DialogType = {
    id: number;
    name: string;
}
export  type PropsTypePost = {
    Likes: number;
    message: string;
    id: number

}
export type ProfilePaggeType = {
    posts: Array<PropsTypePost>
    newPostText: string;
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}


type ActionTypes= {
    type:string
}


export type RootStateType = {
    profilePage: ProfilePaggeType
    DialogsPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType;
    _Onchange: (m: RootStateType) => void
    // addPosts: () => void
    // UpdateNewTextPost: (t: string) => void
    // subscribe: (observer:()=>void) => void
    subscribe:any
    getState: () => RootStateType
    dispatch: (action:ActionTypes)=>void


}



let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you', Likes: 12},
                {id: 2, message: 'Hi how are you', Likes: 14},
                {id: 3, message: 'Hi how are you', Likes: 15},
                {id: 4, message: 'Hi how are you', Likes: 11562},
                {id: 5, message: 'Hi how are you', Likes: 1423},
            ],
            newPostText: "it-camasutra",


        },
        DialogsPage: {
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

        },

    },
    _Onchange() {
        console.log("stateChanged")
    },
    subscribe(observer:any) {
        this._Onchange = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profile_reducer(this._state.profilePage, action)
        this._state.DialogsPage = dialog_reducer(this._state.DialogsPage, action)
        this._Onchange(this._state)


    },
}



    export default store
