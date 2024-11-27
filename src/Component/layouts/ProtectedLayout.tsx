import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {

    const Authenticated = true;
    
    return Authenticated ? <Outlet/> : <Navigate to={'/signin'}/>
}

export default ProtectedLayout