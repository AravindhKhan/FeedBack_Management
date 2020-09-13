import React from 'react';
import Footer from '../Footer';

class NotParticipatedFeedback extends React.Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div className="card" style={{ marginTop: "30px" }}>
                        <div class="card-body">
                            <div style={{ color: "green", textAlign: "center" }}>
                                <h4>
                                    Feedback request for 1st Dec PM.Christmas fair to save a school swimming pool on Dec 14,2018
                            </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="card" style={{ marginTop: "30px" }}>
                        <div class="card-head">
                            <div style={{ color: "white", backgroundColor:"blue",textAlign:"left" }}>
                                <h4>
                                    Hey there,You had registered for the event on saturday.We would like to know the reason for not joining the event
                                    to understand If the team which created the event has some room for improvement in their process,so that we get 100% 
                                    participation from the registered attendess.
                               </h4>
                            </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                              <div style={{backgroundColor:"black"}} class="card col-sm-2">
                              <h4 style={{color:"white",marginTop:"2px"}}>Do Not Wish to Disclose</h4>
                              </div>
                              <div style={{backgroundColor:"black"}} class="card col-sm-2">
                              <h4 style={{color:"white",marginTop:"2px"}}>Unexpected Personal Commitment</h4>
                              </div>
                              <div style={{backgroundColor:"black"}} class="card col-sm-2">
                              <h4 style={{color:"white",marginTop:"2px"}}>Unexpected Official Work</h4>
                              </div>
                              <div style={{backgroundColor:"black"}} class="card col-sm-2">
                              <h4 style={{color:"white",marginTop:"2px"}}>Even Not What I Expected</h4>
                              </div>
                              <div style={{backgroundColor:"black"}} class="card col-sm-2">
                              <h4 style={{color:"white",marginTop:"2px"}}>Did Not Received The Further Information About The Event</h4>
                              </div>
                              <div style={{backgroundColor:"black"}} class="card col-sm-2">
                              <h4 style={{color:"white",marginTop:"2px"}}>Incorrectly Registered</h4>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <div class="btn-group" role="group">
    <button type="button" class="btn btn-danger">RESET</button>
</div>
<div class="btn-group" role="group">
    <button type="button" class="btn btn-success"><i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp; SUBMIT</button></div>
</div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default NotParticipatedFeedback