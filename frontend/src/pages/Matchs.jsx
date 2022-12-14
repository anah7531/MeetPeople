import React, { useState } from "react"
import { DivUserMatch } from "../components/DivUserMatch";
import { Api } from "../service/Api";

const Matchs = () => {

    const [match, setMatch] = useState([
        {
            idMembre: 1,
            nom: "Perez",
            prenom: "Alex",
            dateDeNaissance: 23,
            sexe: "F",
            photoProfil : "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
            dateSecond: "12-12-2002"
        },
        {
            idMembre: 2,
            nom: "Guitierrez",
            prenom: "Veronica",
            dateDeNaissance: 34,
            sexe: "H",
            photoProfil : "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
            dateSecond: "12-12-2002"
        }
    ]);

    const getMatchs = async (id)=>{
        const response = await Api.getMatchsById(id)

        if(response.status === 200){
            const data = await response.json()
            setMatch(data)
        }
    }

    getMatchs();

    return (
        <div>
            <h4 className="text-center pt-2 pb-5"><b>Mes Matchs</b></h4>

            {
                match.map(item => (
                    <DivUserMatch key={item.idMembre}
                                    imgProfil={item.photoProfil}
                                    nom={item.nom}
                                    prenom={item.prenom}
                                    sexe={item.sexe}
                                    age={item.dateDeNaissance}
                                    dateMatch={item.dateSecond}/>
                   
                ))
            }
        </div>
    )
}

export default Matchs