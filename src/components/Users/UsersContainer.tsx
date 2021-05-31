import React from "react";
import {connect} from "react-redux";
import usersContainer from "./UsersC";
import {FollowAc, setCurrentPage, setTotalUserCountAC, setUsers, UnFollowAc} from "../../redux/users_reducer";

function mapStateToProps(state:any){
    return{
        users:state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalCount:state.userPage.totalCount,
        currentPage:state.userPage.currentPage
    }
}
function mapDispatchToProps(dispatch:any){
    return{
        follow:(userID:number)=>{
            dispatch(FollowAc(userID))
        },
        unfollow:(userID:number)=> {
            dispatch(UnFollowAc(userID))
        },
        setUsersAc:(users:any)=>{
            dispatch(setUsers(users))
        },
        setCurrentPage:(page:any)=>{
            dispatch(setCurrentPage(page))
        },
        setTotalUserCount:(totalCount:any)=>{
            dispatch(setTotalUserCountAC(totalCount))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(usersContainer)