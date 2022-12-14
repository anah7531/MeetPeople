import React, { useState } from "react"
const Conversation = () => {

    const [conversation, setconversation] = useState(
        {
            id: 1,
            nom: "Perez",
            prenom: "Veronica",
            age: 23,
            sexe: "F",
            imgProfil : "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
            dateMatch: "12-12-2002"
        }
    );

    const [mssg, setMssg] = useState([
        {
            id: 1,
            contenu: "Hello!",
            date: "07-12-22",
            idMembreExpediteur: 1,
            idMembreRecevant: 2
        },
        {
            id: 2,
            contenu: "Hi!",
            date: "07-12-22",
            idMembreExpediteur: 2,
            idMembreRecevant: 1
        },
        {
            id: 3,
            contenu: "How are you?!",
            date: "07-12-22",
            idMembreExpediteur: 2,
            idMembreRecevant: 1
        },
        {
            id: 4,
            contenu: "Good and you?!",
            date: "07-12-22",
            idMembreExpediteur: 1,
            idMembreRecevant: 2
        },
        {
            id: 5,
            contenu: "Good and you Good and you Good and you Good and you Good and you Good and you Good and you Good and you Good and you?! Good and you Good and you Good and you Good and you Good and you Good and you Good and you Good and you Good and you?!",
            date: "07-12-22",
            idMembreExpediteur: 1,
            idMembreRecevant: 2
        },
        {
            id: 6,
            contenu: "Good and you Good and you Good and you Good and you Good and you Good and you Good and you Good and you Good and you?!",
            date: "07-12-22",
            idMembreExpediteur: 2,
            idMembreRecevant: 1
        },
        {
            id: 7,
            contenu: "Good and you Good and you Good and you?!",
            date: "07-12-22",
            idMembreExpediteur: 2,
            idMembreRecevant: 1
        }
    ])

    return(
        <div>
            <div className="text-center">
                <img className="rounded-circle" src={conversation.imgProfil} width="130" height="130" alt="Profil" /><br/>
                <label className="mt-1 "><b>{conversation.prenom + " " + conversation.nom}</b></label>
            </div>
            <div className="row">
                <div className="offset-lg-1 col-lg-10 rounded mt-2 pt-1" style={{ height:400, overflow:"scroll"}}>
                    {
                        mssg.map(item => {
                            return (
                                <>
                                    <div key={item.id} className={`${item.idMembreExpediteur === 1 ? 'floatRight' : 'floatLeft'}`}>
                                        <div className={`rounded-5 ps-3 pe-3 pt-1 pb-1 mb-1 boiteChat ${item.idMembreExpediteur === 1 ? 'chatExpediteur' : 'chatRecevant'}`}>{item.contenu}</div>
                                    </div>
                                    <div className={`fontDate ${item.idMembreExpediteur === 1 ? 'floatRight' : 'floatLeft'}`}>{item.date}</div>
                                </>
                            )
                        })
                    }
                </div>
                <form>
                    <div className="row text-center mt-2">
                            <div className="offset-2 col-6"><input type="text" className="form-control" placeholder={"Écrire votre message"} /></div>
                            <div className="col-2"><input type="submit" className="btn colorBtn rounded-5 text-white px-5" value={"Envoyer"}/></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Conversation