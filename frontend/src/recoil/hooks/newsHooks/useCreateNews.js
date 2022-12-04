import { useRecoilState } from "recoil"
import { newsContentState, newsSubtitleState, newsTitleState, newsUrlState } from "../../atoms/newsState";

const useCreateNews = () => {

    const {newsTitle} = useRecoilState(newsTitleState);
    const {newsSubtitle} = useRecoilState(newsSubtitleState);
    const {newsContent} = useRecoilState(newsContentState);
    const {newsUrl} = useRecoilState(newsUrlState)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url: newsUrl,
                            title: newsTitle,
                            subtitle: newsSubtitle,
                            contents: newsContent,
                            user: '63878b2808e0595a559716dc', //precisa ser implementado user pra isso ser concluido.
                            time: new Date().getTime().toString()
                            })
    }
    
    fetch('http://localhost:3001/news', requestOptions)        
    
  
}

export default useCreateNews;