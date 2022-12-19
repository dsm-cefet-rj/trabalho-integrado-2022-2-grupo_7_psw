
const useDeleteNews = (newsId, currentAuth) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + currentAuth
        }
    }

    fetch(`http://localhost:3001/news/${newsId}`, requestOptions).then(response => {

        if (response.status == 401) {
            localStorage.removeItem("current_auth")
            localStorage.removeItem("current_user")
            window.location = 'http://localhost:3000/news'

        }
        else {
            alert('Article deleted successfuly');
            window.location = 'http://localhost:3000/news'
        }
    })
}

export default useDeleteNews;