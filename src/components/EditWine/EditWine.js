import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class EditWine extends Component {

    componentDidMount() {
        this.getWineList();
      }


    render(){
        return (
            <div>
            
            
            {/* {JSON.stringify(this.props.store.wineList)}; */}
            
                {/* {this.props.wineList.wine.id} */}
                {this.props.store.wineList.wineList.map((wine) => {
                    return <div className="viewWineDisplay" key={wine.id}>
                        <h1>Details for {wine.name}</h1>
                            <p>winery: {wine.winery}, variety: {wine.variety}, 
                            name: {wine.name}, rating: {wine.rating}, 
                            year: {wine.year}, price: {wine.price}, 
                            fruity: {wine.fruity}, floral: {wine.floral}, 
                            nutty: {wine.nutty}, earthy: {wine.earthy}, 
                            herby: {wine.herby}, spicy: {wine.spicy}, 
                            other: {wine.other}, overall: {wine.overall}, 
                            notes: {wine.notes}</p>
                            
             
                <button>home</button>                
                </div>
                })}
            </div>

        )
    }
}

export default connect(mapStoreToProps)(EditWine);