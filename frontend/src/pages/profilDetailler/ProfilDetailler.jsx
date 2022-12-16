import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { profileSliceAsync } from '../../redux/profilSlice/profileSliceAsync'
import { util } from '../../util/util'

const ProfilDetailler = () => {
  const {id} = useParams()
  const {profile} = useSelector(state => state.profileSlice)
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(profileSliceAsync.getProfile(id))
  }, [])

  return (
    <main >
      <div className='row'>
        <div className='col text-center'>
          <img className='img img-large rounded-circle' src={profile.photoProfil} alt="" />
        </div>
        <div className='col-5'>
          <div className='fs-4'>{profile.prenom + " " + profile.nom}</div>
          <div><b>Sexe : </b>{util.getSexeValue(profile.sexe)}</div>
          <div><b>Âge : </b>{util.formatToAge(profile.dateDeNaissance)} ans</div>
          <div><b>Taille : </b>{profile.grandeur} cm</div>
          <div><b>Situation familiale : </b>A des enfants</div>
          <div><b>Recherche : </b>Relation sérieuse</div>
          
          <div className='d-flex mt-2'>
              <button className='btn btn-outline-primary'>Envoyé message</button>
              <button className='ms-2 btn btn-outline-secondary'>Évaluer profile</button>
          </div>
        
        </div>
        <div className='col-4 flex-column'>
          <button className='w-100 btn btn-outline-danger rounded-5 mb-2'>Je n'aime plus ce profil</button>
          <button className='w-100 btn btn-danger rounded-5 mb-2'>Bloquer ce profil</button>
          <Link to={`/profile/${id}/signaler`} className='w-100 btn btn-danger rounded-5 mb-2'>Signaler ce profil</Link>
        </div>
      </div>

      <div className='row py-4'>
        <div className='col-8'>
          <h5>À propos de moi</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa, debitis ullam neque placeat libero ipsam ipsa qui necessitatibus illo, quasi dolore atque repudiandae, unde optio pariatur? Fuga, ratione a.
          </p>
        </div>
        <div className='col-4'>
          <div className=''>
            <p className='text-center'><b>Les évaluations</b></p>
            <p className='text-center'>Aucune évaluation</p>
          </div>
          <div>
            <p className='text-center'><b>Les Photos</b></p>
            <p className='text-center'>Aucune Photo à afficher</p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default ProfilDetailler