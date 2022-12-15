import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { conversationSliceAsync } from "../../redux/conversationSlice/conversationSliceAsync";
import { Api } from "../../service/Api";
import { MonMessage } from "./MonMessage";
import { SonMessage } from "./SonMessage";


const Conversation = () => {

    const {isLoading, profile, messages} = useSelector(state => state.conversationSlice)
    const {loginId} = useSelector(state => state.authSlice)
    const {id} = useParams()
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const resetText = ()=> setText("")

    const onClick = (e)=>{
        e.preventDefault()

        if(text === "")
            return

        const message = {
            idMembreExpediteur : loginId,   
            idMembreRecevant : id,
            contenu : text
        }

        dispatch(conversationSliceAsync.sendMessage(message, resetText))
    }

    const show = ()=>{
        if(isLoading)
            return null

        if(messages.length === 0)
            return <p className="text-center fs-4">Vous avez aucun message...</p>

        return messages.map(item => {
            if(item.idMembreExpediteur === loginId)
                return <MonMessage key={item.idMessage} date={item.dateMessage} message={item.contenu} />
            else
                return <SonMessage key={item.idMessage} date={item.dateMessage} message={item.contenu} />
        })
    }


    useEffect(()=>{
        dispatch(conversationSliceAsync.getConversation(loginId, id))
    }, [id])

    return(
        <main>
            <div className="text-center">
                <img className="img img-medium rounded-circle" src={profile ? profile.photoProfil : null}  alt="Profil" /><br/>
                <label className="mt-1 "><b>{profile ? profile.prenom + " " + profile.nom : null}</b></label>
            </div>

            <div className="row mt-4 justify-content-center messageContainer overflow-auto">
                <div className="col-8">
                    {show()}
                </div>
            </div>

            <form onSubmit={onClick}>
                <div className="row text-center mt-4">
                    <div className="offset-2 col-6"><input type="text" className="form-control" value={text} onChange={e => setText(e.target.value)} placeholder={"Écrire votre message"} /></div>
                    <div className="col-2"><input type="submit" className="btn colorBtn rounded-5 text-white px-5" value={"Envoyer"}/></div>
                </div>
            </form>
        </main>
    )
}

export default Conversation