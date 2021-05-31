import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "../Post/Post";
import {
    PropsTypePost,
}from "../../../../redux/store";

type MyPostsNewType = {
    MyPostsState: Array<PropsTypePost>
    newPostText: string
    updateNewPostText:(t:string)=>void
    addPost:()=>void



}



export function MyPosts(props: MyPostsNewType) {
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const AddPost = () => {

            props.addPost()






    }


    const postElements = props.MyPostsState.map((p: PropsTypePost) => <Post message={p.message} Likes={p.Likes}/>)
    let onPostChange = () => {
        if (newPostElement.current) {

            let text = newPostElement.current?.value;
           props.updateNewPostText(text)
}


    }

    return (

        <div className={classes.PostBlocks}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postElements}

            </div>
        </div>

    )
}
