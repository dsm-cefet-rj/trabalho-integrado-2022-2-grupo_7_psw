import "./news.css";
import ImageSlider from "./imageSlider"
import image from "./images/steamDeck.jpg"

function news() {
  const slides = [
    {
      url: 'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg',
      title: " Switch",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      url: 'https://www.arkade.com.br/wp-content/uploads/2021/11/ps5-the-squad-foto-2-1050x585.jpg',
      title: "Lorem ipsum dolor sit amet PlayStation 5",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },    
    {
      url: 'https://compass-ssl.xbox.com/assets/08/7e/087efc15-7859-4641-afbc-bfddf11ba960.jpg?n=X1S-2020_Page-Hero-0_Upgrade_767x431.jpg',
      title: "Xbox",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      url: 'https://cdn.ome.lt/XNbm4TfiraY_at5EGWXVbUBMTGI=/770x0/smart/uploads/conteudo/fotos/Steam_Deck_frente_2_004T9Je.png',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Steam Deck",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    },
    
  ]

  const containerStyles = {
    width: "1000px",    
    height: "500px",
    margin: "0 outo",
  }

  return (
      
        
        <div className="container containerStyles" id="news">
          <ImageSlider slides={slides}/>
        </div>
      
   
  );
}

export default news;