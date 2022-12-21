import { Api } from "../../service/Api"
import { profileSliceAction } from "./profileSlice"

export const profileSliceAsync = {

    getProfile : (myId, id) => async (dispatch, getState)=>{
        
        dispatch(profileSliceAction.isLoading(true))
        const response = await Api.getProfile(myId, id)

        if(response.status === 200){
            const data = await response.json()
            dispatch(profileSliceAction.updateProfile(data))

        } else{
            dispatch(profileSliceAction.isLoading(false))
        }
    }, 

    sendPlainte : (plainte, onSuccess) => async (dispatch, getState)=>{
        const response = await Api.sendPlainte(plainte)

        if(response.status === 200)
            onSuccess()

    },

    sendEvaluation : (evaluation, onSuccess)=> async(dispatch, getState)=>{
        const response = await Api.sendEvaluation(evaluation)

        if(response.status === 200)
            onSuccess()
    }
}