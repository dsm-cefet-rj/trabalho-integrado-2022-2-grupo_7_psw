import { useRecoilValue } from "recoil"
import { slideCounterState } from "../../atoms/slideState";

const useNewsCurrentIndex = () =>{
    return useRecoilValue(slideCounterState)
}

export default useNewsCurrentIndex;