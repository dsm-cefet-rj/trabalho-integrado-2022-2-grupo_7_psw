import { useRecoilValue } from "recoil"
import { userEmailState, userLevelState, userNameState, userPassword2State, userPasswordState } from "../../atoms/userState"

export const useGetUserName = () => {
    return useRecoilValue(userNameState)
}

export const useGetUserEmail = () => {
    return useRecoilValue(userEmailState)
}

export const useGetPassword = () => {
    return useRecoilValue(userPasswordState)
}

export const useGetPassword2 = () => {
    return useRecoilValue(userPassword2State)
}

export const useGetUserLevel = () => {
    return useRecoilValue(userLevelState)
}