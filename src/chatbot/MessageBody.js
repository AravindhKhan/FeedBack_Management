import React from 'react';
import receiverMessage from './receiverMessage';
import senderMessage from './senderMessage';
import "../chatbot/chatbot-css/chatbot.css"
import Model from './Model';

class MessageBody extends React.Component{
    constructor(props){
      super(props);
      this.state={
        message:[],
        edit:false,
        clickedMessage:{}
    }
    }

    componentDidMount(){
       console.log("props ",this.props)
       this.setState({
        message : this.props.messages
       })
       this.scrollToBottom();
    }

    onMessageClick=(index,messageBody)=>{
        console.log("message clicked ",index)
        console.log("message clicked ",messageBody)
        this.setState({
            edit: true,
            clickedMessage: messageBody
        })
    }

    componentDidUpdate() {
        this.scrollToBottom();
      }

    componentWillReceiveProps(nextProps){
        // console.log("nextprops",nextProps);
        // console.log("state in message body",this.state.message);
        if(nextProps.messages.length > this.state.message.length){
            // console.log("greater")
            this.setState({
                message: nextProps.messages
            })
            const objDiv = document.getElementById('div');
        // objDiv.scrollTop = objDiv.scrollHeight;
        }
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }

    onCloseModel=()=>{
        this.setState({
            edit: false
        })
    }

    render(){
        return(
            <div>
                 {
                     this.state.edit ? <Model values={this.state.clickedMessage} sendClickedMessage={this.onCloseModel}/> :
                     this.state.message.map((messageBody,index)=>{
                        return messageBody.type == "outgoing" ?
                        // <senderMessage message={messageBody}/>
                        <div key={index} className="container">
                            <h4 onClick={()=>{this.onMessageClick(index,messageBody)}} className="sender">{messageBody.text}</h4>
                        </div>
                        :
                        // <receiverMessage/>
                        <div key={index} className="container">
                            <h1 className="receiver">{messageBody.text}</h1>
                        </div>
                        ;
                     })
                 }
                 <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
        )
    }
}

export default MessageBody