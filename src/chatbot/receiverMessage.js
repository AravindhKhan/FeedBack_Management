import React from 'react';

const receiverMessage = (props) => {
    console.log("receiverMessage ",props.message)
    return(
       <div>
           <h1>{props.message}</h1>
       </div>
    )
}

export default receiverMessage;