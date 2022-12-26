import Header from "../components/header";
import Friend from "../components/friend/friend";
import { BiGame } from "react-icons/bi";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import {  useRecoilValue } from "recoil";
import { userAtom, userFollowState } from "../recoil/atoms/userState";

export default function Community() {

  const loggedUser = useRecoilValue(userAtom)

  const textColor = {
    color: "#D3D3D3",
  };

  const textColor2 = {
    color: "#9ab",
  };
  const marginTop = {
    marginTop: 100,
  };


  const [searchUser, setSearchUser] = useState("");

  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => {      
        setUsers(data) 
      })
      
  }, []);


  users.map((user) => {
    user.followed = false;
    if(loggedUser){
      for (let i = 1; i < loggedUser.friends.length; i++) {
        if (user.username === loggedUser.friends[i].username) {
          user.followed = true
        } 
      }
    }
  })



  function matchInput(searchUser, user) {
    const inputLength = searchUser.length;
    const userLength = user.length;

    if (inputLength > userLength) {
      return false;
    }

    for (let i = 0; i < inputLength; i++) {
      if (searchUser[i] !== user[i]) {
        return false;
      }
    }

    return true;
  }
  return (
    <>
      {/* Haveria uma condição. Caso o usuário esteja logado renderiza Header. Caso não, renderiza GlobalHeader */}
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div
        style={marginTop}
        className="d-flex col-8 col-md-6 mx-auto align-items-center gap-3"
      >
        <BiGame color="yellow" className="d-block" size={60} />
        <p className="text-light dropprisfun">
          D&nbsp;r&nbsp;o&nbsp;p&nbsp;p&nbsp;r&ensp; i&nbsp;s&ensp; f&nbsp;u&nbsp;n
        </p>
      </div>

      <div>
        <h3 style={textColor} className="text-center my-5 mx-3">
          Gamers, pro players and friends. All of them are <strong>here</strong>.
        </h3>
        <div
          style={textColor2}
          className="col-8 mx-auto border-bottom border-secondary my-5"
        >
          POPULAR
        </div>
      </div>
      <div className="d-flex flex-column my-5 container-fluid fundo col-12 col-md-6">
        <div className="container-fluid my-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search a user"
            aria-label="Search"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </div>
        {!searchUser
          ? users.map((user) => {

       
            return <Suspense>
              <Friend username={user.username} id={user._id} url={user.pictureUrl} following={user.followed} />
            </Suspense>
          })
          : users.map((user) => {
            if (matchInput(searchUser.toLowerCase(), user.username.toLowerCase())) {
              return (
                <Suspense>
                  <Friend username={user.username} url={user.pictureUrl} />
                </Suspense>
              );
            }
          })}
      </div>
    </>
  );
}
