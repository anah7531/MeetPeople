import { UNSAFE_DataStaticRouterContext } from "react-router-dom"
import { Api } from "../../service/Api"
import { acceuilSliceAction } from "./acceuilSlice"


export const acceuilSliceAsync = {

    getMatchs(id, onSuccess = ()=>{}){
        return async(dispatch, getState)=>{
            const response = await Api.getAvailableProfile(id)

            if(response.status === 200){
                const data = await response.json()
                dispatch(acceuilSliceAction.updateProfiles(data))
                onSuccess()
            }

        }
    },

    likeOrDislike(data){
        return async(dispatch, getState)=>{
            dispatch(acceuilSliceAction.isLoading(true))

            const response = await Api.likeOrDislike(data)

            if(response.status === 200){
                dispatch(acceuilSliceAction.removeCurrentProfile())
            }
        }
    },

    getMatchsBySexe(sexe, onSuccess){
        return async(dispatch, getState)=>{
            const {loginId} = getState().authSlice

            dispatch(acceuilSliceAction.isLoading(true))

            const response = await Api.getAvailableProfileBySexe(loginId,sexe)

            if(response.status === 200){
                const data = await response.json()
                dispatch(acceuilSliceAction.updateProfiles(data))
                onSuccess()
            }
        }
    },

    getMatchsByAge(ageMin, ageMax, onSuccess){
        return async(dispatch, getState)=>{
            const {loginId} = getState().authSlice

            dispatch(acceuilSliceAction.isLoading(true))

            const response = await Api.getAvailableProfileByAge(loginId, ageMin, ageMax)

            if(response.status === 200){
                const data = await response.json()
                dispatch(acceuilSliceAction.updateProfiles(data))
                onSuccess()
            }
        }
    }


}