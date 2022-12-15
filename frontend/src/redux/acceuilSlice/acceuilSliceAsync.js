import { Api } from "../../service/Api"
import { acceuilSliceAction } from "./acceuilSlice"


export const acceuilSliceAsync = {

    getMatchs(id){
        return async(dispatch, getState)=>{

            dispatch(acceuilSliceAction.isLoading(true))

            const response = await Api.getAvailableProfile(id)

            if(response.status === 200){
                const data = await response.json()
                dispatch(acceuilSliceAction.updateProfiles(data))
            }

        }
    }
}