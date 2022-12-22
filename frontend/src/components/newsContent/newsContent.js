import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom, userAtom } from "../../recoil/atoms/userState";
import useDeleteNews from "../../recoil/hooks/newsHooks/useDeleteNews";
import useGetNewsById from "../../recoil/hooks/newsHooks/useGetNewsById";
import { timeToDate } from "../../shared/dateTools";
import "./newsContent.css"

const NewsContent = () => {
    const loggedUser = useRecoilValue(userAtom)

    const currentAuth = useRecoilValue(authAtom)
    const {id} = useParams();
    const getNews = useGetNewsById(id);
    const contentObject = JSON.parse(getNews.contents);
    const textParts = contentObject.blocks    
    const date = new Date(getNews.time);
    const formatedDate = timeToDate(date, "BR", true);
    const deleteNews = useDeleteNews;

    let authorized = false;
    if(loggedUser){
        if(loggedUser.level == 1 || loggedUser._id == getNews.user._id){
            authorized = true;
        }
    }


    const text = [];
    let images = contentObject.entityMap;
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
        deleteNews(id, currentAuth)
    }

    console.log(getNews)

    return (
        <>
            <div className="flex column main-container">
                <div>
                    <h2>{getNews.title}</h2>
                    <h4>{getNews.subtitle}</h4>
                </div>
                <div className="content-container">{text}</div>
                <div className="flex footer-container">
                    <div>By {getNews.user.username}</div>
                    <div>{formatedDate}</div>
                </div>
                { authorized? (
                    <div className="flex space-between mt-3">
                    <Link className="primary-style-button" style={{padding: '3px 20px'}} to={`/news-editor/update/${id}`}> Edit </Link>
                    <div className="warning-style-button" onClick={deleteHandler}>Delete</div>                    
                </div>
                ): (
                    null
                )

                }
                
                
                
            </div>
        </>
    )
}

export default NewsContent;