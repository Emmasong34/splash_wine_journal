import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EditWine.css';


class EditWine extends Component {

    state = {
        editWine: {
            winery: this.props.store.wineList.wineList[0].winery,
            variety: this.props.store.wineList.wineList[0].variety,
            name: this.props.store.wineList.wineList[0].name,
            rating: this.props.store.wineList.wineList[0].rating,
            year: this.props.store.wineList.wineList[0].year,
            price: this.props.store.wineList.wineList[0].price,
            fruity: this.props.store.wineList.wineList[0].fruity,
            floral: this.props.store.wineList.wineList[0].floral,
            nutty: this.props.store.wineList.wineList[0].nutty,
            earthy: this.props.store.wineList.wineList[0].earthy,
            herby: this.props.store.wineList.wineList[0].herby,
            spicy: this.props.store.wineList.wineList[0].spicy,
            other: this.props.store.wineList.wineList[0].other,
            overall: this.props.store.wineList.wineList[0].overall,
            notes: this.props.store.wineList.wineList[0].notes
        }
    }

    backToWineList = () => {
        this.props.history.push('/user');
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
        this.props.history.push('/user');
        window.location.reload(false);
    }


    render(){
        return (
            
            <div >
                <h1 className="editWineHeader">Edit Wine</h1>
                <Container>
                
                {/* {JSON.stringify(this.props.store.wineList.wineList[0])};  */}
                    {this.props.store.wineList.wineList.map((wine) => {
                        return <div className="wineDisplay" key={wine.id}>
                            
                            <Row>
                                <Col>
                                    <div className="editWineryInput">
                                        <label className="editWinery">winery:</label>
                                            <br></br>
                                                <input type="text" id="editWineWinery" placeholder={wine.winery}
                                                onChange={(event) => this.handleChange('winery', event)}></input>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="editVarietyInput">
                                        <label className="editVariety">variety:</label>
                                            <br></br>
                                                <input type="text" id="editWineVariety" placeholder={wine.variety}
                                                onChange={(event) => this.handleChange('variety', event)}></input>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="editNameInput">
                                        <label className="editName">name:</label>
                                            <br></br>
                                                <input type="text" id="editWineName" placeholder={wine.name}
                                                onChange={(event) => this.handleChange('name', event)}></input>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="editRatingInput">
                                        <label className="editRating">rating:</label>
                                            <br></br>
                                                <input type="text" id="editWineRating" placeholder={wine.rating}
                                                onChange={(event) => this.handleChange('rating', event)}></input>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="editYearInput">
                                        <label className="editYear">year:</label>
                                            <br></br>
                                                <input type="number" id="editWineYear" placeholder={wine.rating}
                                                onChange={(event) => this.handleChange('year', event)}></input>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="editPriceInput">
                                        <label className="editPrice">price:</label>
                                            <br></br>
                                                <input type="decimal" id="editWinePrice" placeholder={wine.price}
                                                onChange={(event) => this.handleChange('price', event)}></input>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <div className="editFruity">
                                        fruity: 
                                            <br></br>
                                                <select name="editFruity" id="dropdown-menu"
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
                                </Col>
                                <Col>
                                    <div className="editFloral">
                                        floral: 
                                            <br></br>
                                                <select name="editFloral" id="dropdown-menu"
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
                                </Col>
                                <Col>
                                    <div className="editNutty">
                                        nutty: 
                                            <br></br>
                                            <select name="editNutty" id="dropdown-menu" 
                                                onChange={(event) => this.handleChange('nutty', event)}>
                                                <option defaultValue={wine.nutty}>{wine.nutty}</option>
                                                <option value="none">none</option>
                                                <option value="almond">almond</option>
                                                <option value="hazelnut">hazelnut</option>
                                                <option value="walnut">walnut</option>
                                            </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="editEarthy">
                                        earthy: 
                                            <br></br>
                                                <select name="editEarthy" id="dropdown-menu"
                                                    onChange={(event) => this.handleChange('earthy', event)}>
                                                        <option defaultValue={wine.earthy}>{wine.earthy}</option>
                                                        <option value="none">none</option>
                                                        <option value="dry leaves">dry leaves</option>
                                                        <option value="dusty">dusty</option>
                                                        <option value="mushrooms">mushrooms</option>
                                                </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="editHerby">
                                        herby: 
                                            <br></br>
                                                <select name="editHerby" id="dropdown-menu"
                                                    onChange={(event) => this.handleChange('herby', event)}>
                                                        <option defaultValue={wine.herby}>{wine.herby}</option>
                                                        <option value="none">none</option>
                                                        <option value="hay">hay</option>
                                                        <option value="mint">mint</option>
                                                        <option value="rosemary">rosemary</option>
                                                        <option value="thyme">thyme</option>
                                                </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="editSpicy">
                                        spicy: 
                                            <br></br>
                                                <select name="editSpicy" id="dropdown-menu"
                                                    onChange={(event) => this.handleChange('spicy', event)}>
                                                        <option defaultValue={wine.spicy}>{wine.spicy}</option>
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
                                <Col>
                                    <div className="editOther">
                                        other: 
                                            <br></br>
                                                <select name="editOther" id="dropdown-menu"
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
                                </Col>
                                <Col>
                                    <div className="editOverall">
                                        overall: 
                                            <br></br>
                                                <select name="editOverall" id="dropdown-menu"
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
                                </Col>
                                <Col>
                                    <div className="editNotes">
                                        <label className="editNotes">notes:</label>
                                            <br></br>
                                                <input type="text" id="addWineNotes" defaultValue={wine.notes}
                                                onChange={(event) => this.handleChange('notes', event)}></input>
                                    </div>
                                </Col>
                            </Row>
                
                            <button onClick={this.backToWineList}>home</button> <button onClick={this.editWine}>save</button>            
                    </div>
                    })}
               </Container> 
            </div>
            

        )
    }
}


export default connect(mapStoreToProps)(EditWine);