import Header from "./components/header";
import Game from "./components/homeGame";
import News from "./components/news/news";

import { Link } from "react-router-dom";

import "./App.css";

export default function App() {
  let width = window.innerWidth;

  if (width > 1100) {
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
}
