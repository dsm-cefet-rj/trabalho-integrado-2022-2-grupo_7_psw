import { useRecoilValue } from "recoil"
import { highLightsNews } from "../../selectors/newsSelector";

const useHighlightNews = () => {
    return useRecoilValue(highLightsNews);
}

export default useHighlightNews;