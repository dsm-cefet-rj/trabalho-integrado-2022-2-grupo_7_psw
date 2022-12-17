import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/userState";

export const useCreateNews = (newsTitle, newsSubtitle, newsContent, newsUrl, currentAuth) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                'Authorization' : "Bearer " + currentAuth},
        // Authorization: 'Bearer '+ currentAuth,
        body: JSON.stringify({url: newsUrl,
                            title: newsTitle,
                            // mode: 'cors',
                            subtitle: newsSubtitle,
                            contents: JSON.stringify(newsContent),
                            user: '6393c0b2a83fb3639802a5e0', //precisa ser implementado user pra isso ser concluido.
                            time: new Date().getTime().toString()
                            })
    }
    
    fetch('http://localhost:3001/news', requestOptions).then(response => {
        console.log(requestOptions);
        // localStorage.removeItem();
    })
}

export default useCreateNews;
