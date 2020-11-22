import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ViewWine extends Component {

    componentDidMount() {
        this.getWineList();
      }

      getWineList = () => {
        // this.props.dispatch({type: 'SET_WINE_LIST'});
      }

      editWine = (id) => {
        console.log('edit wine clicked, this is the id for wine selected', id)
        this.props.history.push('/editWine')
      }

      deleteWine = (id) => {
          this.props.dispatch({type: 'DELETE_WINE', payload: id});
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
                            
             
                <button>home</button>               <button onClick={() => this.editWine(wine.id)}>edit</button> <button onClick={() => this.deleteWine(wine.id)}>delete</button> 
                </div>
                })}



                  

            </div>

            

        )
    }
}

export default connect(mapStoreToProps)(ViewWine);