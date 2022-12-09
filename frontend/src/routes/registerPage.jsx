import { Suspense } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import RegisterComponent from "../components/register/registerComponent";
import "./register.css"

const  RegisterPage = () => {
  
  return (
    <>
      <Header />
      <Suspense>
        <RegisterComponent/>
      </Suspense>
      <Footer/>
   
    </>
  );
}

export default RegisterPage;
