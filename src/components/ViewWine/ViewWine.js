import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
                        <Container>
                            <Row>
                                <Col>
                                    winery: {wine.winery} 
                                </Col>
                                <Col>
                                    variety: {wine.variety}
                                </Col>
                              
                            </Row>
                            <Row>
                                <Col>
                                    name: {wine.name} 
                                </Col>
                                <Col>
                                    rating: {wine.rating} 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    year: {wine.year} 
                                </Col>
                                <Col>
                                    price: {wine.price}
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
                                <Col>
                                    notes: {wine.notes}
                                </Col>
                            </Row>
                        </Container>    
             
                <button>home</button>               <button onClick={() => this.editWine(wine.id)}>edit</button> <button onClick={() => this.deleteWine(wine.id)}>delete</button> 
                </div>
                })}



                  

            </div>

            

        )
    }
}

export default connect(mapStoreToProps)(ViewWine);