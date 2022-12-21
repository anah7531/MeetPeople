import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { TextArea } from '../../components/TextArea'
import { profileSliceAsync } from '../../redux/profilSlice/profileSliceAsync'
import { util } from '../../util/util'
import StarsRating from '../EvaluerMembre/starsRating'

const SignalerProfil = () => {

  const {profile} = useSelector(state => state.profileSlice)
  const {loginId} = useSelector(state => state.authSlice)
  const {id} = useParams()

  const [text, setText] = useState("")
  const [rating, setRating] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [confirmation, setConfirmation] = useState(false)
  const {nom, prenom, dateDeNaissance, sexe, grandeur, photoProfil} = profile
  const formControl = {
    value : text,
    onChange : (e)=>setText(e.target.value)
  }

  const onClick = (e)=>{
    e.preventDefault()

    if(text !== "" && rating){
      const evaluation = {
        note : rating,
        description : text,
        idMembreEvaluateur : loginId,
        idMembreEvalue : id
      }

      console.log(evaluation)
      dispatch(profileSliceAsync.sendEvaluation(evaluation, ()=> navigate(-1)))
    }
  }

  const navigateBack = (e)=>{
    e.preventDefault()
    navigate(-1)
  }

  /* if(confirmation)
    return <SignalerProfilConfirmer contenu={text} annuler={()=>setConfirmation(false)} /> */

  return (

    <main>
      <div className='row'>
        <div className='col-3 text-center'>
          <img className='img img-large rounded-circle' src={photoProfil} alt="" />
        </div>
        <div className='col-9'>
            <div className='fs-4'>{prenom + " " + nom}</div>
            <div><b>Sexe : </b>{util.getSexeValue(sexe)}</div>
            <div><b>Âge : </b>{util.formatToAge(dateDeNaissance)} ans</div>
            <div><b>Taille : </b>{grandeur} cm</div>
            <div><b>Situation familiale : </b>A des enfants</div>
            <div><b>Recherche : </b>Relation sérieuse</div>
        </div>
      </div>
      <div className='mt-5 row justify-content-center'>
        <form className='col-8 justify-content-center'>
          <StarsRating rating={rating} setRating={setRating} />
          <TextArea label="Évaluer ce profil" formControl={formControl} />
          <div className='text-center mt-3'>
            <button className='mx-2 btn colorBtn text-white rounded-5' onClick={navigateBack}>Retour au profil</button>
            <button className='mx-2 btn btn-success rounded-5 px-5' onClick={onClick}>Envoyer</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SignalerProfil