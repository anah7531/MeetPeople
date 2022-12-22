
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { filtreSchema } from "./filtreSchema";
import { useDispatch, useSelector } from "react-redux";
import { acceuilSliceAsync } from "../../redux/acceuilSlice/acceuilSliceAsync";


export function RechercheFiltre({closeModal}){

  const [filtre, setFiltre] = useState("")
  const [sexeError, setSexeError] = useState("")
  const [ageError, setAgeError] = useState("")
  const dispatch = useDispatch()
  const {loginId} = useSelector(state => state.authSlice)

  const changeFiltre = (e) => setFiltre(e.target.value)

  const resetErrors = ()=>{
    setSexeError("")
    setAgeError("")
  }

  const rechercheSexe = async (sexe) =>{
    try{
      await filtreSchema.validateAt("sexe", sexe)
      dispatch(acceuilSliceAsync.getMatchsBySexe(sexe, closeModal))
    } catch(e){
      setSexeError(e.errors)
    }
  }

  const rechercheAge = async (ageMin, ageMax) =>{
    try{
      await filtreSchema.validateAt("ageMin", ageMin)
      await filtreSchema.validateAt("ageMax", ageMax)
      dispatch(acceuilSliceAsync.getMatchsByAge(ageMin, ageMax, closeModal))
    } catch(e){
      setAgeError(e.errors)
    }
  }

  const submitForm = (e)=>{
    e.preventDefault()
    resetErrors()

    const filtreValue = e.target.filtre.value
    const sexeValue = e.target.sexe.value
    const ageMinValue = e.target.ageMin.value
    const ageMaxValue = e.target.ageMax.value

    if(filtreValue === "")
      return dispatch(acceuilSliceAsync.getMatchs(loginId, closeModal))

    if(filtreValue === "sexe")
      return rechercheSexe(sexeValue)

    rechercheAge(ageMinValue, ageMaxValue)
  }

  return(
    <Modal show={true} onHide={closeModal} >
      <Modal.Header closeButton  >
          <Modal.Title>Recherche</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitForm}> 
          <Form.Group className="mb-3">
            <Form.Check type="radio" label="Aucun filtre" value="" name="filtre" onChange={changeFiltre} defaultChecked />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Check type="radio" label="Rechercher par sexe" value="sexe" name="filtre" onChange={changeFiltre}/>
            <div className="ms-5">
              <Form.Check type="radio" label="Homme" name="sexe" value="H" disabled={filtre !== "sexe"} />
              <Form.Check type="radio" label="Femme" name="sexe" value="F" disabled={filtre !== "sexe"} />
              <small className="text-danger">{sexeError}</small>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Check type="radio" label="Rechercher par âge" value="age" name="filtre" onChange={changeFiltre} />
            <div className="ms-3 row">
              <div className="col-5">
                <input className="form-control" type="number" placeholder="Âge minimum" name="ageMin" disabled={filtre !== "age"} />
              </div>
              <div className="col-5">
                <input className="form-control" type="number" placeholder="Âge maximum" name="ageMax" disabled={filtre !== "age"} />
              </div>
              <small className="text-danger">{ageError}</small>
            </div>
          </Form.Group>

          <Form.Group className="my-4 " >
            <input type="submit" className="btn colorBtn rounded-5 w-100 text-white " value={"Rechercher"} />
          </Form.Group>
          
        </Form>
      </Modal.Body>
    </Modal>  
  )
}