import React from 'react';
import './App.css';
import {Nav} from "./components/Navbar/Nav";
import {Header} from "./components/Header/Header";

import {Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/dialog_container";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

// type AppType = {
//     state: RootStateType
//     // addPost: (m: string) => void;
//     // updateNewPost: (t: string) => void
//     dispatch:any
//     store:any
//
// }


function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={() =>  <DialogsContainer />}/>
                    <Route exact path="/profile"
                           render={() => <Profile />}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route exact path="music" render={() => <Music/>}/>
                    <Route exact path="/Users" render={() => <UsersContainer/>}/>
                </div>
            </div>
    );
}

export default App;

