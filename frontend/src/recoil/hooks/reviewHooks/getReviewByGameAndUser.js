import { useRecoilState } from "recoil";
import { asyncGetReviewByGameIdAndUserId } from "../../selectors/reviewSelector";

const useGetreviewByGameAndUser = (queryParameters) => {
    return useRecoilState(asyncGetReviewByGameIdAndUserId(queryParameters))
};

export default useGetreviewByGameAndUser;