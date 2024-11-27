import { Navigate, Outlet } from "react-router-dom";

const UnProtectedLayout = () => {

    const Authenticated = true;

    return !Authenticated ? <Outlet/> : <Navigate to={'/'}/>
}

export default UnProtectedLayout