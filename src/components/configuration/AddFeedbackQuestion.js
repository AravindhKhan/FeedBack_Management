import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class AddFeedbackQuestion extends React.Component {
    onAddQuestion=()=>{
        
    }
    render() {
        return (
            <div>
                <section>
                    <Header />
                </section>
                <section>
                    <div class="container-fluid">
                        <section class="card" style={{ marginTop: "10px" }}>
                            <div class="card-head">
                                <h4 style={{ textAlign: "left", backgroundColor: "blue" }}>Add Question</h4>
                            </div>
                            <div>
                                <form>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <label>Feedback Type</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="radio">
                                                <label><input type="radio" name="optradio"  />Option 1</label>
                                                <label><input type="radio" name="optradio"  />Option 2</label>
                                                <label><input type="radio" name="optradio"  />Option 3</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="checkbox">
                                                <label><input type="checkbox" value="" />Option 1</label>
                                            </div>
                                            <div class="checkbox">
                                                <label><input type="checkbox" value="" />Option 2</label>
                                            </div>
                                            <div class="checkbox">
                                                <label><input type="checkbox" value="" />Option 3</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <label>Question</label>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Description (required)" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3">
                                        <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-success" onClick={()=>{this.onAddQuestion()}}>ADD QUESTION</button>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4"></div>
                                        <div class="col-sm-4">
                                        <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-primary">SAVE</button>
                                        </div>
                                        <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-dark">CANCEL</button>
                                        </div>
                                        <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-danger">DELETE</button>
                                        </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default AddFeedbackQuestion