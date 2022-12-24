import { Link } from "react-router-dom";
import React, {  useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import logo from "../images/Logo_Droppr.svg";
import nome_droppr from "../images/Nome_Droppr.png";
import "./header.css";
import Tilt from "react-parallax-tilt";
import {
  userAtom,
  userPictureState,
} from "../recoil/atoms/userState";
import { useGetUserById } from "../recoil/hooks/userHooks/useCRUDUser";

function Header() {
  const [search, setSearch] = useState("");

  const myProfile = useRecoilValue(userAtom);
  const setProfile = useSetRecoilState(userAtom);

  const [currentPicture, setCurrentPicture] = useRecoilState(userPictureState);

  let id = undefined;

  if (myProfile) {
    id = myProfile._id;
  }

  var user = useGetUserById(id);

  useEffect(() => {
    if (user) {
      setProfile(user);
      setCurrentPicture(user.pictureUrl);
    }
  }, [user, myProfile]);

  const imgSize = {
    width: 50,
    height: 50,
  };

  const HandleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "http://localhost:3000/";
    }, 200);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="mx-3 mx-md-5">
          <div className="tilt-box-wrap">
            <Tilt>
              <Link className="navbar-brand" to="/">
                <img src={logo} className="logo" alt="Logo" />
                <img src={nome_droppr} className="nome_droppr" alt="Droppr" />
              </Link>
            </Tilt>
          </div>

          {/* <i
            style={{
              color: "#fff",
            }}
            className="fa-solid fa-lg fa-droplet drop"
          ></i> */}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {myProfile ? (
              <>
                <li className="nav-item dropdown my-md-0 my-4 mx-0 mx-md-3">
                  <div data-bs-toggle="dropdown" className="d-flex gap-2">
                    <img
                      style={imgSize}
                      alt="profile"
                      className="rounded-circle"
                      src={currentPicture}
                    />
                    <Link className="nav-link dropdown-toggle">
                      {myProfile.username}
                    </Link>
                  </div>

                  <ul
                    className="dropdown-menu bg-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="text-center nav-link fs-6" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="text-center nav-link fs-6" to="/reviews">
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link className="text-center nav-link fs-6" to="/lists">
                        Lists
                      </Link>
                    </li>
                    { myProfile.level == 1? (
                      <Link className="text-center nav-link fs-6" to="/register">                        
                        Add special user
                      </Link>
                      
                      ) : (
                        null
                      )
                    

                    }
                   
                   
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="text-center nav-link fs-6"
                        onClick={HandleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-6" to="/community">
                    COMMUNITY
                  </Link>
                </li>

                <li>
                  <Link className="nav-link fs-6" to="/news">
                    NEWS
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="nav-link fs-6" to="/news">
                    NEWS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-6" to="/community">
                    COMMUNITY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-6" to="/signIn">
                    SIGN IN
                  </Link>
                </li>
              </>
            )}
          </ul>

          <form className="d-flex mr-5">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  window.location.href = `/search/${search}`;
                }
              }}
            />

            <Link
              className="position-relative inline-block mx-md-4"
              to={`/search/${search}`}
            >
              <button
                className="light-style-button"
                type="button"
                id="myBtn"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
      <script type="text/javascript" src="vanilla-tilt.js"></script>
    </nav>
  );
}

export default Header;
