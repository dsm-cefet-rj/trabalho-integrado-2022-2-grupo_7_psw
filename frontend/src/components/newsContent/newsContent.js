import { useParams } from "react-router-dom";
import useGetNewsById from "../../recoil/hooks/useGetNewsById";
import "./newsContent.css"

const NewsContent = () => {

    const {id} = useParams();
    const getNews = useGetNewsById(id);
    const textParts = getNews.contents.parts;
    
    const results = [];
    textParts.forEach((part, index) => {
        //todo: criar logica para verificar imagens ou links externos para youtube.
        results.push(
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
                <div className="content-container">{results}</div>
            </div>
        </>
    )
}

export default NewsContent;