import { Api } from "../../service/Api"
import { inboxSliceAction } from "./inboxSlice"

export const inboxSliceAsync = {

    getInboxMessage(myId){
        return async (dispatch, getState)=>{
            dispatch(inboxSliceAction.isLoading(true))

            const response = await Api.getInbox(myId)

            if(response.status === 200){
                const data = await response.json()
                dispatch(inboxSliceAction.updateMessages(data))
            }
        }
    }
}