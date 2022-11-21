import useNewsList from "../../recoil/hooks/useNewsList";
import ImageSlider from "../imageSlider/imageSlider";
import "./newsList.css";



const NewsList = () => {

  const newsList = useNewsList();

  return (
   
    
        newsList.map((e) => {
          return (
            <>
            <div className="flex-container item-card row justify-center">
              <img src={e.url} className="img-container"></img>
              <div className="flex-container column content-card">
                <h4>{e.title}</h4>
                <div className="self-end">{e.subtitle}</div>
              </div>
            </div>
            </>
          );
        })
     
   
  )
};
export default NewsList;
