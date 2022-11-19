import { useRecoilValue } from "recoil"
import { slideInfoState } from "../atoms/slideState"

const useSubtitleState = () => {
    return useRecoilValue(slideInfoState)
}

export default useSubtitleState;