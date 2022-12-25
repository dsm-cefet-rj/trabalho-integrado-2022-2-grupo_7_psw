import Header from "../components/header";
// import Friend from "../components/friend";
import { Suspense } from "react";

export default function Friends() {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div className="d-flex flex-column my-5 container-fluid fundo">
        {/* <Friend />
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
        <Friend /> */}
      </div>
    </>
  );
}
