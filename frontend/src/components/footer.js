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

      <div className="d-flex flex-column flex-md-row justify-content-around col-7 align-items-center gap-5 gap-md-3">
        <div className="d-flex flex-column justify-content-center align-items-center bg-secondary p-2 rounded">
          <p>Aluno</p>
          <p>Vinicius Kayo</p>
          <div className="d-flex flex-column gap-3">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-secondary p-2 rounded">
          <p>Aluno</p>
          <p>Raúl Gomes</p>
          <div className="d-flex flex-column gap-3">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-secondary p-2 rounded">
          <p>Aluno</p>
          <p>Lucas Rocha</p>
          <div className="d-flex flex-column gap-3 bg-secondary p-2 rounded">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center bg-secondary p-2 rounded">
          <p>Aluno</p>
          <p>Raphael Monteiro</p>
          <div className="d-flex flex-column gap-3">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mx-auto bg-danger p-2 rounded">
        <p>Professor</p>
        <p>Diogo Silveira</p>
        <div className="d-flex flex-column gap-3">
          <BsGithub size={40} />
          <BsLinkedin size={40} />
        </div>
      </div>
    </footer>
  );
}
