import Header from "../components/header";
import Bio from "../components/bio";
import { Link } from "react-router-dom";
import { GiThreeFriends } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import Overview from "./overview";
import { useRecoilValue } from "recoil";
import { userAtom } from "../recoil/atoms/userState";
import { Suspense } from "react";
import useGetNewsById from "../recoil/hooks/newsHooks/useGetNewsById";
import "./profile.css"
export default function Profile() {
  const loggedUser = useRecoilValue(userAtom)

  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>

      <div className="my-5 d-flex flex-column flex-md-row col-8 col-md-10 mx-auto justify-content-around align-items-center gap-3">
        <div className="d-flex flex-column flex-md-row gap-3 align-items-center order-1">
          <img
            alt="profile"
            className="avatar-dimension"
            src={loggedUser.pictureUrl}
          />
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <h1 className="text-light">{loggedUser.username}</h1>
            <Link className="position-relative inline-block" to="settings">
              <button type="button" class=" primary-style-button my-2">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-secondary col-12 col-md-4 my-4 order-2">
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
      <Overview origin={"profile"} />
    </>
  );
}
