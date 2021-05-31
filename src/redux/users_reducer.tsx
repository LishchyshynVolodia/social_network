import {PropsTypePost} from "./store";

const Follow = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"
const initialState = {
    users: [

    ],
    pageSize:5,
    totalCount:1200,
    currentPage:2

}

 export function users_reducer(state:any=initialState, action: any) {

    switch (action.type){
        case Follow:{
            return   {
                ...state,
                users: state.users.map((u:any)=>{
                    if(u.id === action.userID){
                        console.log('fdsfsaf')
                        return{...u,followed:true}
                    }

                    return u
                })
            }
        }
        case UNFOLLOW:{
            return   {
                ...state,
                users: state.users.map((u:any)=>{
                    if(u.id === action.userID){
                        return{...u,followed:false}
                    }
                    return u
                })
            }

        }
        case SET_USERS:{
            return {...state,users:action.users}
        }
        case SET_PAGE:{
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state,totalUserCount:action.count}
        }
        default:
            return state
    }
}

export function FollowAc(userID:number){
    return {type:Follow,userID}
}
export function UnFollowAc(userID:number){
    return {type:UNFOLLOW,userID}
}
export function setUsers(users:any){
    return {type:SET_USERS,users}
}
export function setCurrentPage(page:any){
    return {type:SET_PAGE,page}
}
export function setTotalUserCountAC(totalCount:any){
    return {type:SET_TOTAL_USERS_COUNT,count:totalCount}
}


    export default users_reducer