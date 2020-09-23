import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { withRouter } from 'react-router';

class AddFeedbackQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit:false,
            hobbies:[
                { id:1,value: "Reading" , defaultChecked: false },
                { id:2,value: "Developing", defaultChecked: false },
                { id:3,value: "Desiging", defaultChecked: false }
            ],
            selectedhobbies:[],
            // categories: [
            //     { id: 1, value: "PHP" , defaultChecked: false },
            //     { id: 2, value: "Laravel", defaultChecked: false },
            //     { id: 3, value: "Angular", defaultChecked: true },
            //     { id: 4, value: "React", defaultChecked: false }
            // ],
            // checkedItems: new Map(),
            questions: {
                feedbackType: "Participated",
                choices: [],
                question: "",
                answerList: []
            }
        }
    }
    componentDidMount() {
        let editQuestion = this.props?.location?.data;
        let edit = this.props?.location?.editMode;
        if (editQuestion) {
            this.setState((prevState, props) => ({ questions: editQuestion,edit:edit })
                ,()=>{
                    // console.log("in edit question 1",this.state.questions);
                }
            )
        }
    }
    onAddQuestion = () => {
        var answerLength = this.state.questions.answerList.length;
        var answerobj = {
            id: answerLength,
            value: ""
        }
        var duplicateQuestion = this.state.questions
        if(answerLength>0){
            if ((this.state.edit==false && duplicateQuestion.answerList[answerLength - 1].value.length) || (duplicateQuestion.answerList[answerLength - 1].value.length && this.state.edit)) {
                duplicateQuestion.answerList.push(answerobj)
                this.setState({
                    questions: duplicateQuestion
                })
            }
            else {
                window.alert("Enter the Answer for Previous one")
            }
        }
        else{
            duplicateQuestion.answerList.push(answerobj)
                this.setState({
                    questions: duplicateQuestion
                })
        }
    }

    onValueChange(event, inputType) {
        var dublicate = { ...this.state.questions }
        dublicate[inputType] = event.target.value
        this.setState({
            questions: dublicate
        });
    }
    // handleChange(event) {
    //     const item = event.target.value;
    //     const isChecked = event.target.checked;
    //     this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    //     console.log(this.state.checkedItems)
    // }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        if(target.checked){
            this.state.selectedhobbies[value] = value;   
        }else{
            this.state.selectedhobbies.splice(value, 1);
        }
        var duplicateQuestion = {...this.state.questions}
        duplicateQuestion.choices = this.state.selectedhobbies
        this.setState({
            questions:duplicateQuestion
        },()=>{
            console.log(this.state.selectedhobbies)
            console.log(this.state.questions);
        })
        
    }

    onAnswerChange(event, index) {
        var duplicateQuestion = this.state.questions
        duplicateQuestion.answerList[index].value = event.target.value;
        this.setState({
            question: duplicateQuestion
        })
    }

    onCancel() {
        this.props.history.push({ pathname: '/feedbackQuestions' })
    }

    onDelete(){
       var confirm = window.confirm("Do you want to delete this question");
       console.log(confirm);
       if(confirm){
        this.props.history.push({ pathname: '/feedbackQuestions' })
       }
       else{
        this.props.history.push({ pathname: '/feedbackQuestions' })
       }
    }

    formSubmit(event) {
        event.preventDefault();
        var value = this.state.questions
        console.log("form submit ", value);
        this.props.history.push({ pathname: '/feedbackQuestions' })
    }

    render() {
        return (
            <div>
                <section>
                    <Header />
                </section>
                <section>
                    <div className="container-fluid">
                        <section className="card" style={{ marginTop: "10px" }}>
                            <div className="card-head">
                                <h4 style={{ textAlign: "left", backgroundColor: "blue" }}>Add Question</h4>
                            </div>
                            <div>
                                <form onSubmit={(event)=>{this.formSubmit(event)}}>
                                    <div style={{ textAlign: "left" }} className="row">
                                        <div className="col-sm-6">
                                            <label>Feedback Type</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="radio">
                                                <label><input type="radio" onChange={(event) => { this.onValueChange(event, 'feedbackType') }} checked={this.state.questions?.feedbackType === "Participated"} id="1" value="Participated" />Participated</label>
                                                <label><input type="radio" onChange={(event) => { this.onValueChange(event, 'feedbackType') }} checked={this.state.questions?.feedbackType === "Not Participated"} id="2" value="Not Participated" />Not Participated</label>
                                                <label><input type="radio" onChange={(event) => { this.onValueChange(event, 'feedbackType') }} checked={this.state.questions?.feedbackType === "Unregistered"} id="3" value="Unregistered" />Unregistered</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "left" }} className="row">
                                        <div className="col-sm-6" style={{ display: "flex", flexDirection: "column" }}>
                                            <div className="checkbox">
                                                <label><input type="checkbox" selected={this.state.questions?.choices === "Allow Multiple Answers"} value="Allow Multiple Answers" />Allow Multiple Answers</label>
                                            </div>
                                            <div className="checkbox">
                                                <label><input type="checkbox" selected={this.state.questions?.choices === "Free Text Answer"} value="Free Text Answer" />Free Text Answer</label>
                                            </div>
                                            <div className="checkbox">
                                                <label><input type="checkbox" selected={this.state.questions?.choices === "Custom Question"} value="Custom Question" />Custom Question</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "left" }} className="row">
                                        <div className="col-sm-3">
                                            <label>Question</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="input-group">
                                                <input type="text" onChange={(event) => { this.onValueChange(event, 'question') }} value={this.state.questions?.question} className="form-control" placeholder="Description" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        {
                                            this.state.questions.answerList.map((answer, index) => {
                                                return (
                                                    <div style={{ textAlign: "left" }} className="row" key={index}>
                                                        <div className="col-sm-3">
                                                            <label>Answer {index + 1}</label>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <div className="input-group">
                                                                <input type="text" value={answer.value} className="form-control" onChange={(event) => { this.onAnswerChange(event, index) }} placeholder="Description" />
                                                            </div>
                                                            <br />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-success" onClick={() => { this.onAddQuestion() }}>ADD ANSWER</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <div className="btn-group" role="group">
                                                <button type="submit" className="btn btn-primary">SAVE</button>
                                            </div>
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-dark" onClick={()=>{this.onCancel()}}>CANCEL</button>
                                            </div>
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-danger" onClick={()=>{this.onDelete()}}>DELETE</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* {
                                        this.state.categories.map(item => (
                                        <li>
                                            <label>
                                            <input
                                                type="checkbox"
                                                value={item.id}
                                                defaultChecked={item.defaultChecked}
                                                onChange={(event)=>{this.handleChange(event)}}
                                            /> {item.value}
                                            </label>
                                        </li>
                                        ))
                                        } */}
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Hobbies :</label><br />
                                            {
                                                this.state.hobbies.map((hobby,index)=>{
                                                    return (
                                                        <div key={index}>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="checkbox" name="hobbies" id={hobby.value} defaultChecked={hobby.defaultChecked} value={hobby.id} onChange={(event)=>{this.handleInputChange(event)}} />
                                                                <label class="form-check-label" htmlFor={hobby.value}>{hobby.value}</label>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
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

export default withRouter(AddFeedbackQuestion)



// <div class="form-check form-check-inline">
//                                                                 <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" defaultChecked={false} value="Reading" onChange={(event)=>{this.handleInputChange(event)}} />
//                                                                 <label class="form-check-label" htmlFor="inlineCheckboxh1">Reading</label>
//                                                             </div>
//                                                             <div class="form-check form-check-inline">
//                                                                 <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh2" defaultChecked={false} value="Developing" onChange={(event)=>{this.handleInputChange(event)}} />
//                                                                 <label class="form-check-label" htmlFor="inlineCheckboxh2">Developing</label>
//                                                             </div>
//                                                             <div class="form-check form-check-inline">
//                                                                 <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh3" defaultChecked={false} value="Desiging" onChange={(event)=>{this.handleInputChange(event)}} />
//                                                                 <label class="form-check-label" htmlFor="inlineCheckboxh3">Desiging</label>
//                                                             </div>