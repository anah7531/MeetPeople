import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { profileSliceAsync } from "../../redux/profilSlice/profileSliceAsync"

export function SignalerProfilConfirmer({contenu, annuler}){
    const {id} = useParams()
    const {loginId} = useSelector(state => state.authSlice)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClick = ()=>{
      const plainte = {
        contenu : contenu,
        idMembrePlaignant : loginId,
        idMembreConcerner : id
      }

      dispatch(profileSliceAsync.sendPlainte(plainte, ()=> navigate(-1)))

    }
    return (
        <div className="container w-75">
        <h3 className="text-center mt-5 mb-5">Êtes-vous sûr de vouloir signaler ce membre?</h3>
        <h4 className=""><em>Signalement :</em></h4>
  
        <div className="mt-4 border rounded p-3">{contenu}</div>
        
        <div className="text-center mt-5">
          <button className="btn btn-dark me-5" onClick={onClick}>Oui</button>
          <button className="btn btn-dark" onClick={annuler}><em>Annuler le signalement</em></button>
        </div>
      </div>
    )
}