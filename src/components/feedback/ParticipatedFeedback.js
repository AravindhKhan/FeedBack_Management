import React from 'react';
import Footer from '../Footer';

class ParticipatedFeedback extends React.Component {
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
                                    How do you rate the overall event?
                               </h4>
                            </div>
                        </div>
                        <div class="card-body">
                          <div class="row">
                              <div class="col-sm-4">
                              <i style={{color:"red"}} class="fa fa-frown fa-9x" aria-hidden="true"></i>
                              </div>
                              <div class="col-sm-4">
                              <i style={{color:"yellow"}} class="fa fa-meh fa-9x" aria-hidden="true"></i>
                              </div>
                              <div class="col-sm-4">
                              <i style={{color:"green"}} class="fa fa-smile fa-9x" aria-hidden="true"></i>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="card" style={{ marginTop: "30px" }}>
                        <div class="card-head">
                            <div style={{ color: "white", backgroundColor:"blue",textAlign:"left" }}>
                                <h4>
                                    How did you like about the volunterring activity?
                               </h4>
                            </div>
                        </div>
                        <div class="card-body">
                          <textarea style={{border:"1px solid green"}} rows="4" cols="150"/>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="card" style={{ marginTop: "30px" }}>
                        <div class="card-head">
                            <div style={{ color: "white", backgroundColor:"blue",textAlign:"left" }}>
                                <h4>
                                    What can be improved in the volunterring activity?
                               </h4>
                            </div>
                        </div>
                        <div class="card-body">
                          <textarea style={{border:"1px solid green"}} rows="4" cols="150"/>
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
                <section>
                    <Footer/>
                </section>
            </div>
        )
    }
}

export default ParticipatedFeedback