import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, NavLink, withRouter } from 'react-router-dom';

class Header extends Component {

  constructor(props){
   super(props);
  }

state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
  console.log("toggle is clicked ",this.state.isOpen)
}

onRoute(routeComponent){
  this.props.history.push({pathname:routeComponent})
}

render() {
  return (
    <Router>
     <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong onClick={()=>{this.onRoute("/dashboard")}} className="white-text">Outreact FMS</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink onClick={()=>{this.onRoute("/dashboard")}} to="/dashboard">Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={()=>{this.onRoute("/events")}} to="/events">Events</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={()=>{this.onRoute("/event-report")}} to="/event-report">Reports</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Configuraton</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem onClick={()=>{this.onRoute("/assign-PMO")}}>Assign PMO</MDBDropdownItem>
                  <MDBDropdownItem onClick={()=>{this.onRoute("/add-feedback-question")}}>FeedBack Question</MDBDropdownItem>
                  {/* <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default withRouter(Header);