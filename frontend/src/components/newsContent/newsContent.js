import { useParams } from "react-router-dom";
import useGetNewsById from "../../recoil/hooks/useGetNewsById";
import { timeToDate } from "../../shared/dateTools";
import "./newsContent.css"

const NewsContent = () => {

    const {id} = useParams();
    const getNews = useGetNewsById(id);
    const textParts = getNews.contents.text;
    const date = new Date(getNews.time * 1000);
    const formatedDate = timeToDate(date, "BR")
    const text = [];
    console.log(getNews)
    textParts.forEach((part, index) => {
        text.push(
            <p key={index}>{part}</p> 
        )
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
                
            </div>
        </>
    )
}

export default NewsContent;