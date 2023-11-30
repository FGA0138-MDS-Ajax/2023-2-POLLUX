import { useUserContext } from "../context/UserContext";
export const IsAuthenticated = () => {
    const {userId} = useUserContext();
    if (userId === 0) {
        return false;
    }
    return true;
} 