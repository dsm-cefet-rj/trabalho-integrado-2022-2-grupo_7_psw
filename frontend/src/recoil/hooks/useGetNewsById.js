import { useRecoilValue } from "recoil"
import { getNewsById } from "../selectors/selector";

const useGetNewsById = (id) => {  

    return useRecoilValue(getNewsById(id));
}

export default useGetNewsById;