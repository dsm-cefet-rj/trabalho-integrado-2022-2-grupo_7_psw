import { Suspense } from "react";
import Header from "./components/header";
import Game from "./components/homeGame";
import ImageSlider from "./components/news/imageSlider";

export default function App() {
  return (
    <>
        <Header />
        <Suspense fallback={<h1 style={{color: "white"}}>Loading...</h1>}>
          <ImageSlider/>
        </Suspense>
        <Game />
        <Game />
        <Game />
    </>
  );
}
