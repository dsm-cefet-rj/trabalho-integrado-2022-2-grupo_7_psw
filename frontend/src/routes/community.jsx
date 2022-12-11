import Header from "../components/header";
import Friend from "../components/friend";
import { BiGame } from "react-icons/bi";

export default function Community() {
  const textColor = {
    color: "#D3D3D3",
  };

  const textColor2 = {
    color: "#9ab",
  };
  const marginTop = {
    marginTop: 100,
  };
  return (
    <>
      {/* Haveria uma condição. Caso o usuário esteja logado renderiza Header. Caso não, renderiza GlobalHeader */}
      <Header />

      <div
        style={marginTop}
        className="d-flex col-8 col-md-6 mx-auto align-items-center gap-3"
      >
        <BiGame color="yellow" className="d-block" size={60} />
        <p className="text-light">
          d&nbsp;r&nbsp;o&nbsp;p&nbsp;p&nbsp;r&ensp;i&nbsp;s&ensp;f&nbsp;u&nbsp;n
        </p>
      </div>

      <div>
        <h3 style={textColor} className="text-center my-5 mx-3">
          Gamers, pro players and friends. Find popular game related things.
        </h3>
        <div
          style={textColor2}
          className="col-8 mx-auto border-bottom border-secondary my-5"
        >
          POPULAR
        </div>
      </div>
      <div className="d-flex flex-column my-5 container-fluid fundo col-12 col-md-6">
        <div class="container-fluid my-3">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search a user"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </>
  );
}
