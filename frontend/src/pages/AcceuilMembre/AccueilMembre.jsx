import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceuilSliceAsync } from '../../redux/acceuilSlice/acceuilSliceAsync';
import { AccueilVide } from './AccueilVide';
import CarteProfil from './CarteProfil';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import swal from "sweetalert";
import { InputNumber } from '../../components/InputNumber';
import { InputRadio } from '../../components/InputRadio';
import { sexeOptions } from '../CreerCompte/sexeOptions';
import { filtreSchema } from './filtreSchema';
import { Api } from "../../service/Api";
// import { sexeFiltre } from "../pages/AcceuilMembre/sexeFiltre";

const AccueilMembre = () => {

  const {isLoading, profiles} = useSelector(state => state.acceuilSlice)
  const {loginId} = useSelector(state => state.authSlice)
  const dispatch = useDispatch()

    // Modal
    const [display, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Disable buttons
    const [toggleDisabled, setToggleDisabled] = React.useState(false);

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm(
      {resolver: yupResolver(filtreSchema)}
  );


  // RECHERCHE POST
  const postData = async (data) => {

      //Envoie les données à l'API
      const response = await Api.filtre(data)

      if(response.status === 200){
          //Reset le formulaire
          reset();

          //Alert de confirmation
          swal({
              title: "Voici vos matchs potentielles!",
              icon: "success",
              button: "Accepter"
          })

      } else {
           //Alert de confirmation
           swal({
              title: "Erreur de recherche",
              icon: "error",
              button: "Accepter"
          })
      }
  }



  const show = ()=>{
    if(profiles.length === 0)
      return <AccueilVide/>

    return <CarteProfil profile={profiles[0]} />
  }

  useEffect(()=>{
    dispatch(acceuilSliceAsync.getMatchs(loginId))
  }, [])
  
  return (
    <main>
      <div className='row'>
        <button className='btn btn-link fs-5 colorlettre'  onClick={handleShow}>Filtrer mes recherches</button>
      </div> 
      
      <Modal show={display} onHide={handleClose} >
        <Modal.Header closeButton >
          <div class="col text-center">
            <Modal.Title className='titre-recherche'>Recherche</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(postData)}>    
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className='titre-sexe'>Rechercher par sexe</Form.Label>
                <div class="radio-sexe" >
                <InputRadio label="" columnSize="col-6" options={sexeOptions} formControl={register("sexe")}  />
                </div>            
              </Form.Group>                 
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                 <Form.Label className='titre-age'>Rechercher par âge</Form.Label>
                 <div class="radio-age">
                   <InputNumber label={'Âge minimum'} formControl={register("minimum")} errorMessage={errors.minimum?.message} />
                   <InputNumber label={'Âge maximum'} formControl={register("maximum")} errorMessage={errors.maximum?.message}/>
                 </div>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <div class="col text-center">
        <div class="d-grid gap-2">
          <input
            type="submit"
            className="btn colorBtn rounded-5 px-4 me-2 text-white " 
            value={"Rechercher"} 
          />
          </div>
          </div>
        </Modal.Footer>
      </Modal>  
      <div className="row mt-2 mb-4 justify-content-center">  
        {show()}
       </div> 
       
    </main>  
  )
}

export default AccueilMembre