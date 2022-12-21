import React from "react";
import { useState } from "react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { selectedPictureState } from "../recoil/atoms/selectedPicture";
import { pictureForm } from "../recoil/atoms/pictureForm";
import { userPictureState } from "../recoil/atoms/userState";

export default function UpdatePicture() {
  const avatarDimension = {
    width: 200,
    height: 200,
  };

  function makeid(length, numStr) {
    let arr = [];
    for (let j = 0; j < numStr; j++) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      arr.push(result);
    }
    return arr;
  }

  const [pictureOptions, setPictureOptions] = useState(makeid(12, 4));
  const [gender, setGender] = useState("male");
  const [selectedPicture, setSelectedPicture] =
    useRecoilState(userPictureState);
  // const [myPictureForm, setMyPictureForm] = useRecoilState(pictureForm);
  const [myPictureForm, setMyPictureForm] = useRecoilState(userPictureState);

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
              <div className="d-flex align-items-center justify-content-center mx-5 gap-2">
                <div className="border p-1">
                  <BsGenderMale
                    onClick={() => setGender("male")}
                    size={30}
                    color="deepskyblue"
                  />
                </div>
                <div className="p-1 border">
                  <BsGenderFemale
                    onClick={() => setGender("female")}
                    size={30}
                    color="pink"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="d-flex flex-column align-items-center d-md-block">
                  {pictureOptions.map((e) => {
                    return (
                      <img
                        id={e}
                        onClick={() =>
                          setSelectedPicture(document.getElementById(e).src)
                        }
                        alt="profile"
                        className="hover-effect profile-picture"
                        style={avatarDimension}
                        src={`https://avatars.dicebear.com/api/${gender}/${e}.svg?background=%2314181c`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              onClick={() => setPictureOptions(makeid(12, 4))}
              type="button"
              className="btn btn-warning w-50 mx-auto my-3 fs-5"
            >
              Next
            </button>
            {selectedPicture ? (
              <>
                <h4 className="text-dark text-center mt-4">
                  Selected character
                </h4>
                <img
                  src={selectedPicture}
                  alt="profile"
                  style={avatarDimension}
                  className="mx-auto my-2"
                />
              </>
            ) : null}

            <div className="modal-footer d-flex justify-content-start">
              <button
                onClick={() => setMyPictureForm(selectedPicture)}
                type="button"
                className="btn-lg btn-primary"
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
