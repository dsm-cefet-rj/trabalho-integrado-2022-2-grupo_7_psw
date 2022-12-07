
const useUpdateNews = (newsId, newsTitle, newsSubtitle, newsContent, newsUrl) => {
    
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: newsId,
            url: newsUrl,
            title: newsTitle,
            mode: 'cors',
            subtitle: newsSubtitle,
            contents: JSON.stringify(newsContent),
            user: '63878b2808e0595a559716dc',
            time: new Date().getTime().toString()
        })
    }

    fetch(`http://localhost:3001/news/${newsId}`, requestOptions).then(response => {
        console.log(response);
    })
}

export default useUpdateNews;