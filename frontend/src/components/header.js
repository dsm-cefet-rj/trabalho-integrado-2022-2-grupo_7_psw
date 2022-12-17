import { Link } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../recoil/atoms/login";
import { useRecoilValue } from "recoil";
import logo from "../images/Logo_Droppr.svg";
import nome_droppr from "../images/Nome_Droppr.png";
import "./header.css";
import "./card_effect.js";

function Header() {
  const [search, setSearch] = useState("");

  // Essa variável representa o valor do estado global de login. Que é true quando um usuário está logado e false caso contrário
  const mylogin = useRecoilValue(login);

  const imgSize = {
    width: 50,
    height: 50,
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="mx-3 mx-md-5">
          <div className="tilt-box-wrap">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="logo" alt="Logo"/>
              <img src={nome_droppr} className="nome_droppr" alt="Droppr"/>
            </Link>
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
            {mylogin ? (
              <>
                <li class="nav-item dropdown my-md-0 my-4 mx-0 mx-md-3">
                  <div data-bs-toggle="dropdown" className="d-flex gap-2">
                    <img
                      style={imgSize}
                      alt="profile"
                      className="rounded-circle"
                      src="https://avatars.dicebear.com/api/female/john.svg?background=%2314181c"
                    />
                    <Link className="nav-link dropdown-toggle">username</Link>
                  </div>

                  <ul
                    class="dropdown-menu bg-dark"
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
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="text-center nav-link fs-6" to="/signIn">
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
                <li className="nav-item">
                  <Link className="nav-link fs-6" to="/register">
                    SIGN UP
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
                className="btn btn-outline-light"
                type="button"
                id="myBtn"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
