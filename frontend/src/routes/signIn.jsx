import { Suspense } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SinginComponent from "../components/singin/singinComponent";
function signIn() {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <Suspense>
        <SinginComponent />
      </Suspense>
    </>
  );
}

export default signIn;
