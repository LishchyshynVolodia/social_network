import {PropsTypePost} from "./store";

const Add_Post = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
export type Profile_reducerType = {
    posts: Array<PropsTypePost>
    newPostText: string;
}
const initialState:Profile_reducerType = {
    posts: [
        {id: 1, message: 'Hi how are you', Likes: 12},
        {id: 2, message: 'Hi how are you', Likes: 14},
        {id: 3, message: 'Hi how are you', Likes: 15},
        {id: 4, message: 'Hi how are you', Likes: 11562},
        {id: 5, message: 'Hi how are you', Likes: 1423},
    ],
    newPostText: "it-camasutra",


}

function profileReducer(state: Profile_reducerType = initialState, action: any) {
    switch (action.type) {
        case Add_Post: {
            let newPost: PropsTypePost = {
                id: 5,
                message: state.newPostText,
                Likes: 0
            }
             return  {
                ...state,
                posts:[...state.posts,newPost],
                newPostText:''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }

        }
        default:
            return state
    }
}


    export function addActionCreator() {
        return {
            type: Add_Post
        } as const
    }

    export function UpdateNewPostTextActionCreator(text: string) {
        return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
    }

    export default profileReducer