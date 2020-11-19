import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class AddWine extends Component {

    state = {
        newWine: {
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

    saveWine = () => {
        console.log(this.state.newWine);
        this.props.dispatch({type: 'ADD_WINE', payload: this.state})

    }




    handleChange = (typeOfKey, event) => {
        event.preventDefault();
        this.setState({
            newWine: {
                ...this.state.newWine,
                [typeOfKey]: event.target.value,
            }
        })
        // console.log('new wine:', this.state.newWine)
    }

    render(){
        return(

            <>
            <form >
            <div className="wineryInput">
                <label className="addWinery">winery:</label>
                    <input type="text" id="addWineWinery" placeholder="winery"
                    onChange={(event) => this.handleChange('winery', event)}></input>
            </div>

            <div className="varietyInput">
                <label className="addVariety">variety:</label>
                    <input type="text" id="addWineVariety" placeholder="variety"
                    onChange={(event) => this.handleChange('variety', event)}></input>
            </div>

            <div className="nameInput">
                <label className="addName">name:</label>
                    <input type="text" id="addWineName" placeholder="name"
                    onChange={(event) => this.handleChange('name', event)}></input>
            </div>

            <div className="ratingInput">
                <label className="addRating">rating:</label>
                    <input type="text" id="addWineRating" placeholder="rating"
                    onChange={(event) => this.handleChange('rating', event)}></input>
            </div>

            <div className="yearInput">
                <label className="addYear">year:</label>
                    <input type="number" id="addWineYear" placeholder="year"
                    onChange={(event) => this.handleChange('year', event)}></input>
            </div>

            <div className="priceInput">
                <label className="addPrice">price:</label>
                    <input type="decimal" id="addWinePrice" placeholder="price"
                    onChange={(event) => this.handleChange('price', event)}></input>
            </div>
            

            <div className="addFruity">
                fruity: <select name="selectFruity" id="selectFruity"
                onChange={(event) => this.handleChange('fruity', event)} 
                        >
                            <option value="none" >none</option>
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

            <div className="addFloral">
                floral: <select name="selectFloral" id="selectFloral"
                        onChange={(event) => this.handleChange('floral', event)}>
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

            <div className="addNutty">
                nutty: <select name="selectNutty" id="selectNutty"
                        onChange={(event) => this.handleChange('nutty', event)}>
                            <option value="none">none</option>
                            <option value="almond">almond</option>
                            <option value="hazelnut">hazelnut</option>
                            <option value="walnut">walnut</option>
                </select>
            </div>

            <div className="addEarthy">
                earthy: <select name="selectEarthy" id="selectEarthy"
                        onChange={(event) => this.handleChange('earthy', event)}>
                            <option value="none">none</option>
                            <option value="dry leaves">dry leaves</option>
                            <option value="dusty">dusty</option>
                            <option value="mushrooms">mushrooms</option>
                </select>
            </div>

            <div className="addHerby">
                herby: <select name="selectHerby" id="selectHerby"
                        onChange={(event) => this.handleChange('herby', event)}>
                            <option value="none">none</option>
                            <option value="hay">hay</option>
                            <option value="mint">mint</option>
                            <option value="rosemary">rosemary</option>
                            <option value="thyme">thyme</option>
                </select>
            </div>

            <div className="addSpicy">
                spicy: <select name="selectSpicy" id="selectSpicy"
                        onChange={(event) => this.handleChange('spicy', event)}>
                            <option value="none">none</option>
                            <option value="black pepper">black pepper</option>
                            <option value="licorice">licorice</option>
                            <option value="cinnamon">cinnamon</option>
                            <option value="clove">clove</option>
                </select>
            </div>

            <div className="addOther">
                other: <select name="selectOther" id="selectOther"
                        onChange={(event) => this.handleChange('other', event)}>
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

            <div className="addOverall">
                overall: <select name="selectOverall" id="selectOverall"
                        onChange={(event) => this.handleChange('overall', event)}>
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

            <div className="notesInput">
                <label className="addNotes">notes:</label>
                    <input type="text" id="addWineNotes" placeholder="notes"
                    onChange={(event) => this.handleChange('notes', event)}></input>
            </div>


            <button onClick={this.saveWine}>save</button>
            </form>
            </>
        )
    }
}

export default connect(mapStoreToProps)(AddWine);