import { useRecoilValue } from "recoil"
import { newsContentState, newsSubtitleState, newsTitleState, newsUrlState } from "../../atoms/newsState"

export const useGetTitle = () => {
    return useRecoilValue(newsTitleState);
}

export const useGetSubtitle = () => {
    return useRecoilValue(newsSubtitleState);
}

export const useGetContent = () => {
    return useRecoilValue(newsContentState);
}

export const useGetUrl = () => {
    return useRecoilValue(newsUrlState);
}