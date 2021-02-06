import React from 'react';

const SenderMessage = (props) => {
    console.log("SenderMessage ",props.message)
    return(
       <div>
           <h1>{props.message}</h1>
       </div>
    )
}

export default SenderMessage;