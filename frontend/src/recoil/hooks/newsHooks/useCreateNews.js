import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/userState";

export const useCreateNews = (newsTitle, newsSubtitle, newsContent, newsUrl, currentAuth, currentUser) => {
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
                            user: currentUser._id,
                            time: new Date().getTime().toString()
                            })
    }
    
    fetch('http://localhost:3001/news', requestOptions).then(response => {
        if(response.status == 401){
            localStorage.removeItem("current_auth")
            localStorage.removeItem("current_user")
        }
        // localStorage.removeItem();
    })
}

export default useCreateNews;
