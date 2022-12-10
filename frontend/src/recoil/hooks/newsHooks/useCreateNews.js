export const useCreateNews = (newsTitle, newsSubtitle, newsContent, newsUrl) => {
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
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
        console.log(response);
        localStorage.clear();
    })
}

export default useCreateNews;
