import Header from "../components/header";
import image from "../images/userpicture.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <Header />

      <div className="my-5 d-flex flex-column-reverse flex-md-row col-8 col-md-8 mx-auto justify-content-around align-items-center gap-3">
        <div className="bg-info col-12 col-md-6 my-4">
          <p className="text-secondary text-center my-1 p-1">
            <span className="text-dark">Activities</span> (These activities are
            automatically updated)
          </p>
          <div className="d-flex flex-column flex-md-row bg-secondary justify-content-around align-items-center">
            <div className="d-flex flex-column align-items-center my-4">
              <i class="fa-solid fa-face-smile fa-xl mb-3 d-block text-primary"></i>
              <h4 className="">Friends</h4>
              <p>0 connections</p>
            </div>
            <div className="d-flex flex-column align-items-center my-4">
              <i class="fa-solid fa-book fa-xl mb-3 d-block text-danger"></i>
              <h4 className="">Reviews</h4>
              <p>0 games</p>
            </div>
            <div className="d-flex flex-column align-items-center my-4">
              <i class="fa-solid fa-star fa-xl mb-3 d-block text-warning"></i>
              <h4 className="">Rated</h4>
              <p>0 games</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center gap-3">
          <img className="rounded-circle" src={image} />
          <div className="d-flex flex-column">
            <h1 className="text-light">Username</h1>
            <Link className="position-relative inline-block" to="settings">
              <button type="button" class="btn btn-secondary my-2">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-11 mx-auto">
        <div className="col-11 mx-auto border-bottom border-secondary">
          <p className="text-secondary fs-6">BIO</p>
        </div>
        <p className="text-secondary col-11 mx-auto my-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit,
          harum fuga tempore odit quod temporibus voluptas assumenda,
          perferendis dicta vitae sint, iste quibusdam totam vero rerum
          necessitatibus ab soluta?
        </p>
      </div>
    </>
  );
}
