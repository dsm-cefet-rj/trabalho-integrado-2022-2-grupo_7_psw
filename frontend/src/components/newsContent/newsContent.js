import { Link, useParams } from "react-router-dom";
import useGetNewsById from "../../recoil/hooks/newsHooks/useGetNewsById";
import { timeToDate } from "../../shared/dateTools";
import "./newsContent.css"

const NewsContent = () => {

    const {id} = useParams();
    const getNews = useGetNewsById(id);
    const toObject = JSON.parse(getNews.contents);
    const textParts = toObject.blocks    
    const date = new Date(getNews.time * 1000);
    const formatedDate = timeToDate(date, "BR");

    const text = [];
    let images = getNews.contents.entityMap;
    let image = null;

    textParts.forEach((part, index) => {
        text.push(
            <p key={index}>{part.text}</p>
        )
        // testando 'nova' sintaxe ao limite aqui. Acredito me arrepender disso logo. (eh basicamente um if dentro de um if)
        images != undefined? images[index] != undefined? text.push(
            <div className="image-area">
                <img src={images[index].data.src} style={{width:"100%"}}/>
            </div>
        ) : image = null : images = undefined;
    })
    
    

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
                <Link className="edit-button" to={`/news-editor/update/${id}`}>
                    <div > Edit </div>
                </Link>
                
            </div>
        </>
    )
}

export default NewsContent;