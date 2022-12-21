import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import { util } from '../../util/util';

export function DivUserMessage({profil, message}){
    const {idMembre,prenom, nom, photoProfil} = profil
    const {contenu, dateMessage} = message
    return (
        <div className="row border rounded-5 mb-2 p-1">
            <div className='col-5 d-flex align-items-center'>
                    <img className="rounded-circle img img-small" src={photoProfil} alt="Profil"/>
                <div className='ms-2'>
                    <label><b>{prenom + " " + nom}</b></label>
                    <p>{util.formatDate(dateMessage)}</p>
                </div>
            </div>
            <div className="col d-flex justify-content-around align-items-center">
                <span className='text-secondary'>{contenu}</span>
            </div>
            <div className='col d-flex justify-content-end align-items-center me-4'>
                <Link to={`/message/${idMembre}`}>
                    <FaArrowRight
                        size={25}
                        color={"#925FF0"}
                    />
                </Link>
            </div>
        </div>
    )
}