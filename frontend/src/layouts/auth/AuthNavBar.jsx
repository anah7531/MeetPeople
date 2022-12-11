import logo from "../../img/LogoMeetPeople.png"

export function AuthNavBar(){

    return (
        <nav className=" color1 text-center p-2 rounded-5">
            <img src={logo} width="30px" alt="" />
            <span className="ms-2"><b>MeetPeople</b></span>
        </nav>
    )
}