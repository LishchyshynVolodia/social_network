import React from "react";
import style from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/img/user.png"

class usersContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response: any) =>
        {
            debugger;
            this.props.setUsersAc(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response: any) =>
        {
            debugger;
            this.props.setUsersAc(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        // @ts-ignore
                        return <span  onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage === p && style.selectedPage }>{p}</span>
                    })}
                </div>
                {this.props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="photoOfUser"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>


                    </div>
                )}
            </div>)
    }

}


export default usersContainer

