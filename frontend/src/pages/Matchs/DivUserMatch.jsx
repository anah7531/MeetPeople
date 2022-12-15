import iconMessage from '../../icons/iconMessage.png'
import iconCoeur from '../../icons/iconCoeur.png'
import { Link } from 'react-router-dom'

export function DivUserMatch({idMembre, imgProfil, nom, prenom, sexe, age, }){
    return (
        <div className="row border rounded-5 mb-2 p-1">
            <div className='col-5 d-flex align-items-center'>
                    <img className="rounded-circle img img-small" src={imgProfil} alt="Profil"/>
                <div className='ms-2'>
                    <label><b>{prenom + " " + nom}</b></label>
                    <p >Age : {age}   Sexe : {sexe}</p>
                </div>
            </div>
            <div className='col d-flex justify-content-around align-items-center'>
                <Link to={`/message/${idMembre}`} >
                    <img className='icon-small' src={iconMessage}  alt="icon" />
                </Link>
                <Link to={`/profile/${idMembre}`} className="btn btn-sm colorBtn rounded-5 text-white px-4">Voir profil</Link>
                <Link>
                    <img className='icon-small' src={iconCoeur}  alt="icon" />
                </Link>
            </div>
        </div>
    )
}