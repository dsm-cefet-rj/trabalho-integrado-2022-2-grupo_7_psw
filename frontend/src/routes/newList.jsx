import Header from "../components/header";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import Select from "react-select";
import SmallGame from "../components/smallGameImage";
import { gameCollectionState } from "../recoil/atoms/gameCollection";
import GameListElement from "../components/gameListElement";
import { CiCircleRemove } from "react-icons/ci";

export default function NewList() {
  const [myList, setList] = useRecoilState(gameListState);
  const [collection, setCollection] = useRecoilState(gameCollectionState);
  const [message, setMessage] = useState("");

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

  const [inputField, setInputField] = useState("");
  const [gamesList, setGamesList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
  const customHeaders = {
    "Content-Type": "application/json",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/list/new", {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
          title: title,
          description: description,
          games: collection,
        }),
      });

      if (res.status === 201) {
        setCollection([]);
        setTitle("");
        setDescription("");
        setMessage("List created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />

      <div className="d-flex flex-column col-9 mx-auto my-5">
        <h3 className="bg-secondary p-2 m-0">Create new List</h3>
        <form onSubmit={handleSubmit} className="bg-dark p-5">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name your List
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
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
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>

          <div className="input-group mb-3">
            <Select
              required
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
            return (
              <div className="d-flex align-items-center gap-3 mb-5">
                <GameListElement game_id={e} />
                <CiCircleRemove
                  onClick={(event) => {
                    event.preventDefault();
                    setCollection(collection.filter((a) => e !== a));
                  }}
                  size={30}
                  color="red"
                  className="ms-auto"
                />
              </div>
            );
          })}
          <button
            /*   onClick={createList} */
            type="submit"
            className="btn btn-primary"
          >
            Create
          </button>
          {message ? <h4 className="mt-4 text-success">{message}</h4> : null}
        </form>
      </div>
    </>
  );
}
