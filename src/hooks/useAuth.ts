import { useContext } from "react";
import { AuthContext } from "../providers/SessionProvider";
export default function useAuth(): UseAuth {
    const info = useContext(AuthContext)
    if (!info) return {token : 'YOU DONT HAVE ACCES TO THIS INFO', login:()=>{}}
    const {token}= info
    const login = (jwt: string) => {
        localStorage.setItem('jwt',jwt)
    }
    const signOut = () => {
        localStorage.removeItem('jwt')
    }
    return {token,login,signOut}
}

type UseAuth = {
    token: string | null;
    login:(jwt: string) => void;
    signOut?: () => void;
}