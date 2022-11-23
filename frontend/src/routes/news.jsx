import Header from "../components/header";
import ImageSlider from "../components/imageSlider/imageSlider";
import React, { Suspense } from "react";
import Footer from "../components/footer";
import NewsList from "../components/newsList/newsList";
import "./news.css";

export default function News() {
  return (
    <>
      <Header />

      {/*       <div className="">
        <div className="">
          <Suspense fallback={<h2>loading...</h2>}>
            <ImageSlider />
          </Suspense>
        </div>
        <div className="margin-top">
          <Suspense>
            <NewsList />
          </Suspense>
        </div>
      </div>
      <Footer /> */}
    </>
  );
}
