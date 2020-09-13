import React from 'react';

const thanksFeedback = () => {
 return(
    <div class="container-fluid">
        <section style={{marginTop:"50px"}} class="card">
             <div class="card-body">
                <div style={{color:"blue",textAlign:"center"}}>
                <h4>Many Thanks for the Feedback</h4>
                </div>
                <div>
                    <p style={{textAlign:"justify-content",color:"green"}}>
                        Feedback like this helps us constantly improve our outreach experiences by knowing what we are doing right
                        and what we can work on So.We appreciate you taking the time to send us this helpful response.
                        Don't hesitate to reach out if you have any more questions, comments or concerns
                    </p> 
                </div>
                <div class="column">
                    <p style={{color:"black",textAlign:"center"}}>Cheers</p>
                    <p style={{color:"green",textAlign:"center"}}>Outreach Team</p>
                </div>
             </div>
        </section>
    </div>
 )
}

export default thanksFeedback