import Header from "../components/header";
import Friend from "../components/friend";

export default function Friends() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column my-5">
        <Friend />
        <Friend />
        <Friend />
      </div>
    </>
  );
}
