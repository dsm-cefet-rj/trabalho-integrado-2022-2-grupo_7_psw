import Developer from "./developer";
import { BsFillKeyboardFill, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "black",
  };

  return (
    <footer
      style={footerStyle}
      className="d-flex flex-column flex-md-row p-4 footer gap-5 mt-4 align-items-center"
    >
      <div className="d-flex flex-column align-items-center">
        <h2>Developers</h2>
        <BsFillKeyboardFill color="aliceblue" size={50} />
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-around col-7 align-items-center gap-5 gap-md-3 mx-auto">
        <Developer
          name={"Lucas Rocha"}
          gitHub={"https://github.com/houkaita"}
          linkedin={
            "https://www.linkedin.com/in/lucas-rocha-de-oliveira-rodrigues-691193213/"
          }
        />
        <Developer
          name={"Vinicius Kayo"}
          gitHub={"https://github.com/vkskayo"}
        />
        <Developer
          name={"Raphael Monteiro"}
          gitHub={"https://github.com/RaphaelMS07"}
        />
        <Developer
          name={"Raul Gomes"}
          gitHub={"https://github.com/RaulMartino"}
        />
      </div>
      <p className="text-center mx-auto">Copyright © 2022 Droppr, Inc.</p>
    </footer>
  );
}
