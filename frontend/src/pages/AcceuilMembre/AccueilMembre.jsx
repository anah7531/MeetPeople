import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceuilSliceAsync } from '../../redux/acceuilSlice/acceuilSliceAsync';
import { AccueilVide } from './AccueilVide';
import { RechercheFiltre } from "./RechercheFiltre";
import CarteProfil from './CarteProfil';

const AccueilMembre = () => {

  const {isLoading, profiles} = useSelector(state => state.acceuilSlice)
  const {loginId} = useSelector(state => state.authSlice)
  const [display, setDisplay] = useState(false)
  const dispatch = useDispatch()

  const showModal = ()=> setDisplay(true)
  const closeModal = ()=> setDisplay(false)


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
        <button className='btn btn-link fs-5 colorlettre' onClick={showModal}>Filtrer mes recherches</button>
      </div>   
      <div className="row mt-2 mb-4 justify-content-center">  
        {show()}
       </div> 
       {
          display ? <RechercheFiltre closeModal={closeModal} /> : null
       }
       
       
    </main>  
  )
}

export default AccueilMembre