import React from 'react';
import { connect } from 'react-redux';
import "../chatbot/chatbot-css/chatbot.css"
import MessageBody from './MessageBody';

class chatbot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
            loadMessageBody:false,
            messageList:[]
        }
    }

    componentDidMount(){
        if(this.props.messages.messageList){
            this.setState({
                loadMessageBody: true,
                messageList:this.props.messages.messageList
            })
        }
    }

    componentDidUpdate(){
        // console.log("componentWillReceiveProps ",this.props);

    }

    componentWillReceiveProps(nextProps){
        // console.log("componentWillReceiveProps ",nextProps);
        if(this.props.messages.messageList.length > this.state.messageList.length){
            this.setState({
                messageList: this.props.messages.messageList
            },
            ()=>{
                // console.log("state updated ",this.state.messageList)
            })
        }
    }

    onInputChangeHandler=(event)=>{
        event.preventDefault();
        var inputText =event.target.value;
        inputText = inputText.replace(/^\s+/g, '');
            this.setState({
                value:inputText
            })
        if(event.keyCode === 13){
            this.setState({
                value:""
            })
        }
    }

    onSendMessage = (event) => {
        if(event.keyCode === 13 && this.state.value){
            // console.log("this.state.value ",this.state.value);
            this.props.sendMessage(this.state.value);
            this.setState({
                value:""
            })
        }
    }
    render(){
        return(
            <div className="chatbot">
               {/* <div style={{alignContent:"left"}}>
                   <div className="col-sm-12" style={{display:"flex",flexDirection:"row"}}>
                       <div className="col-sm-2">
                       <img style={{borderRadius:"50%",width:"40px"}} src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
                       <div className="col-sm-8">
                       <h5 style={{textAlign:"left"}}>Name</h5></div>
                       <div className="col-sm-2">
                           ...
                       </div>
                   </div>
               </div>
               <div className="message-body"></div>
               <div>
                   <input className="inputBox" type="text" name="messgaebox" value="Type your message..."></input>
               </div> */}
               <div class= "chatbot-header">
               <div className="col-sm-12" style={{display:"flex",flexDirection:"row"}}>
                       <div className="col-sm-2">
                       <img style={{borderRadius:"50%",width:"40px"}} src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
                       <div className="col-sm-8">
                       <h5 style={{textAlign:"left"}}>Name</h5></div>
                       <div className="col-sm-2">
                           ...
                       </div>
                   </div>
               </div>
                <div class="chatbot-body">{this.state.loadMessageBody ? <MessageBody messages={this.state.messageList}/>: <div><p style={{textAlign:"center",marginTop:"50%"}}>Start the chat</p></div>}</div>
                <div class= "chatbot-footer">
                <input className="inputBox" autoComplete="off" type="text" name="messgaebox" value={this.state.value} onChange={(e)=>{this.onInputChangeHandler(e)}} onKeyDown={(e)=>this.onSendMessage(e)}></input>
                <i style={{marginTop:"10px",marginRight:"20px"}} class="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        messages: state.chatbotReducer
      };
}

function mapDispatchToProps(dispatch){
    return {
        sendMessage:(index)=> dispatch({type:"SEND_MESSAGE",data:index})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(chatbot);