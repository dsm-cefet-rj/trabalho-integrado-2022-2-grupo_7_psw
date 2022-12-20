import { Suspense } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import RegisterComponent from "../components/register/registerComponent";
import "./register.css";
import 'react-notifications/lib/notifications.css';

const RegisterPage = () => {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <Suspense>
        <RegisterComponent />
      </Suspense>
      <Footer />
    </>
  );
};

export default RegisterPage;
