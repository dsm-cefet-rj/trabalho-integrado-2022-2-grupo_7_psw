import { Link } from "react-router-dom";
import useNewsList from "../../recoil/hooks/newsHooks/useNewsList";
import "./newsList.css";



const NewsList = () => {

  const newsList = useNewsList();

  return (
   
    
        newsList.map((e) => {
          return (
            <>
            <Link key={e.id} className="flex-container item-card row justify-center" to={`/news-page/${e.id}`}>
              
                <img alt={e.title} src={e.url} className="img-container"></img>
                <div className="flex-container column content-card">
                  <h4>{e.title}</h4>
                  <p className="self-end">{e.subtitle}</p>
                 </div>
                                        
            </Link>
            </>
          );
        })
     
   
  )
};
export default NewsList;
