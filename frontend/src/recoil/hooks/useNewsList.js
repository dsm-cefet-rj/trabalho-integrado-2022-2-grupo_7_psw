import { useRecoilValue } from "recoil"
import { newsListState } from "../atoms/slideState"

const useNewsList = () =>{
    return useRecoilValue(newsListState)
}

export default useNewsList;