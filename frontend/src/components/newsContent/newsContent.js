import { useParams } from "react-router-dom";
import useGetNewsById from "../../recoil/hooks/newsHooks/useGetNewsById";
import { timeToDate } from "../../shared/dateTools";
import "./newsContent.css"

const NewsContent = () => {

    const {id} = useParams();
    const getNews = useGetNewsById(id);
    const textParts = getNews.contents.blocks;
    const images = getNews.contents.entityMap
    const date = new Date(getNews.time * 1000);
    const formatedDate = timeToDate(date, "BR")
    const text = [];
    let image = null;
    textParts.forEach((part, index) => {

        text.push(
            <p key={index}>{part.text}</p>
        )

        images[index] != undefined? text.push(
            <div className="image-area">
                <img src={images[index].data.src} style={{width:"100%"}}/>
            </div>
        ) : image = null;


    })
    console.log(images[0].data.src)
    
    

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
                
            </div>
        </>
    )
}

export default NewsContent;