import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class EditWine extends Component {

    state = {
        editWine: {
            winery: '',
            variety: '',
            name: '',
            rating: '',
            year: '',
            price: '',
            fruity: '',
            floral: '',
            nutty: '',
            earthy: '',
            herby: '',
            spicy: '',
            other: '',
            overall: '',
            notes: ''
        }
    }


    

    handleChange = (typeOfKey, event) => {
        event.preventDefault();
        this.setState({
            editWine: {
                ...this.state.editWine,
                [typeOfKey]: event.target.value,
            }
        })
    }

    editWine = (event) => {
        console.log('this.state from edit wine:', this.props.store)
        let wine = {
            id: this.props.store.wineList.wineList[0].id,
            winery: this.state.editWine.winery,
            variety: this.state.editWine.variety,
            rating: this.state.editWine.rating,
            name: this.state.editWine.name,
            nutty: this.state.editWine.nutty
        }
        
        this.props.dispatch({type: 'EDIT_WINE', payload: wine});
    }

    render(){
        return (
            <div>
            
             {JSON.stringify(this.props.store.wineList.wineList[0])}; 
                {/* {this.props.wineList.wine.id} */}
                {this.props.store.wineList.wineList.map((wine) => {
                    return <div className="viewWineDisplay" key={wine.id}>
                          
                            <div className="editWineryInput">
                                <label className="editWinery">winery:</label>
                                    <input type="text" id="editWineWinery" placeholder={wine.winery}
                                    onChange={(event) => this.handleChange('winery', event)}></input>
                            </div>

                            <div className="editVarietyInput">
                                <label className="editVariety">variety:</label>
                                    <input type="text" id="editWineVariety" placeholder={wine.variety}
                                    onChange={(event) => this.handleChange('variety', event)}></input>
                            </div>

                            <div className="editNameInput">
                                <label className="editName">name:</label>
                                    <input type="text" id="editWineName" placeholder={wine.name}
                                    onChange={(event) => this.handleChange('name', event)}></input>
                            </div>

                            <div className="editRatingInput">
                                <label className="editRating">rating:</label>
                                    <input type="text" id="editWineRating" placeholder={wine.rating}
                                    onChange={(event) => this.handleChange('rating', event)}></input>
                            </div>

                            <div className="editNutty">
                                nutty: <select name="editSelectNutty" id="editSelectNutty" placeholder={wine.nutty}
                                    onChange={(event) => this.handleChange('editNutty', event)}>
                                    <option value="none">none</option>
                                    <option value="almond">almond</option>
                                    <option value="hazelnut">hazelnut</option>
                                    <option value="walnut">walnut</option>
                                        </select>
                            </div>
                            
             
                <button>home</button>     <button onClick={this.editWine}>save</button>            
                </div>
                })}
            </div>

        )
    }
}

export default connect(mapStoreToProps)(EditWine);