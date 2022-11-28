import Header from "../components/header";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";

export default function NewList() {
  const [myList, setList] = useRecoilState(gameListState);
  const createList = (e) => {
    e.preventDefault();
    setList((oldList) => [
      ...myList,
      {
        listName: "New list name",
        games: [2],
      },
    ]);
  };

  const [inputField, setInputField] = useState("");
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/query/${inputField}/0`).then((res) =>
      res.json().then((data) => {
        if (data.data.length > 0) {
          setGamesList(data.data);
        }
      })
    );
  }, [inputField]);

  console.log(gamesList);

  return (
    <>
      <Header />

      <div className="d-flex flex-column col-9 mx-auto my-5">
        <h3 className="bg-secondary p-2 m-0">Create new List</h3>
        <form className="bg-dark p-5">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name your List
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Be creative naming it.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              onChange={(e) => {
                setInputField(e.target.value);
              }}
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              {gamesList.map((e) => {
                return <option value={e.name} />;
              })}
            </datalist>
            <button
              class="btn btn-outline-secondary btn-primary btn-outline-light"
              type="button"
            >
              Adicionar
            </button>
          </div>
          <button
            onClick={createList}
            type="submit"
            className="btn btn-primary"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}
