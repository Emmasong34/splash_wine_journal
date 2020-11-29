import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css';

class UserPage extends Component {

  componentDidMount() {
    this.getWineList();
  }

  getWineList = () => {
    this.props.dispatch({type: 'FETCH_WINE_LIST'});
  }

  handleClick = (wineClicked) => {
    console.log('clicked');
    console.log('wineClicked', wineClicked.id);
    this.props.dispatch({type: 'GET_WINE_DETAILS', payload: wineClicked });
    this.props.history.push('/viewWine');
  }

  addWine = () => {
    console.log('addWine clicked');
    this.props.history.push('/addWine');
  }


  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <>
      <h1 className="wineListHeader">Wine List</h1>
      <div className="wineDisplay">
        
        <button onClick={this.addWine}>add wine</button>
        <br></br>

        {/* {JSON.stringify(this.props.store.wineList)} */}

        {this.props.store.wineList.wineList.map((wine) => {
          return <ul className="userDisplayContainer" key={wine.id}>
                    <li>winery: {wine.winery}</li>
                    <li>variety: {wine.variety}</li>
                    <li>name: {wine.name}</li>
                    <li> rating: {wine.rating}</li>
                    <button className="viewDetails" key={wine.id} onClick={() => {this.handleClick(wine)}}>details</button>
                </ul>
        })}

        {/* <LogOutButton className="log-in" /> */}
      </div>
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
