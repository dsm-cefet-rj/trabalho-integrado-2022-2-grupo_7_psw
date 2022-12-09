import { useRecoilState } from "recoil";
import { userEmailState, userLevelState, userNameState, userPassword2State, userPasswordState } from "../../atoms/userState";

export const useSetUserName = () => {
    const [, setCurrentName] = useRecoilState(userNameState);    
    return (nameEvent) =>{
        return setCurrentName( () => {
            return nameEvent;
        })
    }    
}

export const useSetUserEmail = () => {
    const [, setCurrentEmail] = useRecoilState(userEmailState);    
    return (emailEvent) =>{
        return setCurrentEmail( () => {
            return emailEvent;
        })
    }    
}

export const useSetUserPassword = () => {
    const [, setCurrentPassword] = useRecoilState(userPasswordState);    
    return (passwordEvent) =>{
        return setCurrentPassword( () => {
            return passwordEvent;
        })
    }    
}

export const useSetUserPassword2 = () => {
    const [, setCurrentPassword2] = useRecoilState(userPassword2State);    
    return (password2Event) =>{
        return setCurrentPassword2( () => {
            return password2Event;
        })
    }    
}

export const useSetUserLevel = () => {
    const [, setCurrentLevel] = useRecoilState(userLevelState);    
    return (levelEvent) =>{
        return setCurrentLevel( () => {
            return levelEvent;
        })
    }    
}
