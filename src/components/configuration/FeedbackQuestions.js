import React from 'react'
import Header from '../Header'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Footer from '../Footer';

class FeedbackQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.options = {
            onPageChange: this.onPageChange.bind(this),
            onSizePerPageList: this.sizePerPageListChange.bind(this)
        };
    }

    sizePerPageListChange(sizePerPage) {
        alert(`sizePerPage: ${sizePerPage}`);
    }

    onPageChange(page, sizePerPage) {
        alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
    }
    state = {
        products: [{
            id: 1,
            name: "Product1",
            price: 120
        }]
    }
    onAddQuestion=()=>{
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
                            <div class="row">
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-success" onClick={()=>{this.onAddQuestion()}}><i class="fa fa-plus" aria-hidden="true"></i>ADD QUESTION</button></div>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i>CLEAR FILTER</button>
                                    </div>
                                </div>
                            </div>
                            <section>
                                <BootstrapTable data={this.state.products} pagination options={this.options}>
                                    {/* <TableHeaderColumn dataField='id' isKey>Action</TableHeaderColumn> */}
                                    <TableHeaderColumn dataField='id' isKey export={false}>Questions</TableHeaderColumn>
                                    <TableHeaderColumn dataField='name'>Total Answers</TableHeaderColumn>
                                    <TableHeaderColumn dataField='price'>Feedback Type</TableHeaderColumn>
                                    <TableHeaderColumn dataField='price'>Actions</TableHeaderColumn>
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