import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { MainNavBar } from "./MainNavBar";

export function MainLayout(){

    const {loginId} = useSelector(state => state.authSlice)

    if(!loginId)
        return <Navigate to="/login" replace={true} />

    return(
        <div className="container p-2">
            <MainNavBar />
            <div className="mt-4">
                <Outlet />
            </div>
        </div>
    )
}