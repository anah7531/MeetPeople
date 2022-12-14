import logo from "../../img/LogoMeetPeople.png"

export function MainNavBar(){

    return(
        <nav className=" color1 p-2 rounded-5">
            <img src={logo} className="ms-3" width="30px" alt="" />
            <span className="ms-2"><b>MeetPeople</b></span>
            <span className="ms-5"><a href="" className="text-decoration-none">Accueil</a></span>
            <span className="ms-4"><a href="" className="text-decoration-none">Mon profil</a></span>
            <span className="ms-4"><a href="" className="text-decoration-none">Messages</a></span>
            <span className="ms-4"><a href="" className="text-decoration-none">Matchs</a></span>
        </nav>
    )
}