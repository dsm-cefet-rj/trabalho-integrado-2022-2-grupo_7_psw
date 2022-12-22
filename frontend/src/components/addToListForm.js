import { useParams } from "react-router-dom";

export default function ReviewForm({ list }) {
  const customHeaders = {
    "Content-Type": "application/json",
  };
  const game_id = +useParams().id;

  const handleCheck = async (event, e) => {
    if (event.target.checked) {
      try {
        let res = await fetch(`http://localhost:3001/list/update/${e._id}`, {
          method: "PUT",
          headers: customHeaders,
          body: JSON.stringify({
            title: e.title,
            description: e.description,
            games: [...e.games, game_id],
          }),
        });

        if (res.status === 200) {
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let res = await fetch(`http://localhost:3001/list/update/${e._id}`, {
          method: "PUT",
          headers: customHeaders,
          body: JSON.stringify({
            title: e.title,
            description: e.description,
            games: e.games.filter((a) => a !== game_id),
          }),
        });

        if (res.status === 200) {
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="addToList"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">
                Give it a Drop!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 text-dark">
                  <h4 className="text-dark my-4">Your Lists</h4>
                  {list.map((e) => {
                    return (
                      <div className="d-flex">
                        {!e.games.includes(game_id) ? (
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={true}
                              onChange={(event) => handleCheck(event, e)}
                            />
                            <label className="form-check-label" for="defaultCheck1">
                              {e.title}
                            </label>
                          </div>
                        ) : (
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={true}
                              onChange={(event) => handleCheck(event, e)}
                              defaultChecked={true}
                            />
                            <label className="form-check-label" for="defaultCheck1">
                              {e.title}
                            </label>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
