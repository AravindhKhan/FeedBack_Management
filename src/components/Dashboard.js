import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Dashboard extends React.Component{
    state={
       totalEvents:8,
       liveImpacted:877,
       totalVolunters:45,
       totalParticipants:45
    }
    render(){
        return(
            <div>
                <Header/>
                <section> 
                <div class="container-fluid">
                <div className="row">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-desktop fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Total Events</h6>
        <h1 className="display-4">{this.state.totalEvents}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-warning text-white h-100">
                        <div className="card-body bg-warning">
                            <div className="rotate">
                                <i className="fa fa-link fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Live Impacted</h6>
        <h1 className="display-4">{this.state.liveImpacted}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body bg-secondary">
                            <div className="rotate">
                                <i className="fa fa-users fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Total Volunters</h6>
        <h1 className="display-4">{this.state.totalVolunters}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-info text-white h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-clock fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Total participants</h6>
        <h1 className="display-4">{this.state.totalParticipants}</h1>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Dashboard