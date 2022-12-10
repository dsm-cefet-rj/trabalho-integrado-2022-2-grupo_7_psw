import { useRecoilValue } from "recoil"
import { asyncNewsList } from "../../selectors/newsSelector";

const useNewsList = () =>{
    return useRecoilValue(asyncNewsList)
}

export default useNewsList;
