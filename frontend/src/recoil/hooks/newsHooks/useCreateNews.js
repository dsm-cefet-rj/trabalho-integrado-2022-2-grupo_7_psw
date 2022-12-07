const useCreateNews = (newsTitle, newsSubtitle, newsContent, newsUrl) => {
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url: newsUrl,
                            title: newsTitle,
                            mode: 'cors',
                            subtitle: newsSubtitle,
                            contents: JSON.stringify(newsContent),
                            user: '63878b2808e0595a559716dc', //precisa ser implementado user pra isso ser concluido.
                            time: new Date().getTime().toString()
                            })
    }
    
    fetch('http://localhost:3001/news', requestOptions).then(response => {
        console.log(response);
        localStorage.clear();
    })        
    
  
}

export default useCreateNews;