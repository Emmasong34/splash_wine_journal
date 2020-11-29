import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ViewWine.css';


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
          this.props.history.push('/user');
      }

      backToWineList = () => {
          this.props.history.push('/user');
      }

  



    render(){
        return (
            
            <div className="wineDisplay">
            
            {/* JSON stringify is for testing purposes */}
            {/* {JSON.stringify(this.props.store.wineList)}; */}
            
                {/* {this.props.wineList.wine.id} */}
                {this.props.store.wineList.wineList.map((wine) => {
                    return <div  key={wine.id}>
                        <h1>Details for {wine.name}</h1>
                        <Container className="displayContainer">
                            <Row >
                                <Col>
                                    winery: 
                                    <br></br>
                                    {wine.winery} 
                                </Col>
                                <Col>
                                    variety: 
                                    <br></br>
                                    {wine.variety}
                                </Col>
                              
                            </Row>
                            <Row>
                                <Col>
                                    name: 
                                    <br></br>
                                    {wine.name} 
                                </Col>
                                <Col>
                                    rating: 
                                    <br></br>
                                    {wine.rating} 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    year: 
                                    <br></br>
                                    {wine.year} 
                                </Col>
                                <Col>
                                    price: 
                                    <br></br>
                                    {wine.price}
                                </Col>
                            </Row> 
                            <Row>
                                <Col>
                                    fruity: {wine.fruity}
                                </Col>
                                <Col>
                                    floral: {wine.floral} 
                                </Col>
                                <Col>
                                    nutty: {wine.nutty} 
                                </Col>
                            </Row>
                            <Row> 
                                <Col>
                                    earthy: {wine.earthy} 
                                </Col>
                                <Col>
                                    herby: {wine.herby} 
                                </Col>
                                <Col>
                                    spicy: {wine.spicy} 
                                </Col>
                            </Row>  
                            <Row>
                                <Col>
                                    other: {wine.other} 
                                </Col>
                                <Col>
                                    overall: {wine.overall} 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    notes: 
                                    <br></br>
                                    {wine.notes}
                                </Col>
                            </Row>
                        </Container>    
             
                <button onClick={this.backToWineList}>home</button>               <button onClick={() => this.editWine(wine.id)}>edit</button> <button onClick={() => this.deleteWine(wine.id)}>delete</button> 
                </div>
                })}



                  

            </div>

            

        )
    }
}

export default connect(mapStoreToProps)(ViewWine);