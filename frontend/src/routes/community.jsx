import Header from "../components/header";
import Friend from "../components/friend";

export default function Community() {
  const textColor = {
    color: "#D3D3D3",
  };

  const textColor2 = {
    color: "#9ab",
  };
  return (
    <>
      {/* Haveria uma condição. Caso o usuário esteja logado renderiza Header. Caso não, renderiza GlobalHeader */}
      <Header />
      <h1 className="mb-5">a</h1>
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
