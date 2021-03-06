import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AddWine.css';


class AddWine extends Component {

//setting local state as empty strings so that the new information can populate it
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


//this sends the new state to the store
    saveWine = () => {
        console.log(this.state.newWine);
        this.props.dispatch({type: 'ADD_WINE', payload: this.state})
        this.props.history.push('/user');
    }

//redirects user back to the wineList page without saving
    backToWineList = () => {
        this.props.history.push('/user');
    }

//creates newWine    
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
            <h1 className="addWineHeader">Add Wine</h1>
            <form className="wineDisplay">
            
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="wineryInput">
                            <label className="addWinery">winery:</label>
                                <br></br>
                                    <input type="text" id="addWineWinery" placeholder="winery"
                                    onChange={(event) => this.handleChange('winery', event)}></input>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="varietyInput">
                            <label className="addVariety">variety:</label>
                                <br></br>
                                    <input type="text" id="addWineVariety" placeholder="variety"
                                    onChange={(event) => this.handleChange('variety', event)}></input>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <div className="nameInput">
                            <label className="addName">name:</label>
                                <br></br>
                                    <input type="text" id="addWineName" placeholder="name"
                                    onChange={(event) => this.handleChange('name', event)}></input>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="ratingInput">
                            <label className="addRating">rating:</label>
                                <br></br>
                                    <input type="text" min="1" max="5" id="addWineRating" placeholder="rating 1-5"
                                    onChange={(event) => this.handleChange('rating', event)}></input>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <div className="yearInput">
                            <label className="addYear">year:</label>
                                <br></br>
                                    <input type="number" id="addWineYear" placeholder="year"
                                    onChange={(event) => this.handleChange('year', event)}></input>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="priceInput">
                            <label className="addPrice">price:</label>
                                <br></br>
                                    <input type="decimal" id="addWinePrice" placeholder="price"
                                    onChange={(event) => this.handleChange('price', event)}></input>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <div className="addFruity">
                            fruity: 
                                <br></br>
                                    <select name="selectFruity" id="dropdown-menu"
                                        onChange={(event) => this.handleChange('fruity', event)} >
                                            <option>select</option>
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
                    </Col>

                    <Col sm={4}>
                        <div className="addFloral">
                            floral:
                                <br></br> 
                                    <select name="selectFloral" id="dropdown-menu"
                                        onChange={(event) => this.handleChange('floral', event)}>
                                            <option>select</option>
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
                    </Col>

                    <Col sm={4}>
                        <div className="addNutty">
                            nutty: 
                                <br></br>
                                    <select name="selectNutty" id="dropdown-menu"
                                        onChange={(event) => this.handleChange('nutty', event)}>
                                            <option>select</option>
                                            <option value="none">none</option>
                                            <option value="almond">almond</option>
                                            <option value="hazelnut">hazelnut</option>
                                            <option value="walnut">walnut</option>
                                    </select>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4}>
                        <div className="addEarthy">
                            earthy: 
                            <br></br>
                                <select name="selectEarthy" id="dropdown-menu"
                                    onChange={(event) => this.handleChange('earthy', event)}>
                                        <option>select</option>
                                        <option value="none">none</option>
                                        <option value="dry leaves">dry leaves</option>
                                        <option value="dusty">dusty</option>
                                        <option value="mushrooms">mushrooms</option>
                                </select>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="addHerby">
                            herby:
                                <br></br> 
                                    <select name="selectHerby" id="dropdown-menu"
                                        onChange={(event) => this.handleChange('herby', event)}>
                                            <option>select</option>
                                            <option value="none">none</option>
                                            <option value="hay">hay</option>
                                            <option value="mint">mint</option>
                                            <option value="rosemary">rosemary</option>
                                            <option value="thyme">thyme</option>
                                    </select>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="addSpicy">
                            spicy: 
                                <br></br>
                                <select name="selectSpicy" id="dropdown-menu"
                                    onChange={(event) => this.handleChange('spicy', event)}>
                                        <option>select</option>
                                        <option value="none">none</option>
                                        <option value="black pepper">black pepper</option>
                                        <option value="licorice">licorice</option>
                                        <option value="cinnamon">cinnamon</option>
                                        <option value="clove">clove</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col >
                        <div className="addOther">
                            other: 
                            <br></br>
                                <select name="selectOther" id="dropdown-menu"
                                    onChange={(event) => this.handleChange('other', event)}>
                                        <option>select</option>
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
                    </Col>

                    <Col >
                        <div className="addOverall">
                            overall: 
                                <br></br>
                                    <select name="selectOverall" id="dropdown-menu"
                                        onChange={(event) => this.handleChange('overall', event)}>
                                            <option>select</option>
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
                    </Col>
                    </Row>
                    <Row>
                    <Col >
                    
                        <div className="notesInput">
                            <label className="addNotes">notes:</label>
                                <br></br>
                                    <input type="text" id="addWineNotes" placeholder="notes"
                                    onChange={(event) => this.handleChange('notes', event)}></input>
                        </div>
                    </Col>
                    
                </Row>

            </Container>
            <button onClick={this.backToWineList}>home</button>   <button onClick={this.saveWine}>save</button>
            </form>
            </>
        )
    }
}

export default connect(mapStoreToProps)(AddWine);