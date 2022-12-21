import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceuilSliceAsync } from '../../redux/acceuilSlice/acceuilSliceAsync';
import { AccueilVide } from './AccueilVide';
import CarteProfil from './CarteProfil';

const AccueilMembre = () => {

  const {isLoading, profiles} = useSelector(state => state.acceuilSlice)
  const {loginId} = useSelector(state => state.authSlice)
  const dispatch = useDispatch()


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
        <button className='btn btn-link fs-5 colorlettre'>Filtrer mes recherches</button>
      </div>   
      <div className="row mt-2 mb-4 justify-content-center">  
        {show()}
       </div> 
       
    </main>  
  )
}

export default AccueilMembre