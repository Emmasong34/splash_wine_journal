import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import swal from '@sweetalert/with-react';



class ViewWine extends Component {

    componentDidMount() {
        this.getWineList();
      }

      getWineList = () => {
        // this.props.dispatch({type: 'SET_WINE_LIST'});
      }

    //retrieves information for selected wine
      editWine = (id) => {
        console.log('edit wine clicked, this is the id for wine selected', id)
        this.props.history.push('/editWine')
      }
    
    //bundles up information about which wine to delete by id
      deleteWine = (id) => {
          this.props.dispatch({type: 'DELETE_WINE', payload: id});
          this.props.history.push('/user');
      }

    //redirects user back to winelist page without saving
      backToWineList = () => {
          this.props.history.push('/user');
      }

    //deletes selected wine by id after warning
      deleteThisWine(id) {
          console.log('deletethiswine clicked', id)
        swal({
            title: "Are you sure?",
            // text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(() => {this.deleteWine(id)}
          )}
  


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
                            <Row className="displayRow">
                                <Col>
                                    <u>winery:</u>
                                    <br></br>
                                    {wine.winery} 
                                </Col>
                                <Col>
                                    <u>variety:</u>
                                    <br></br>
                                    {wine.variety}
                                </Col>
                              
                            </Row>
                            <Row className="displayRow">
                                <Col>
                                    <u>name:</u>
                                    <br></br>
                                    {wine.name} 
                                </Col>
                                <Col>
                                    <u>rating:</u> 
                                    <br></br>
                                    {wine.rating} 
                                </Col>
                            </Row>
                            <Row className="displayRow">
                                <Col>
                                   <u>year:</u>  
                                    <br></br>
                                    {wine.year} 
                                </Col>
                                <Col>
                                   <u>price:</u>  
                                    <br></br>
                                    {wine.price}
                                </Col>
                            </Row> 
                            <Row className="displayRow">
                                <Col>
                                    <u>fruity:</u> 
                                    <br></br>
                                    {wine.fruity}
                                </Col>
                                <Col>
                                    <u>floral:</u> 
                                    <br></br>
                                    {wine.floral} 
                                </Col>
                                <Col>
                                    <u>nutty:</u> 
                                    <br></br>
                                    {wine.nutty} 
                                </Col>
                            </Row>
                            <Row className="displayRow"> 
                                <Col>
                                    <u>earthy:</u> 
                                    <br></br>
                                    {wine.earthy} 
                                </Col>
                                <Col>
                                    <u>herby:</u> 
                                    <br></br>
                                    {wine.herby} 
                                </Col>
                                <Col>
                                    <u>spicy:</u> 
                                    <br></br>
                                    {wine.spicy} 
                                </Col>
                            </Row>  
                            <Row className="displayRow">
                                <Col>
                                    <u>other:</u> 
                                    <br></br>
                                    {wine.other} 
                                </Col>
                                <Col>
                                    <u>overall:</u> 
                                    <br></br>
                                    {wine.overall} 
                                </Col>
                            </Row>
                            <Row className="displayRow">
                                <Col>
                                    <u>notes:</u> 
                                    <br></br>
                                    {wine.notes}
                                </Col>
                            </Row>
                        </Container>    
                
                        <button onClick={this.backToWineList}>home</button>               <button onClick={() => this.editWine(wine.id)}>edit</button> <button onClick={() => this.deleteThisWine(wine.id)}>delete</button> 
                        
                    

                </div>
                })}



                  

            </div>

            

        )
    }
}

export default connect(mapStoreToProps)(ViewWine);