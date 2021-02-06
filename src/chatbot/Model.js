import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';


class Model extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
            message:{}
        }
    }

    componentDidMount(){
        console.log("in model ",this.props);
        this.setState({
            message: this.props.values
        })
    }

    onInputHandler=(event)=>{
       var value =  event.target.value;
       var message = this.state.message;
       message['text'] = value;
       this.setState({
           message: message
       })
    }

   handleClose = () => {
       this.setState({show:false});
       this.props.sendClickedMessage();
    //    this.props.editMessage(this.state.message);
    }

    onKeyEntered = (event) => {
        if(event.keyCode === 13){
            this.handleClose();
        }
    }
   handleShow = () => this.setState({show:true});
    render(){
        return(
            <div>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Body><input className="formControl" value={this.state.message?.text} onChange={(event)=>this.onInputHandler(event)} onKeyDown={(e)=>this.onKeyEntered(e)} type="text" /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          
            </div>
        )
    }
}

function mapDispatchToProps(){
    return {
        editMessage:(message) => dispatchEvent({type:"EDIT_MESSAGE",data:message})
    }
}

export default connect(null,mapDispatchToProps)(Model);

// const Model = (props) => {

//     const [message,setMessage] = useState({});
//     const [show,setShow] = useState(true);

//     useEffect(()=>{
//         if(props.values){
//             var value = props.values;
//             setMessage(value);
//         }
//         // else{
//         //     setMessage(message);
//         // }
//     },[message])

//     const onInputHandler=(event)=>{
//        var text =  event.target.value;
//        var messageduplicate = {...message};
//        messageduplicate.text = text;
//        console.log("message ",messageduplicate);
//     //    this.setState({
//     //        message: message
//     //    })
//     // console.log("clicked", messageduplicate);
//     setMessage({messageduplicate});
//     console.log("clicked", message);
//     }

//    const handleClose = () => {
//        setShow(true)
//        props.sendClickedMessage();
//     //    this.props.editMessage(this.state.message);
//     }

//       const onKeyEntered = (event) => {
//         if(event.keyCode === 13){
//             handleClose();
//         }
//     }
//     return(
//         <div>

//                <Modal show={show} onHide={handleClose}>
//                  <Modal.Body><input className="formControl" value={message?.text} onChange={(event)=>onInputHandler(event)} onKeyDown={(e)=>onKeyEntered(e)} type="text" /></Modal.Body>
//                  <Modal.Footer>
//                    <Button variant="secondary" onClick={handleClose}>
//                      Close
//                    </Button>
//                    <Button variant="primary" onClick={handleClose}>
//                      Save Changes
//                    </Button>
//                  </Modal.Footer>
//                </Modal>
                  
//                      </div>
//     )
// }

// export default Model;