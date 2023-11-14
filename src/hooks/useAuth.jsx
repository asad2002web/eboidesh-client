import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";

const useAuth = () => {
    const authInformation = useContext(AuthenticationContext);
    return authInformation;
};

export default useAuth;