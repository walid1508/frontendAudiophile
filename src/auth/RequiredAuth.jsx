import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const RequiredAuth = ({allowedRoles}) => {
    const { user } = useContext(UserContext);

    const hasRole = user && user.roles && Object.values(user.roles).some(role => allowedRoles.includes(role));

    return hasRole ? <Outlet /> : <Navigate to="/lost-page" />;
}

export default RequiredAuth;
