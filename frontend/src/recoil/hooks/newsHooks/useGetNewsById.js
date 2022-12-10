import { useRecoilValue } from "recoil"
import { getNewsById } from "../../selectors/newsSelector";

const useGetNewsById = (id) => {  
    
    return useRecoilValue(getNewsById(id));
}

export default useGetNewsById;