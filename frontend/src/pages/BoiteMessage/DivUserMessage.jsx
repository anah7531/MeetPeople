import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

export function DivUserMessage({idMembre, imgProfil, nom, prenom, dateDernierMessage, dernierMessage}){
    return (
        <div className="row border rounded-5 mb-2 p-1">
            <div className='col-5 d-flex align-items-center'>
                    <img className="rounded-circle img img-small" src={imgProfil} alt="Profil"/>
                <div className='ms-2'>
                    <label><b>{prenom + " " + nom}</b></label>
                    <p>Date dernier message?{dateDernierMessage}</p>
                </div>
            </div>
            <div className="col d-flex justify-content-around align-items-center">
                <span className='text-secondary'>Ici le dernier message?{dernierMessage}</span>
            </div>
            <div className='col d-flex justify-content-end align-items-center me-4'>
                <Link>
                    <FaArrowRight
                        size={25}
                        color={"#925FF0"}
                    />
                </Link>
            </div>
        </div>
    )
}