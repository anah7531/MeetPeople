import React, {useState} from 'react'
// import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import Header from '../../components/Header';
import CarteProfil from './CarteProfil';
import { Api } from "../../service/Api";

const AccueilMembre = () => {
  
  return (
    <>
      <div>
        <Header />
      </div>   
      <Container >
        <h2 id='titre'>Filtrer mes recherches</h2>
                                         {/* Filtre pour plus tard */}
         {/* <MDBInputGroup>
           <MDBInput label='Search' />
           <MDBBtn rippleColor='dark'>
           <MDBIcon icon='search' />
           </MDBBtn>
          </MDBInputGroup> */}
        
      <div className="App">  
        <CarteProfil
        />    
       </div> 
      </Container>  
       
    </>  
  )
}

export default AccueilMembre