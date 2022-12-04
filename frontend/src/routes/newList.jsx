import Header from "../components/header";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import Select from "react-select";
import SmallGame from "../components/smallGameImage";
import { gameCollectionState } from "../recoil/atoms/gameCollection";

export default function NewList() {
  const [myList, setList] = useRecoilState(gameListState);
  const [collection, setCollection] = useRecoilState(gameCollectionState);
  const createList = (e) => {
    e.preventDefault();
    setList((oldList) => [
      ...myList,
      {
        listName: "New list name",
        games: collection,
      },
    ]);
  };

  const addToCollection = (e) => {
    e.preventDefault();

    if (selectedOption && !collection.includes(selectedOption.value[1])) {
      setCollection((oldCollection) => [
        ...collection,
        selectedOption.value[1],
      ]);
    }
  };

  console.log(myList);

  const [inputField, setInputField] = useState("");
  const [gamesList, setGamesList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/query/${inputField}/0`).then((res) =>
      res.json().then((data) => {
        if (data.data.length > 0) {
          setGamesList(data.data);
        }
      })
    );
  }, [inputField]);

  const options = gamesList.map((e) => {
    return {
      value: [e.name, e.id],
      label: (
        <div className="d-flex justify-content-between">
          <p className="text-dark">{e.name}</p>
          <SmallGame background_image={e.cover} />
        </div>
      ),
    };
  });
  console.log(selectedOption);
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
            <Select
              className="col-10"
              defaultValue={selectedOption}
              options={options}
              onChange={setSelectedOption}
              onInputChange={setInputField}
              inputValue={inputField}
            />

            <button
              onClick={addToCollection}
              class="btn btn-outline-secondary btn-primary btn-outline-light"
              type="button"
            >
              Adicionar
            </button>
          </div>
          {collection.map((e) => {
            return <p>{e}</p>;
          })}
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
