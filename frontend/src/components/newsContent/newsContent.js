import { Link, useParams } from "react-router-dom";
import useDeleteNews from "../../recoil/hooks/newsHooks/useDeleteNews";
import useGetNewsById from "../../recoil/hooks/newsHooks/useGetNewsById";
import { timeToDate } from "../../shared/dateTools";
import "./newsContent.css"

const NewsContent = () => {

    const {id} = useParams();
    const getNews = useGetNewsById(id);
    const toObject = JSON.parse(getNews.contents);
    const textParts = toObject.blocks    
    const date = new Date(getNews.time);
    const formatedDate = timeToDate(date, "BR", true);
    const deleteNews = useDeleteNews;

    const text = [];
    let images = getNews.contents.entityMap;
    let image = null;

    textParts.forEach((part, index) => {
        text.push(
            <p key={index}>{part.text}</p>
        )
        images != undefined? images[index] != undefined? text.push(
            <div className="image-area">
                <img src={images[index].data.src} style={{width:"100%"}}/>
            </div>
        ) : image = null : images = undefined;
    })
   
    function deleteHandler() {
        deleteNews(id)
    }

    return (
        <>
            <div className="flex column main-container">
                <div>
                    <h2>{getNews.title}</h2>
                    <h4>{getNews.subtitle}</h4>
                </div>
                <div className="content-container">{text}</div>
                <div className="flex footer-container">
                    <div>By {getNews.user.name}</div>
                    <div>{formatedDate}</div>
                </div>
                <div className="flex space-between">
                    <Link className="edit-button" to={`/news-editor/update/${id}`}> Edit </Link>
                    <div className="delete-button" onClick={deleteHandler}>Delete</div>                    
                </div>
                
                
            </div>
        </>
    )
}

export default NewsContent;