import Header from "./components/header";
import Game from "./components/homeGame";
import News from "./components/news/news";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div class="row">
        <div class="col-6 order-2">
          <News />
        </div>
        <div class="col-6 order-1">
          <Game />
          <Game />
          <Game />
        </div>
      </div>
    </>
  );
}
