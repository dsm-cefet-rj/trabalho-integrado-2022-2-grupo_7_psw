import Header from "../components/header";

export default function newList() {
  return (
    <>
      <Header />

      <div className="d-flex flex-column col-9 mx-auto my-5">
        <h3 className="bg-secondary p-2 m-0">Create new List</h3>
        <form className="bg-dark p-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name your List
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Be creative naming it.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <div class="input-group">
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>

          <div class="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option selected>Escolha um jogo...</option>
              <option value="1">The Last Of Us</option>
              <option value="2">Resident Evil 4</option>
              <option value="3">Pou</option>
            </select>
            <button
              class="btn btn-outline-secondary btn-primary btn-outline-light"
              type="button"
            >
              Adicionar
            </button>
          </div>
          <button type="submit" class="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
