import { Link } from "react-router-dom";
import logo from "../../img/LogoMeetPeople.png"

export function MainNavBar(){

    return(
        <nav className="color1 p-2 rounded-5">
            <ul className="ulStyle">
                <li className="liStyle">
                    <Link to='/' className="text-decoration-none">
                        <img src={logo} className="ms-3" width="30px" alt="" />
                        <b className="text-black ms-2">MeetPeople</b>
                    </Link>
                </li>
                <li className="liStyle"><Link to='/' className="ms-4 text-decoration-none link-hover d-none d-md-inline">Accueil</Link></li>
                <li className="liStyle"><Link className="ms-4 text-decoration-none link-hover">Mon profil</Link></li>
                <li className="liStyle"><Link className="ms-4 text-decoration-none link-hover">Messages</Link></li>
                <li className="liStyle"><Link to='/matchs' className="ms-4 text-decoration-none link-hover">Matchs</Link></li>
            </ul>
            <button className="btn colorBtn rounded-5 text-white btnDeconnecter">Me déconnecter</button>
        </nav>
    )
}