import { useRecoilValue } from "recoil"
import { newsTitleState } from "../../atoms/newsState"

const useTitleState = () => {
    return useRecoilValue(newsTitleState)
}

export default useTitleState;