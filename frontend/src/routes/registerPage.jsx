import { Suspense } from "react";
import Footer from "../components/footer";
import GlobalHeader from "../components/globalHeader";
import RegisterComponent from "../components/register/registerComponent";
import "./register.css";

const RegisterPage = () => {
  return (
    <>
      <GlobalHeader />
      <Suspense>
        <RegisterComponent />
      </Suspense>
      <Footer />
    </>
  );
};

export default RegisterPage;
