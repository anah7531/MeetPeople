import { Api } from "../../service/Api"
import { profileSliceAction } from "./profileSlice"

export const profileSliceAsync = {

    getProfile : id => async (dispatch, getState)=>{
        
        dispatch(profileSliceAction.isLoading(true))
        const response = await Api.getProfile(id)

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

    }
}