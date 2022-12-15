import { Api } from "../../service/Api"
import { conversationSliceActions } from "./conversationSlice"

export const conversationSliceAsync = {

    getConversation(loginId, userId){
        return async(dispatch, getState)=>{

            dispatch(conversationSliceActions.isLoading(true))

            const response = await Api.getConversation(loginId, userId)

            if(response.status === 200){
                const data = await response.json()
                dispatch(conversationSliceActions.updateData(data))

            } else{
                dispatch(conversationSliceActions.isLoading(false))
            }

        }
    }, 

    sendMessage(message, resetText){
        return async(dispatch, getState)=>{

            dispatch(conversationSliceActions.isLoading(true))

            const response = await Api.sendMessage(message)

            if(response.status === 200){
                const data = await response.json()
                dispatch(conversationSliceActions.addMessage(data))
                resetText()
            } else{
                dispatch(conversationSliceActions.isLoading(false))
            }

        }
    }

    
}