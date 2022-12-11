import { Outlet } from "react-router";
import { AuthNavBar } from "./AuthNavBar";


export function AuthLayout(){

    return(
        <div className="container p-2">
            <AuthNavBar />
            <div className="mt-4">
                <Outlet />
            </div>
        </div>
    )
}