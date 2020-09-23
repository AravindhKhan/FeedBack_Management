import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { withRouter } from 'react-router';

class EventReport extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            // onPageChange: this.onPageChange.bind(this),
            // onSizePerPageList: this.sizePerPageListChange.bind(this)
        };
    }

    // sizePerPageListChange(sizePerPage) {
    //     alert(`sizePerPage: ${sizePerPage}`);
    // }

    // onPageChange(page, sizePerPage) {
    //     alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
    // }
    state = {
        products: [{
            event_id: "EVENT_01",
            beneficiaryName: "ST Edwards CE Voluntary Added Primary School",
            baseLocation: "United Kingdom",
            councilName:"Outreach UK",
            projects: "Community Program",
            businessUnit:"Heath Care",
            Ratings:[
                {
                 average:4,
                 star:2
                }
            ]
        }, {
            event_id: "EVENT_02",
            beneficiaryName: "Singpore Scientific Expo",
            baseLocation: "Singapore",
            councilName:"Outreach Singapore",
            projects: "Scientific Expo",
            businessUnit:"Science",
            Ratings:[
                {
                 average:0,
                 star:0
                }
            ]
        }]
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
                </div>
                <div className="container-fluid">
                <section style={{ margin: "10px" }} className="card">
                <div style={{ height: "40px" }} class="card-head">
                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>EVENTS</h4>
                        </div>
                    <div class="card-body row">
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
                    <BootstrapTable data={this.state.products} pagination options={this.options}>
                        {/* <TableHeaderColumn dataField='id' isKey>Action</TableHeaderColumn> */}
                        {/* <TableHeaderColumn dataField='action' isKey export={ false }>Action</TableHeaderColumn> */}
                        <TableHeaderColumn dataField='event_id' isKey filter={{ type: 'TextFilter' }}>Event ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='beneficiaryName' filter={{ type: 'TextFilter' }}>Beneficiary Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='baseLocation' filter={{ type: 'TextFilter' }}>Base Location</TableHeaderColumn>
                        <TableHeaderColumn dataField='councilName' filter={{ type: 'TextFilter' }}>Council Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='projects' filter={{ type: 'TextFilter' }}>Project</TableHeaderColumn>
                        <TableHeaderColumn dataField='businessUnit' filter={{ type: 'TextFilter' }}>Business Unit</TableHeaderColumn>
                        {/* <TableHeaderColumn dataField='Ratings' filter={{ type: 'TextFilter' }}>Ratings</TableHeaderColumn> */}
                    </BootstrapTable>
                </section>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(EventReport)