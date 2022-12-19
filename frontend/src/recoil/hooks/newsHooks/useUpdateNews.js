
const useUpdateNews = (newsId, newsTitle, newsSubtitle, newsContent, newsUrl, currentAuth) => {
    
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
                'Authorization' : "Bearer " + currentAuth},
        body: JSON.stringify({
            id: newsId,
            url: newsUrl,
            title: newsTitle,
            mode: 'cors',
            subtitle: newsSubtitle,
            contents: JSON.stringify(newsContent),
            time: new Date().getTime().toString()
        })
    }

    fetch(`http://localhost:3001/news/${newsId}`, requestOptions).then(response => {
        console.log(response.status)
        if(response.status == 401){
            localStorage.removeItem("current_auth")
            localStorage.removeItem("current_user")
        }
    })
}

export default useUpdateNews;