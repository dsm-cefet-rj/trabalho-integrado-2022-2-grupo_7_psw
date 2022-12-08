const useDeleteNews = (newsId) => {
    const requestOptions = {
        method: 'DELETE'    
    }

    fetch(`http://localhost:3001/news/${newsId}`, requestOptions).then(() => {
        alert('Article deleted successfuly');
        window.location = 'http://localhost:3000/news'
    })
}

export default useDeleteNews;