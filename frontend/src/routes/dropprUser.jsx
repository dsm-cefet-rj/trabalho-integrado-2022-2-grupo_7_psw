import Header from "../components/header";
import Bio from "../components/bio";
import image from "../images/userpicture.png";
import { GiThreeFriends } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import Overview from "./overviewUser";
import { Suspense, useEffect } from "react";
import { useState } from "react";

export default function DropprUser() {
  const [follow, setFolow] = useState(false);
  const [change, setChange] = useState(true);
  const [buttonClass, setButtonClass] = useState("btn btn-primary");
  const [buttonMessage, setButtonMessage] = useState("Follow");

  useEffect(() => {
    if (follow) {
      console.log("entrei");
      setChange(false);
      setButtonClass("btn btn-secondary");
      setButtonMessage("Followed");
    }

    if (!follow) {
      setButtonClass("btn btn-primary");
      setButtonMessage("Follow");
      setChange(true);
    }
  }, [follow]);

  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div className="my-5 d-flex flex-column flex-md-row col-8 col-md-8 mx-auto justify-content-around align-items-center gap-3">
        <div className="d-flex flex-column align-items-center align-items-md-center order-1">
          <img className="rounded-circle" size={90} src={image} alt="" />
          <h2 className="text-light">Username</h2>
          <button
            type="button"
            className={buttonClass}
            onClick={() => setFolow(change)}
          >
            {buttonMessage}
          </button>
        </div>
        <div className="bg-secondary col-12 col-md-6 my-4  order-2">
          <p className="text-white-50 text-center my-1 p-1">
            <span className="text-light">Activities</span> (These activities are
            automatically updated)
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center mytable">
            <div className="d-flex flex-column align-items-center my-4">
              <GiThreeFriends className="mb-3" size={40} color="deepskyblue" />
              <h4 className="">Friends</h4>
              <p>0 connections</p>
            </div>
            <div className="d-flex flex-column align-items-center my-4">
              <GiNotebook size={40} color="red" className="mb-3" />
              <h4 className="">Reviews</h4>
              <p>0 games</p>
            </div>
            <div className="d-flex flex-column align-items-center my-4">
              <AiFillStar size={40} color="yellow" className="mb-3" />
              <h4 className="">Rated</h4>
              <p>0 games</p>
            </div>
          </div>
        </div>
      </div>
      <Bio />
      <Overview />
    </>
  );
}
