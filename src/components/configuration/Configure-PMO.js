import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ComfigurePMO extends React.Component {

    constructor(props) {
        super(props);

        // this.options = {
        //     onPageChange: this.onPageChange.bind(this),
        //     onSizePerPageList: this.sizePerPageListChange.bind(this)
        // };
    }

    // sizePerPageListChange(sizePerPage) {
    //     alert(`sizePerPage: ${sizePerPage}`);
    // }

    // onPageChange(page, sizePerPage) {
    //     alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
    // }
    state = {
        products: [{
            email: "tonystark@gmail.com",
            firstName: "Tony",
            lastName: "stark"
        }]
    }
    render() {
        return (
            <div>
                <Header />
                <div class="container-fluid">
                <section class="card" style={{marginTop:"10px"}}>
                    <div style={{height:"40px"}} class="card-head">
                        <h4 style={{ textAlign: "left", backgroundColor: "blue",height:"40px",paddingTop:"5px",paddingLeft:"5px"}}>ASSIGN PMO</h4>
                    </div>
                    <div class="row w-100">
                        <div class="col-sm-3">
                            <h4 style={{marginTop:"10px",textAlign:"left",marginLeft:"2px"}}>Employee ID</h4>
                        </div>
                        <div className="col-sm-9" style={{display:"flex",flexDirection:"row"}}>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input style={{marginTop:"10px"}} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-success">ADD PMO</button></div>
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-danger">REMOVE PMO</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                </div>
                <div class="container-fluid">
                <section class="card" style={{marginTop:"10px"}}>
                    <h4 style={{ textAlign: "left", backgroundColor: "blue",height:"40px",paddingTop:"5px",paddingLeft:"5px"}}>PMO USERS</h4>
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

                <section>
                <BootstrapTable data={ this.state.products } pagination options={ this.options }>
        {/* <TableHeaderColumn dataField='id' isKey>Action</TableHeaderColumn> */}
        <TableHeaderColumn dataField='email' style={{width:"340px"}} isKey export={ false }>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='firstName'>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
      </BootstrapTable>
                </section>
                </section>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ComfigurePMO