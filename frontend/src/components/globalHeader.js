import { Link } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="mx-3 mx-md-5">
          <Link className="navbar-brand fs-4" to="/">
            Droppr
          </Link>
          <br />
          <i
            style={{
              color: "#fff",
            }}
            className="fa-solid fa-lg fa-droplet drop"
          ></i>
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
                REGISTER
              </Link>
            </li>
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
