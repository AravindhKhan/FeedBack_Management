import React from 'react'
import Header from '../Header'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Footer from '../Footer';

class FeedbackQuestion extends React.Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        products: [{
            question: "Stark Expo when happended?",
            choices:"Allow Multiple Answer",
            answerList:[
                {
                    id:0,
                    value:"This is Answer 0"
                },
                {
                    id:1,
                    value:"This is Answer 1"
                }
            ],
            totalAnswer: 2,
            feedbackType: "Participated"
        },
        {
            question: "when did you joined in CTS?",
            choices:"Allow Multiple Answer",
            answerList:[
                {
                    id:0,
                    value:"This is Answer 0"
                },
                {
                    id:1,
                    value:"This is Answer 1"
                }
            ],
            totalAnswer: 7,
            feedbackType: "Not Participated"
        }],
        counter:0
    }

    buttonFormatter(cell,row,enumObject,rowIndex){
        // console.log("clicked ",event);
        // console.log("clicked ",row);
    return (<button onClick={()=>this.onEye(cell,row,rowIndex)} className="btn btn-primary">Edit</button>);
      }

    onEye(cell,row,rowIndex){
        //   console.log("on Action is clicked "+rowIndex);
          this.props.history.push({pathname:"/add-feedback-question",data:this.state.products[rowIndex],editMode:true});
    }

    onAddQuestion=()=>{
        console.log("this props",this.props)
       this.props.history.push("/add-feedback-question"); 
    }
    render() {
        return (
            <div>
                <section>
                    <Header />
                </section>
                <section style={{ marginTop: "10px" }}>
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-head">
                                <h4 style={{ textAlign: "left", backgroundColor: "blue" }}>FEEDBACK QUESTIONS</h4>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" onClick={()=>{this.onAddQuestion()}}><i className="fa fa-plus" aria-hidden="true"></i>ADD QUESTION</button></div>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i>CLEAR FILTER</button>
                                    </div>
                                </div>
                            </div>
                            <section>
                                <BootstrapTable data={this.state.products} pagination options={this.options}>
                                    {/* <TableHeaderColumn dataField='id' isKey>Action</TableHeaderColumn> */}
                                    <TableHeaderColumn dataField='question' isKey export={false}>Questions</TableHeaderColumn>
                                    <TableHeaderColumn dataField='totalAnswer'>Total Answers</TableHeaderColumn>
                                    <TableHeaderColumn dataField='feedbackType'>Feedback Type</TableHeaderColumn>
                                    <TableHeaderColumn dataField='button' dataFormat={this.buttonFormatter.bind(this)}>Actions</TableHeaderColumn>
                                </BootstrapTable>
                            </section>
                        </div>
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default FeedbackQuestion