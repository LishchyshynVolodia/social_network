import React from "react";
import {ProfileInfo} from "./Posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/My posts/MyPostsContainer";

// type ProfileType = {
//     ProfileState: ProfilePaggeType
//     store:StoreType
//     dispatch:any
//
// }



export function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}