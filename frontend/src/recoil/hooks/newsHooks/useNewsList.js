import { useRecoilValue } from "recoil"
import { asyncNewsList } from "../../selectors/selector";

const useNewsList = () =>{
    return useRecoilValue(asyncNewsList)
}

export default useNewsList;
