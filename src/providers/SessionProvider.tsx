import { createContext } from "react"
export const AuthContext = createContext<ProviderReturn | null>(null);
export default function AuthProvider({ children }: AuthProvider) {
    return (
        <AuthContext.Provider value={{ token: localStorage.getItem('jwt') }}>
            {children}
        </AuthContext.Provider >
    )
}

type AuthProvider = {
    children: React.ReactNode
}

type ProviderReturn = { token: string | null }

