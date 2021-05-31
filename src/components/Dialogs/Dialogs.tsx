import React from 'react';
import classes from "./Dialogs.module.css";
import {Dialog,} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import{MessageType, DialogType,} from "../../redux/store";
import {DialogPageType} from "../../redux/redux-store";



type DialogsNewType = {
    DialogsPage:DialogPageType
    sendMessage:()=>void
    UpdateNewMessageBody:(b:string)=>void

}




export function Dialogs(props:DialogsNewType ) {

    let state = props.DialogsPage
    const dialogsElements = state.dialogs.map( (d:DialogType) =><Dialog name={d.name} key={d.id} id={d.id}/>)
    const messageElem = state.messages.map((m:MessageType) =><Message message={m.message} key={m.id}id={m.id} /> )
    let newMessageBody = state.newMessageBody

    const onSendMessage = ()=> {
       props.sendMessage();
    }
    const onNewMessageChange = (e:any)=> {
        let body = e.target.value
        props.UpdateNewMessageBody(body)
    }

    return (



        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>

                <div>   {messageElem}</div>
            </div>
            <div>
                <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter Your message" > </textarea>
                </div>
                <div>
                    <button onClick={onSendMessage}  > Add message </button>
                </div>


            </div>
        </div>

    )
}

