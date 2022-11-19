import { useRecoilValue } from "recoil";
import { hoverStateAtom } from "../atoms/screenLucasState";

const useHoverState = () => {
  return useRecoilValue(hoverStateAtom);
};

export default useHoverState;
