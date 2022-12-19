import Header from "../components/header";
import ImageSlider from "../components/imageSlider/imageSlider";
import React, { Suspense } from "react";
import Footer from "../components/footer";
import NewsList from "../components/newsList/newsList";
import "./news.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../recoil/atoms/userState";

export default function News() {
  const loggedUser = useRecoilValue(userAtom)
  let authorized = false;
  if(loggedUser.level <= 2){
    authorized = true;
  }

  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }}>

        <div className="flex-container column flex-end">
         {authorized ? (
          <div className="item2-container">
            <Link
              className="button"
              // onClick={localStorage.clear()}
              style={{
                color: "aliceblue",
                textAlign: "center",
                marginBottom: "10px",
              
              }}
              to="/news-editor/create"
            >
              New article
            </Link>
          </div>
          ) : ( 
          <div></div>
          )
         }
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
