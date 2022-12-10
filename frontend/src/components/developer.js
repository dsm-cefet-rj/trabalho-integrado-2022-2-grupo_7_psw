import { BsFillKeyboardFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Developer({ name, gitHub, linkedin }) {
  const linkStyle = {
    color: "white",
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-2 rounded">
      <p>{name}</p>
      <div className="d-flex flex-column gap-3">
        <a href={gitHub} style={linkStyle}>
          <BsGithub size={40} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <BsLinkedin size={40} href={linkedin} style={linkStyle} />
        </a>
      </div>
    </div>
  );
}
