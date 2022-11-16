import { useRecoilValue } from "recoil"
import { ratingStateAtom } from "../atoms/screenLucasState";

const useRatingState = () => {
    return useRecoilValue(ratingStateAtom)
}

export default useRatingState;