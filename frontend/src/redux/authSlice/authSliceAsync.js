import swal from "sweetalert"
import { Api } from "../../service/Api"
import { authSliceAction } from "./authSlice"

export const authSliceAsync = {

    login(data, onError){
        return async (dispatch, getState)=>{
            const response = await Api.login(data)


            if(response.status === 200){
                const data = await response.json()
                dispatch(authSliceAction.login(data))

            } else{
               onError()
            }

        }
    }
}