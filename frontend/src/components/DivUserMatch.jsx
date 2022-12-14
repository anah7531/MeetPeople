import iconMessage from '../icons/iconMessage.png'
import iconCoeur from '../icons/iconCoeur.png'

export function DivUserMatch({imgProfil, nom, prenom, sexe, age, dateMatch}){
    return (
        <div className="row border rounded-5 mb-2">
        <div className="col"><img className="rounded-circle m-1" src={imgProfil} width="100px" height="100px" alt="Profil"/></div>
        <div className="col text-center mt-4">
            <label><b>{prenom + " " + nom}</b></label><br/>
            <label>Age: {age}</label>
            <label className="ms-2">Sexe:{" " + sexe}</label>
        </div>
        <div className="col text-center mt-4">
            <img src={iconMessage} width="50px" alt="icon" />
        </div>
        <div className="col text-center mt-4">
            <button className="btn colorBtn rounded-5 text-white">Voir profil</button>
        </div>
        <div className="col text-center mt-4">
            <img src={iconCoeur} width="50px" alt="icon" />
        </div>
        <div className="col mt-2 text-center fw-lighter">
            <label>{dateMatch}</label>
        </div>
    </div>
    )
}