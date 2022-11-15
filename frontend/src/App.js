import Header from "./components/header";
import Game from "./components/homeGame";
import News from "./components/news/newsService";

export default function App() {
  return (
    <>
      
        <Header />
        <News />
        <Game />
        <Game />
        <Game />
    </>
  );
}
