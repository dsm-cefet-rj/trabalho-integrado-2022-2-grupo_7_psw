import { Suspense } from "react";
import Footer from "../components/footer";
import GlobalHeader from "../components/globalHeader";
import SinginComponent from "../components/singin/singinComponent";
function signIn() {
  return (
    <>
      <GlobalHeader />
      <Suspense>
        <SinginComponent />
      </Suspense>
      <Footer />
    </>
  );
}

export default signIn;
