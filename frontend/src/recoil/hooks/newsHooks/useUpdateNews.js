import { useRecoilState } from "recoil"
import { newsContentState, newsSubtitleState, newsTitleState, newsUrlState } from "../../atoms/newsState";

export const useUpdateTitle = () => {
    const [, setCurrentTitle] = useRecoilState(newsTitleState);

    return (newsTitleEvent) => {
        return setCurrentTitle(() => {
            return newsTitleEvent;
        })
    }
}

export const useUpdateSubtitle = () => {
    const [, setCurrentSubtitle] = useRecoilState(newsSubtitleState);

    return (newsSubtitleEvent) => {
        return setCurrentSubtitle(() => {
            return newsSubtitleEvent;
        })
    }
}

export const useUpdateURL = () => {
    const [, setCurrentURL] = useRecoilState(newsUrlState);
    
    return (newsUrlEvent) => {
        return setCurrentURL(()=>{
            return newsUrlEvent;
        })
    }
}

export const useUpdateContent = () => {
    const [, setCurrentContent] = useRecoilState(newsContentState);

    return (newsContentEvet) => {
        return setCurrentContent(() => {
            return newsContentEvet;
        })
    }
}