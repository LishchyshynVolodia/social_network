import {connect} from "react-redux"
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialog_reducer"
import {Dialogs} from "./Dialogs";


function mapStateToProps(state:any){
    return{
        DialogsPage:state.DialogsPage
    }
}
function mapDispatchToProps(dispatch:any){
    return{
        UpdateNewMessageBody:(body:any)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        }
    }
}

const  DialogsContainer =  connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer
