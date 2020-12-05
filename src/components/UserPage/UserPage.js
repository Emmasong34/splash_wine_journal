import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css';

class UserPage extends Component {

  componentDidMount() {
    this.getWineList();
  }

//gets wineList from store  
  getWineList = () => {
    this.props.dispatch({type: 'FETCH_WINE_LIST'});
  }

//displays information for selected wine by id  
  handleClick = (wineClicked) => {
    console.log('clicked');
    console.log('wineClicked', wineClicked.id);
    this.props.dispatch({type: 'GET_WINE_DETAILS', payload: wineClicked });
    this.props.history.push('/viewWine');
  }

//redirects user to addwine page  
  addWine = () => {
    console.log('addWine clicked');
    this.props.history.push('/addWine');
  }


  
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

      </div>
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
