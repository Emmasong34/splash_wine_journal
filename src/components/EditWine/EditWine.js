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
            name: this.state.editWine.name,
            rating: this.state.editWine.rating,
            year: this.state.editWine.year,
            price: this.state.editWine.price,
            fruity: this.state.editWine.fruity,
            floral: this.state.editWine.floral,
            nutty: this.state.editWine.nutty,
            earthy: this.state.editWine.earthy,
            herby: this.state.editWine.herby,
            spicy: this.state.editWine.spicy,
            other: this.state.editWine.other,
            overall: this.state.editWine.overall,
            notes: this.state.editWine.notes
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
                                    <input type="text" id="editWineWinery" defaultValue={wine.winery}
                                    onChange={(event) => this.handleChange('winery', event)}></input>
                            </div>

                            <div className="editVarietyInput">
                                <label className="editVariety">variety:</label>
                                    <input type="text" id="editWineVariety" defaultValue={wine.variety}
                                    onChange={(event) => this.handleChange('variety', event)}></input>
                            </div>

                            <div className="editNameInput">
                                <label className="editName">name:</label>
                                    <input type="text" id="editWineName" defaultValue={wine.name}
                                    onChange={(event) => this.handleChange('name', event)}></input>
                            </div>

                            <div className="editRatingInput">
                                <label className="editRating">rating:</label>
                                    <input type="text" id="editWineRating" defaultValue={wine.rating}
                                    onChange={(event) => this.handleChange('rating', event)}></input>
                            </div>

                            <div className="editYearInput">
                                <label className="editYear">year:</label>
                                    <input type="number" id="editWineYear" defaultValue={wine.rating}
                                    onChange={(event) => this.handleChange('year', event)}></input>
                            </div>

                            <div className="editPriceInput">
                                <label className="editPrice">price:</label>
                                    <input type="decimal" id="editWinePrice" defaultValue={wine.price}
                                    onChange={(event) => this.handleChange('price', event)}></input>
                            </div>

                            <div className="editFruity">
                                fruity: <select name="editFruity" id="editFruity"
                                onChange={(event) => this.handleChange('fruity', event)} >
                                            <option defaultValue={wine.fruity} >{wine.fruity}</option>
                                            <option value="none">none</option>
                                            <option value="berry" >berry</option>
                                            <option value="cherry" >cherry</option>
                                            <option value="citrus">citrus</option>
                                            <option value="apple">apple</option>
                                            <option value="pear">pear</option>
                                            <option value="apricot">apricot</option>
                                            <option value="peach">peach</option>
                                            <option value="melon">melon</option>
                                            <option value="grapefruit">grapefruit</option>
                                </select>
                            </div>

                            <div className="editFloral">
                                floral: <select name="editFloral" id="editFloral"
                                        onChange={(event) => this.handleChange('floral', event)}>
                                            <option defaultValue={wine.floral}>{wine.floral}</option>
                                            <option value="none">none</option>
                                            <option value="rose">rose</option>
                                            <option value="violet">violet</option>
                                            <option value="iris">iris</option>
                                            <option value="jasmine">jasmine</option>
                                            <option value="orange blossom">orange blossom</option>
                                            <option value="chamomile">chamomile</option>
                                            <option value="honeysuckle">honeysuckle</option>
                                            <option value="lily">lily</option>
                                </select>
                            </div>

                            <div className="editNutty">
                                nutty: <select name="editNutty" id="editNutty" 
                                    onChange={(event) => this.handleChange('nutty', event)}>
                                    <option defaultValue={wine.nutty}>{wine.nutty}</option>
                                    <option value="none">none</option>
                                    <option value="almond">almond</option>
                                    <option value="hazelnut">hazelnut</option>
                                    <option value="walnut">walnut</option>
                                        </select>
                            </div>

                            <div className="editEarthy">
                                earthy: <select name="editEarthy" id="editEarthy"
                                        onChange={(event) => this.handleChange('earthy', event)}>
                                            <option defaultValue={wine.earthy}>{wine.earthy}</option>
                                            <option value="none">none</option>
                                            <option value="dry leaves">dry leaves</option>
                                            <option value="dusty">dusty</option>
                                            <option value="mushrooms">mushrooms</option>
                                </select>
                            </div>

                            <div className="editHerby">
                                herby: <select name="editHerby" id="editHerby"
                                        onChange={(event) => this.handleChange('herby', event)}>
                                            <option defaultValue={wine.herby}>{wine.herby}</option>
                                            <option value="none">none</option>
                                            <option value="hay">hay</option>
                                            <option value="mint">mint</option>
                                            <option value="rosemary">rosemary</option>
                                            <option value="thyme">thyme</option>
                                </select>
                            </div>

                            <div className="editSpicy">
                                spicy: <select name="editSpicy" id="editSpicy"
                                        onChange={(event) => this.handleChange('spicy', event)}>
                                            <option defaultValue={wine.spicy}>{wine.spicy}</option>
                                            <option value="none">none</option>
                                            <option value="black pepper">black pepper</option>
                                            <option value="licorice">licorice</option>
                                            <option value="cinnamon">cinnamon</option>
                                            <option value="clove">clove</option>
                                </select>
                            </div>
                            <div className="editOther">
                                other: <select name="editOther" id="editOther"
                                        onChange={(event) => this.handleChange('other', event)}>
                                            <option defaultValue={wine.other}>{wine.other}</option>
                                            <option value="none">none</option>
                                            <option value="vanilla">vanilla</option>
                                            <option value="cedar">cedar</option>
                                            <option value="tobacco">tobacco</option>
                                            <option value="chocolate">chocolate</option>
                                            <option value="leather">leather</option>
                                            <option value="butterscotch">butterscotch</option>
                                            <option value="olive">olive</option>
                                </select>
                            </div>

                            <div className="editOverall">
                                overall: <select name="editOverall" id="editOverall"
                                        onChange={(event) => this.handleChange('overall', event)}>
                                            <option defaultValue={wine.overall}>{wine.overall}</option>
                                            <option value="none">none</option>
                                            <option value="aggressive">aggressive</option>
                                            <option value="balanced">balanced</option>
                                            <option value="crispy">crispy</option>
                                            <option value="delicate">delicate</option>
                                            <option value="rich">rich</option>
                                            <option value="thin">thin</option>
                                            <option value="sweet">sweet</option>
                                            <option value="dry">dry</option>
                                </select>
                            </div>

                            <div className="editNotes">
                                <label className="editNotes">notes:</label>
                                    <input type="text" id="addWineNotes" defaultValue={wine.notes}
                                    onChange={(event) => this.handleChange('notes', event)}></input>
                            </div>
                            
             
                <button>home</button>     <button onClick={this.editWine}>save</button>            
                </div>
                })}
            </div>

        )
    }
}

export default connect(mapStoreToProps)(EditWine);