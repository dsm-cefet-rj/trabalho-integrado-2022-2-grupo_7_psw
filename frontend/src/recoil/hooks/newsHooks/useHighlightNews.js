import { useRecoilValue } from "recoil"
import { highLightsNews } from "../../selectors/selector"

const useHighlightNews = () => {
    return useRecoilValue(highLightsNews);
}

export default useHighlightNews;