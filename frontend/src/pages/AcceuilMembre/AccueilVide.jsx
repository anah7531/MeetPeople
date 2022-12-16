import { Link } from "react-router-dom";


export function AccueilVide(){
    
    return(
        <div className="col-6 text-center mt-5">
            <h4>Vous avez vu tous les profils disponible</h4>
            <Link to="/matchs" className="btn colorBtn text-white rounded-5 mt-3">Voir mes matchs</Link>
        </div>
    )
}