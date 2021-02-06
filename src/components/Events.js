import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';

class Events extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            //   onPageChange: this.onPageChange.bind(this),
            //   onSizePerPageList: this.sizePerPageListChange.bind(this)
        };
        this.state = {
            products: []
        }
    }

    //   sizePerPageListChange(sizePerPage) {
    //     alert(`sizePerPage: ${sizePerPage}`);
    //   }

    //   onPageChange(page, sizePerPage) {
    //     alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
    //   }
    

    componentDidMount(){
        window.scroll(0,0);
        console.log("in events ", this.props.eventsInfo);
        var productList = this.props.eventsInfo.events;
        this.setState({
            products: productList
        })
    }

    componentWillReceiveProps(){
        // this.state.products.push(this.props.eventsInfo.events)
        // console.log("products ",this.state.products)
        // var productList = this.props.eventsInfo.events;
        // this.setState({
        //     products: productList
        // })
    }

    buttonFormatter(cell, row, enumObject, rowIndex) {
        // console.log("clicked ",row);
        return (<button onClick={() => this.onEye(cell, row, enumObject, rowIndex)} className="btn btn-primary">View</button>);
    }

    onEye(cell, row, rowIndex, enumObject) {
        //   console.log("on Action is clicked "+rowIndex);
        //   console.log("enumObject ",enumObject);
        //   console.log("cell ",cell);
        //   console.log("row ",row);
        //   console.log("rowIndex ",rowIndex);
        this.props.history.push({ pathname: "/event", data: this.state.products[enumObject] });
        console.log("in events props",this.props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <section style={{ margin: "10px" }} className="card">
                        <div style={{ height: "40px" }} className="card-head">
                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>ACTIONS</h4>
                        </div>
                        <div className="card-body row">
                            <div className="col-sm-6">
                            <div className="card-body bg-success">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ marginTop: "30px" }}>
                                        <i className="fa fa-envelope fa-9x" aria-hidden="true"></i>
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
                            <div className="col-sm-6">
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
                                            <i className="fa fa-lightbulb fa-9x" aria-hidden="true"></i>
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
                <div style={{ height: "40px" }} className="card-head">
                            <h4 style={{ textAlign: "left", backgroundColor: "blue", height: "40px", paddingTop: "5px", paddingLeft: "5px" }}>EVENTS</h4>
                        </div>
                    <div className="card-body row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i>CLEAR FILTER</button></div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary"><i className="fa fa-file-excel" aria-hidden="true"></i>DOWNLOAD EXCEL</button>
                            </div>
                        </div>
                    </div>
                    <BootstrapTable className="BootstrapTable" scrollY data={this.state.products} pagination options={this.options}>
                        {/* <TableHeaderColumn dataField='id' isKey>Action</TableHeaderColumn> */}
                        <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter.bind(this)} headerAlign='center' headerAlign='center' dataAlign='center'>Action</TableHeaderColumn>
                        <TableHeaderColumn dataField='id' filter={{ type: 'TextFilter' }} isKey headerAlign='center' dataAlign='center' export={false}> Event ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='month' filter={{ type: 'TextFilter' }} headerAlign='center' dataAlign='center'>Month</TableHeaderColumn>
                        <TableHeaderColumn dataField='base_locatio' filter={{ type: 'TextFilter' }} headerAlign='center' dataAlign='center'>Base Location</TableHeaderColumn>
                        <TableHeaderColumn dataField='council_Name' filter={{ type: 'TextFilter' }} headerAlign='center' dataAlign='center'>Council Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='beneficiary_Name' filter={{ type: 'TextFilter' }} headerAlign='center' dataAlign='center'>Beneficiary Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='beneficiary_Name' filter={{ type: 'TextFilter' }}>Beneficiary Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='beneficiary_Name' filter={{ type: 'TextFilter' }}>Beneficiary Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='beneficiary_Name' filter={{ type: 'TextFilter' }}>Beneficiary Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='beneficiary_Name' filter={{ type: 'TextFilter' }}>Beneficiary Name</TableHeaderColumn>
                        {/* <BootstrapTable data={ this.state.products } options={ this.options }>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter' } }>Event ID</TableHeaderColumn>
        <TableHeaderColumn dataField='price' filter={ { type: 'TextFilter' } }>Month</TableHeaderColumn>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter' } }>Base Location</TableHeaderColumn>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter' } }>Council Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' filter={ { type: 'TextFilter' } }>Beneficiary Price</TableHeaderColumn>
        </BootstrapTable> */}
                    </BootstrapTable>
                </section>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
   return {
       eventsInfo: state.eventsReducer
   }
}

export default connect(mapStateToProps,null)(Events)