import { BsFillKeyboardFill, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Developer({ name }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-2 rounded">
      <p>{name}</p>
      <div className="d-flex flex-column gap-3">
        <BsGithub size={40} />
        <BsLinkedin size={40} />
      </div>
    </div>
  );
}
