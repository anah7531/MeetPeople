import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { matchSliceAsync } from "../../redux/matchSlice/matchSliceAsync";
import { DivUserMatch } from "./DivUserMatch";

const Matchs = () => {

    const {loginId} = useSelector(state => state.authSlice)
    const {matchList, isLoading} = useSelector(state => state.matchSlice)
    const dispatch = useDispatch()

    const show = ()=>{
        if(isLoading)
            return null

        if(matchList.length === 0 )
            return <p className="text-center fs-4">Vous avez aucun match pour le moment</p>

        return  matchList.map(item => (
            <DivUserMatch 
                key={item.idMembre}
                idMembre={item.idMembre}
                imgProfil={item.photoProfil}
                nom={item.nom}
                prenom={item.prenom}
                sexe={item.sexe}
                age={item.dateDeNaissance}
            />
        ))
    }


  useEffect(()=>{
    dispatch(matchSliceAsync.getMatchs(loginId))
  }, []) 

    return (
        <main>
            <h4 className="text-center pt-2 pb-5"><b>Mes Matchs</b></h4>
            {show()}
        </main>
    )
}

export default Matchs