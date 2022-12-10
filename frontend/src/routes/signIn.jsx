import { Suspense } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SinginComponent from "../components/singin/singinComponent";
function signIn() {
  return (
    <>
      <Header />
      <Suspense>
        <SinginComponent/>
      </Suspense>
      <Footer/>
    </>
  );
}

export default signIn;
