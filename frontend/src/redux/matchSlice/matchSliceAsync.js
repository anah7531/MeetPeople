import { Api } from "../../service/Api";
import { matchSliceActions } from "./matchSlice";

export const matchSliceAsync = {

    getMatchs : (id) => async (dispatch, getState)=>{
        dispatch(matchSliceActions.updateLoading(true))

        const response = await Api.getMatchsById(id)

        if(response.status === 200){
            const data = await response.json()
            dispatch(matchSliceActions.updateMatchList(data))
        } else{
            dispatch(matchSliceActions.updateLoading(false))
        }

    }
}
