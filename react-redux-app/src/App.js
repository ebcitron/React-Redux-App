import React from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {getApod} from './actions';
function App(props) {
  console.log("APP PROPS: ", props);
  return (
    <div className="App">
      <h1> Nasa's Photo of the Day</h1>
      {props.loading && <div>loading your image</div>}
      {props.apod && (
        <div>
          <img src ={props.apod.url} />
          <p>{props.apod.explination}</p>
          </div>)}
              {props.error !== ""  &&<p>{props.error}</p>} 
          <button onClick = {() => props.getApod()}>Get Photo Of the Day</button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    apod: state.apod,
    error: state.error,
    loading: state.loading
  }
}
export default connect(mapStateToProps, {getApod})(App)