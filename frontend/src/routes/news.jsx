import Header from "../components/header";
import ImageSlider from "../components/imageSlider/imageSlider";
import React, { Suspense } from "react";
import Footer from "../components/footer";
import NewsList from "../components/newsList/newsList";
import "./news.css";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <>
      <Header />

      <div style={{marginTop: "50px"}}>
        <div >
                
        </div>
        <div className="flex-container column">
          <Link className="button" style={{color: "aliceblue", textAlign: "center", marginBottom: "10px"}} to="/news-editor/create">           
              Create new article           
          </Link>   
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
      <Footer />
    </>
  );
}
