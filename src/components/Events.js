import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Events extends React.Component {

    constructor(props) {
        super(props);
    
        this.options = {
        //   onPageChange: this.onPageChange.bind(this),
        //   onSizePerPageList: this.sizePerPageListChange.bind(this)
        };
      }
    
    //   sizePerPageListChange(sizePerPage) {
    //     alert(`sizePerPage: ${sizePerPage}`);
    //   }
    
    //   onPageChange(page, sizePerPage) {
    //     alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
    //   }
    state={
        products : [{
            id: "EVENT_1",
            month: "DEC",
            base_locatio: "United Kingdom",
            council_Name:"Outreach UK",
            beneficiary_Name:"ST.Edwards",
            date: "12 Dec 2020",
            event_Name:"Christmas fair to save a swimming pool",
            event_description:"The school is hosting a christmas to raise money to refurnish their swimming pool for the childrens who can swim in their swimming pool",
            event_status:"Approved",
            event_category:"Other Cimmunity Program",
            event_feedback:4,
            event_averageRating:4,
            event_participated:[{
                Rating: 5,
                Likes:"nice",
                DisLike:"travel"
            },
            {
                Rating: 3,
                Likes:"swimming",
                DisLike:"snacks can be provided"
            }],
            statistics:{
                averageRatings:4,
                volunteres:4,
                volunterring_hours:24,
                overall_Hours:24,
                travel_hours:10,
                lives_impacted:0
            },
            poc_Details:[
                {
                    employee_id:563546,
                    employee_Name:"Neeli",
                    employee_contactNumber:8974364757
                }
            ]
        }, {
            id: "EVENT_2",
            month: "JAN",
            base_locatio: "Singapore",
            council_Name:"Outreach Singapore",
            beneficiary_Name:"Lion",
            date: "12 Dec 2020",
            event_Name:"Sinapore Science Exhibition",
            event_description:"The science exhibition occuring in Singapore is famous in world.The scientific expo is organized by Stark",
            event_status:"Approved",
            event_category:"Stark Community",
            event_feedback:4,
            event_averageRating:4,
            event_participated:[{
                Rating: 5,
                Likes:"nice",
                DisLike:"travel"
            },
            {
                Rating: 3,
                Likes:"robos",
                DisLike:"dances"
            }],
            statistics:{
                averageRatings:4,
                volunteres:4,
                volunterring_hours:24,
                overall_Hours:24,
                travel_hours:10,
                lives_impacted:0
            },
            poc_Details:[
                {
                    employee_id:563546,
                    employee_Name:"Tony",
                    employee_contactNumber:8725452645
                }
            ]
        }]
    }

    buttonFormatter(cell,row,enumObject,rowIndex){
        // console.log("clicked ",event);
        // console.log("clicked ",row);
    return (<button onClick={()=>this.onEye(cell,row,rowIndex)} className="btn btn-primary">View</button>);
      }

    onEye(cell,row,rowIndex){
          console.log("on Action is clicked "+rowIndex);
          this.props.history.push({pathname:"/event",data:this.state.products[rowIndex]});
    }

    render() {
        return (
            <div>
                <Header />
                <section>
                    <h4 style={{ textAlign: "left", backgroundColor: "blue", margin: "10px" }}>ACTIONS</h4>
                    <div class="row w-100">
                        <div class="col-sm-6">
                            <div className="card-body bg-success">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ marginTop: "30px" }}>
                                        <i class="fa fa-envelope fa-9x" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h6 className="text-uppercase">Email Remainder</h6>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <h6 className="text-uppercase">Sit back and relax while the app sends emails</h6>
                                            <Button variant="light">Send Email</Button>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="display-4"></h1>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div className="card bg-warning text-white h-100">
                                <div className="card-body bg-warning">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <h6 className="text-uppercase">Future Implementation</h6>
                                            <div style={{ display: "flex", flexDirection: "row" }}>
                                                <h6 className="text-uppercase">Sit back and relax while the app sends emails</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <i class="fa fa-lightbulb fa-9x" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <h4 style={{ textAlign: "left", backgroundColor: "blue", margin: "10px" }}>EVENTS</h4>
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i>CLEAR FILTER</button></div>
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-primary"><i class="fa fa-file-excel" aria-hidden="true"></i>DOWNLOAD EXCEL</button>
                            </div>
                        </div>
                    </div>
                <BootstrapTable data={ this.state.products } pagination options={ this.options }>
        {/* <TableHeaderColumn dataField='id' isKey>Action</TableHeaderColumn> */}
        <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} >Action</TableHeaderColumn>
        <TableHeaderColumn dataField='id' filter={ { type: 'TextFilter' } } isKey export={ false }> Event ID</TableHeaderColumn>
        <TableHeaderColumn dataField='month' filter={ { type: 'TextFilter' } }>Month</TableHeaderColumn>
        <TableHeaderColumn dataField='base_locatio' filter={ { type: 'TextFilter' } }>Base Location</TableHeaderColumn>
        <TableHeaderColumn dataField='council_Name' filter={ { type: 'TextFilter' } }>Council Name</TableHeaderColumn>
        <TableHeaderColumn dataField='beneficiary_Name' filter={ { type: 'TextFilter' } }>Beneficiary Name</TableHeaderColumn>
        {/* <BootstrapTable data={ this.state.products } options={ this.options }>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter' } }>Event ID</TableHeaderColumn>
        <TableHeaderColumn dataField='price' filter={ { type: 'TextFilter' } }>Month</TableHeaderColumn>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter' } }>Base Location</TableHeaderColumn>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter' } }>Council Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' filter={ { type: 'TextFilter' } }>Beneficiary Price</TableHeaderColumn>
        </BootstrapTable> */}
      </BootstrapTable>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Events