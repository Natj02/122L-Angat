import { useLocation } from "react-router";

const RestrictedRoute = ({ children, allowedFrom }) => {
    const location = useLocation();
    
    // Check if user came from the allowed route
    const isAllowed = location.state?.from === allowedFrom;

    return isAllowed ? children : <Navigate to="/NotFound" />;
};

export default RestrictedRoute;


