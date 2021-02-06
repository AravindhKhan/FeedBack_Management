import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Event extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            onPageChange: this.onPageChange.bind(this),
            onSizePerPageList: this.sizePerPageListChange.bind(this)
        };
        this.state = {
            event: this.props?.location?.data
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        console.log("in event", this.props.location.data);
        if(this.props?.location?.data){
            this.setState({
                event: this.props?.location?.data
            },()=>{
                console.log("in event props ",this.state)
            })
        }
        else{
            // window.alert("there is no data");
            this.props.history.push({pathname:"/events"})
        }
    }

    sizePerPageListChange(sizePerPage) {
        alert(`sizePerPage: ${sizePerPage}`);
    }

    onPageChange(page, sizePerPage) {
        alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <section style={{ margin: "10px" }} className="card">
                        <div style={{ height: "40px" }} class="card-head">
                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>ACTIONS</h4>
                        </div>
                        <div class="card-body row">
                            <div class="col-sm-6">
                                <div className="card-body bg-success">
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <div style={{ marginTop: "30px" }}>
                                            <i class="fa fa-envelope fa-9x" aria-hidden="true"></i>
                                        </div>
                                        <div style={{ marginTop: "30px" }}>
                                            <h6 className="text-uppercase">Email Remainder</h6>
                                            <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
                                                <h6 style={{ marginTop: "25px" }} className="text-uppercase">Sit back and relax while the app sends emails</h6>
                                                <button className="btn btn-primary">Send Email</button>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="display-4"></h1>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div className="card bg-warning text-white h-100">
                                    <div className="card-body bg-warning">
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div style={{ marginTop: "30px" }}>
                                                <h6 className="text-uppercase">Future Implementation</h6>
                                                <div style={{ display: "flex", flexDirection: "row" }}>
                                                    <h6 className="text-uppercase">This place holder can be used for adding any another ctions in future</h6>
                                                </div>
                                            </div>
                                            <div >
                                                <i class="fa fa-lightbulb fa-9x" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h1 className="display-4"></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section style={{ margin: "10px" }} className="card">
                        <div style={{ height: "40px" }} class="card-head">
                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>EVENT & BENEFICIARY DETAILS</h4>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                            <div className="col-xl-6 col-sm-6 py-2" >
                                <div className="card  text-white">
                                    <div className="card-head">
                                        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "blue" }}>
                                            <div className="col-sm-6">
                                                <h6 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "10px", paddingLeft: "5px" }} className="text-uppercase">ID: {this.state.event?.id}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h6 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "10px", paddingLeft: "5px" }} className="text-uppercase">DATE: {this.state.event?.date}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  text-white h-60">
                                    <div className="card-body ">
                                        <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
                                            <h6 className="text-uppercase">{this.state.event?.month} {this.state.event?.event_Name}</h6>
                                            <div style={{ color: "grey" }}>
                                                <h6 className="text-uppercase">{this.state.event?.event_description}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  text-white">
                                    <div className="card-foot">
                                        <div style={{ color: "black", backgroundColor: "grey", display: "flex", flexDirection: "row" }}>
                                            <div className="col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                                                <h6 style={{ marginTop: "15px" }} className="text-uppercase">Status</h6>
                                                <Button variant="success">{this.state.event?.event_status}</Button>
                                            </div>
                                            <div className="col-sm-6">
                                                <h6 style={{ marginTop: "15px" }} className="text-uppercase">Category: {this.state.event?.event_category}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-6 py-2" style={{ width: "10%" }}>
                                <div className="card  text-white">
                                    <div className="card-head">
                                        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "blue" }}>
                                            <div className="col-sm-6">
                                                <h6 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "10px", paddingLeft: "5px" }} className="text-uppercase">LOCATION: {this.state.event?.base_locatio}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h6 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "10px", paddingLeft: "5px" }} className="text-uppercase">COUNCIL: {this.state.event?.council_Name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  text-white h-60">
                                    <div className="card-body ">
                                        <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
                                            <h6 className="text-uppercase">{this.state.event?.beneficiary_Name}</h6>
                                            <div style={{ color: "grey" }}>
                                                <h6 className="text-uppercase">{this.state.event?.event_description}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  text-white">
                                    <div className="card-foot">
                                        <div style={{ color: "black", backgroundColor: "grey", display: "flex", flexDirection: "row" }}>
                                            <div className="col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                                                <h6 style={{ marginTop: "15px" }} className="text-uppercase">Feedbacks</h6>
                                                <Button variant="warning">{this.state.event?.event_feedback}</Button>
                                            </div>
                                            <div className="col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                                                <h6 style={{ marginTop: "15px" }} className="text-uppercase">Average Rating</h6>
                                                <Button variant="primary">{this.state.event?.event_averageRating}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section style={{ margin: "10px" }} className="card">
                        <div>
                            <div style={{ margin: "5px" }} class="row">
                                <div style={{ paddingLeft: "25px", paddingTop: "10px" }} class="col-sm-4">
                                    <div className="card">
                                        <div style={{ height: "40px" }} class="card-head">
                                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>PARTICIPATED</h4>
                                        </div>
                                        {this.state.event?.event_participated.map((participation, key) => {
                                            return (
                                                <div id={key} style={{ border: "1px solid green", margin: "5px" }}>
                                                    <table class="table">
                                                        <tbody>
                                                            {this.state.event?.poc_Details.map((poc, index) => {
                                                                return (
                                                                    <div id={index}>
                                                                        <tr>
                                                                            <td>Rating</td>
                                                                            <td>{participation.Rating}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Likes</td>
                                                                            <td>{participation.Likes}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Dislikes</td>
                                                                            <td>{participation.DisLike}</td>
                                                                        </tr>
                                                                    </div>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div style={{ paddingTop: "10px" }} class="col-sm-4">
                                    <div className="card">
                                        <div style={{ height: "40px" }} class="card-head">
                                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>NOT PARTICIPATED</h4>
                                        </div>
                                        <div style={{ border: "1px solid green", margin: "5px" }}>
                                            <div>
                                                <h4>
                                                    Unexpected Official Work
                            </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingTop: "10px" }} class="col-sm-4">
                                    <div className="card">
                                        <div style={{ height: "40px" }} class="card-head">
                                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>UNREGISTERED</h4>
                                        </div>
                                        <div style={{ border: "1px solid green", margin: "5px" }}>
                                            <div class="col-sm-12">
                                                <h4>
                                                    Did Not Receive Further Information About The Event
                            </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section style={{ margin: "10px" }} className="card">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div style={{ margin: "10px" }} className="card">
                                        <div style={{ height: "40px" }} class="card-head">
                                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>STATISTICS</h4>
                                        </div>
                                        <div class="container">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">AVERAGE RATING</th>
                                                        <th scope="col">VOLUNTERES</th>
                                                        <th scope="col">VOLUNTERRING HOURS</th>
                                                        <th scope="col">OVERALL HOURS</th>
                                                        <th scope="col">TRAVEL HOURS</th>
                                                        <th scope="col">LIVE IMPACTED</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{this.state.event?.statistics.averageRatings}</td>
                                                        <td>{this.state.event?.statistics.volunteres}</td>
                                                        <td>{this.state.event?.statistics.volunterring_hours}</td>
                                                        <td>{this.state.event?.statistics.overall_Hours}</td>
                                                        <td>{this.state.event?.statistics.travel_hours}</td>
                                                        <td>{this.state.event?.statistics.lives_impacted}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div style={{ margin: "10px" }} className="card">
                                        <div style={{ height: "40px" }} class="card-head">
                                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>POC DETAILS</h4>
                                        </div>
                                        <div class="container">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">EMPLOYEE ID</th>
                                                        <th scope="col">NAME</th>
                                                        <th scope="col">CONTACT NUMBER</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.event?.poc_Details.map((poc, index) => {
                                                        return (
                                                            <tr id={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{poc.employee_id}</td>
                                                                <td>{poc.employee_Name}</td>
                                                                <td>{poc.employee_contactNumber}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Event