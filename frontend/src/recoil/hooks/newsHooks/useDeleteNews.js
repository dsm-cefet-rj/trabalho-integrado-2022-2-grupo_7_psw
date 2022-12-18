const useDeleteNews = (newsId, currentAuth) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
                'Authorization' : "Bearer " + currentAuth}    
    }

    fetch(`http://localhost:3001/news/${newsId}`, requestOptions).then(() => {
        alert('Article deleted successfuly');
        window.location = 'http://localhost:3000/news'
    })
}

export default useDeleteNews;