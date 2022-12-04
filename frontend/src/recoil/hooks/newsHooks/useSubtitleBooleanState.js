import { useRecoilValue } from "recoil"
import { slideInfoState } from "../../atoms/slideState"

const useSubtitleBooleanState = () => {
    return useRecoilValue(slideInfoState)
}

export default useSubtitleBooleanState;