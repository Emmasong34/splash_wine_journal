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
            year: 0,
            price: 0,
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
            newWine: {
                ...this.state.newWine,
                [typeOfKey]: event.target.value,
            }
        })
    }

    render(){
        return(

            <>
            <form>
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
                    <input type="number" id="addWinePrice" placeholder="price"
                    onChange={(event) => this.handleChange('price', event)}></input>
            </div>
            

            <div className="addFruity">
                fruity: <select name="selectFruity" id="selectFruity" 
                        onChange={(event) => this.handleChange('fruity', event)}>
                            <option value="">none</option>
                            <option value="">berry</option>
                            <option value="">cherry</option>
                            <option value="">citrus</option>
                            <option value="">apple</option>
                            <option value="">pear</option>
                            <option value="">apricot</option>
                            <option value="">peach</option>
                            <option value="">melon</option>
                            <option value="">grapefruit</option>

                </select>
            </div>

            <div className="addFloral">
                floral: <select name="selectFloral" id="selectFloral"
                        onChange={(event) => this.handleChange('floral', event)}>
                            <option value="">none</option>
                            <option value="">rose</option>
                            <option value="">violet</option>
                            <option value="">iris</option>
                            <option value="">jasmine</option>
                            <option value="">orange blossom</option>
                            <option value="">chamomile</option>
                            <option value="">honeysuckle</option>
                            <option value="">lily</option>
                </select>
            </div>

            <div className="addNutty">
                nutty: <select name="selectNutty" id="selectNutty"
                        onChange={(event) => this.handleChange('nutty', event)}>
                            <option value="">none</option>
                            <option value="">almond</option>
                            <option value="">hazelnut</option>
                            <option value="">walnut</option>
                </select>
            </div>

            <div className="addEarthy">
                earthy: <select name="selectEarthy" id="selectEarthy"
                        onChange={(event) => this.handleChange('earthy', event)}>
                            <option value="">none</option>
                            <option value="">dry leaves</option>
                            <option value="">dusty</option>
                            <option value="">mushrooms</option>
                </select>
            </div>

            <div className="addHerby">
                herby: <select name="selectHerby" id="selectHerby"
                        onChange={(event) => this.handleChange('herby', event)}>
                            <option value="">none</option>
                            <option value="">hay</option>
                            <option value="">mint</option>
                            <option value="">rosemary</option>
                            <option value="">thyme</option>
                </select>
            </div>

            <div className="addSpicy">
                spicy: <select name="selectSpicy" id="selectSpicy"
                        onChange={(event) => this.handleChange('spicy', event)}>
                            <option value="">none</option>
                            <option value="">black pepper</option>
                            <option value="">licorice</option>
                            <option value="">cinnamon</option>
                            <option value="">clove</option>
                </select>
            </div>

            <div className="addOther">
                other: <select name="selectOther" id="selectOther"
                        onChange={(event) => this.handleChange('other', event)}>
                            <option value="">none</option>
                            <option value="">vanilla</option>
                            <option value="">cedar</option>
                            <option value="">tobacco</option>
                            <option value="">chocolate</option>
                            <option value="">leather</option>
                            <option value="">butterscotch</option>
                            <option value="">olive</option>
                </select>
            </div>

            <div className="notesInput">
                <label className="addNotes">notes:</label>
                    <input type="text" id="addWineNotes" placeholder="notes"
                    onChange={(event) => this.handleChange('notes', event)}></input>
            </div>



            </form>
            </>
        )
    }
}

export default connect(mapStoreToProps)(AddWine);