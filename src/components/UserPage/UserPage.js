import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {

  componentDidMount() {
    this.getWineList();
  }

  getWineList = () => {
    this.props.dispatch({type: 'FETCH_WINE_LIST'});
  }

  handleClick = (wineClicked) => {
    console.log('clicked')
    console.log('wineClicked', wineClicked.id)
    this.props.history.push('/viewWine')
  }


  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1>Wine List</h1>
        {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
        {/* <p>Your ID is: {this.props.store.user.id}</p> */}

        {/* {JSON.stringify(this.props.store.wineList)} */}

        {this.props.store.wineList.wineList.map((wine) => {
          return <div className="wineDisplay" key={wine.id}>
                    <p>winery: {wine.winery}, variety: {wine.variety}, 
                    name: {wine.name}, rating: {wine.rating}</p>
                    <button className="viewDetails" onClick={() => {this.handleClick(wine)}}>view wine</button>
                </div>
        })}

        {/* <LogOutButton className="log-in" /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
