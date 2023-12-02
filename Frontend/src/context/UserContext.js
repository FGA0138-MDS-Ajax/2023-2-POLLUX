import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = React.createContext({userName: 'Convidado',
                                        userId: 0,
                                        userCurso: '',
                                        userAvatar: '/public/avatars-users/default-avatar.png',
                                        setUser: () => {}});

function UserProvider({children}) {
    const [user, setUser] = useLocalStorage('user', {userName: 'Convidado', userId: 0, userCurso: '', userAvatar: '/public/avatars-users/default-avatar.png'});
    
    return(
        <UserContext.Provider value={{...user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    const context = React.useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
}

export default UserProvider;