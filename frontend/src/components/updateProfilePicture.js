export default function UpdatePicture() {
  const avatarDimension = {
    width: 200,
    height: 200,
  };
  return (
    <>
      <div
        className="modal fade"
        id="updatePicture"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-dark text-center text-md-start"
                id="exampleModalLabel"
              >
                Select your character !
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="container-fluid">
                <div className="d-flex flex-column align-items-center d-md-block">
                  <img
                    alt="profile"
                    className="hover-effect profile-picture"
                    style={avatarDimension}
                    src="https://avatars.dicebear.com/api/female/john.svg?background=%2314181c"
                  />
                  <img
                    alt="profile"
                    className="hover-effect profile-picture"
                    style={avatarDimension}
                    src="https://avatars.dicebear.com/api/male/jasdohn.svg?background=%2314181c"
                  />
                  <img
                    alt="profile"
                    className="hover-effect profile-picture"
                    style={avatarDimension}
                    src="https://avatars.dicebear.com/api/female/3ga8.svg?background=%2314181c"
                  />
                  <img
                    alt="profile"
                    className="hover-effect profile-picture"
                    style={avatarDimension}
                    src="https://avatars.dicebear.com/api/male/dsasds.svg?mood[]=happy&background=%2314181c"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-warning w-50 mx-auto my-3 fs-5"
            >
              Next
            </button>
            <div className="modal-footer d-flex justify-content-start">
              <button type="button" className="btn-lg btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
