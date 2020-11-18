import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ViewWine extends Component {

    render(){
        return (
            <div>
            {JSON.stringify(this.props.store.wineList)};
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ViewWine);