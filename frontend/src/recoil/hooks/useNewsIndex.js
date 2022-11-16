import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil"
import { slideCounterState } from "../../recoil/atoms/slideState";

const useNewsIndex = () => {
    const [currentIndex,setCurrentIndex] = useRecoilState(slideCounterState);
   
    const handleCurrentIndex = () => setCurrentIndex();        
    
    return [currentIndex, handleCurrentIndex];
}

export default useNewsIndex;