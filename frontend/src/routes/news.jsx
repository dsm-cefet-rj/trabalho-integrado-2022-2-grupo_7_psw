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
      {/* Haveria uma condição. Caso o usuário esteja logado renderiza Header. Caso não, renderiza GlobalHeader */}
      <Header />
      <div style={{ marginTop: "50px" }}>
        <div></div>
        <div className="flex-container column">
          <Link
            className="button"
            onClick={localStorage.clear()}
            style={{
              color: "aliceblue",
              textAlign: "center",
              marginBottom: "10px",
            }}
            to="/news-editor/create"
          >
            New article
          </Link>
          <Suspense fallback={<h2>loading...</h2>}>
            <ImageSlider />
          </Suspense>
        </div>
        <div className="margin-top">
          <Suspense fallback={<h2>loading...</h2>}>
            <NewsList />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}
