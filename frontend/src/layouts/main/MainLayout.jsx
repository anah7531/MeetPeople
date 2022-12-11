import { Outlet } from "react-router-dom";
import { MainNavBar } from "./MainNavBar";

export function MainLayout(){

    return(
        <div className="container p-2">
            <MainNavBar />
            <div className="mt-4">
                <Outlet />
            </div>
        </div>
    )
}