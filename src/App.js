import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Events from './components/Events';
import Event from './components/Event';
import EventReport from './components/EventReport';
import ComfigurePMO from './components/configuration/Configure-PMO';
import FeedbackQuestion from './components/configuration/FeedbackQuestions';
import AddFeedbackQuestion from './components/configuration/AddFeedbackQuestion';
import ParticipatedFeedback from './components/feedback/ParticipatedFeedback';
import NotParticipatedFeedback from './components/feedback/NotParticipatedFeedback';
import thanksFeedback from './components/feedback/thanksFeedback';
import Login from './components/Login';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      {
        console.log("in App ",props.count)
      }
      <button onClick={props.increment}>+</button>
   <button  onClick={props.decrement}>-</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ComfigurePMO/> */}
      <Route path="/" exact component={Login}/>
      <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/events"  component={Events}/>
        <Route path="/event"  component={Event}/>
        <Route path="/event-report"  component={EventReport}/>
        <Route path="/assign-PMO"  component={ComfigurePMO}/>
        <Route path="/feedbackQuestions"  component={FeedbackQuestion}/>
        <Route path="/add-feedback-question"  component={AddFeedbackQuestion}/>
      </Switch>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state
  };

}

function mapDispatchToProps(dispatch) {
  return {
     
     increment: () => dispatch({type: 'INCREMENT'}),
     decrement: () => dispatch({type: 'DECREMENT'})
   };
   
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
