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
        <Developer name={"Lucas Rocha"} />
        <Developer name={"Vinicius Kayo"} />
        <Developer name={"Raphael Monteiro"} />
        <Developer name={"Raul Gomes"} />
      </div>
      <p className="text-center mx-auto">Copyright © 2022 Droppr, Inc.</p>
    </footer>
  );
}
