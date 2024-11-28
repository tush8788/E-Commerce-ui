import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {

    const Authenticated = false;
    
    return Authenticated ? <Outlet/> : <Navigate to={'/signin'}/>
}

export default ProtectedLayout