import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { AuthNavBar } from "./AuthNavBar";


export function AuthLayout(){
    const {loginId} = useSelector(state => state.authSlice)

    if(loginId)
        return <Navigate to="/" replace={true} />


    
    return(
        <div className="container p-2">
            <AuthNavBar />
            <div className="mt-4">
                <Outlet />
            </div>
        </div>
    )
}