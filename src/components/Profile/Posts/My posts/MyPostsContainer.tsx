import {addActionCreator, UpdateNewPostTextActionCreator} from "../../../../redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux"

const mapStateToProps = (state:any)=> {
    return{
        MyPostsState:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:any)=>{
    return{
        updateNewPostText:(text:string)=>{
        let action = UpdateNewPostTextActionCreator(text)
        dispatch(action)
    },
        addPost:()=>{
            dispatch(addActionCreator())

        }

    }
}
const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer