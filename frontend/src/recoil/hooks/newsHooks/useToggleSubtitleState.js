import { useRecoilState } from "recoil"
import { slideInfoState } from "../../atoms/slideState"

const useToggleSubtitleState = () => {
    const [currentToggle, setCurrentInfoState] = useRecoilState(slideInfoState);
    return () => {
        return setCurrentInfoState(() => {        
            return !currentToggle;
        })
    }
}

export default useToggleSubtitleState;