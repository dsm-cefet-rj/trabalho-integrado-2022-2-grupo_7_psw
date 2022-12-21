import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export default function noLists() {
  const fontStyle = {
    fontSize: 20,
  };
  return (
    <div className="mt-5 mx-3">
      <h5 className="text-light">No lists available, why not create one?</h5>
      <Link to="/lists/new">
        <button type="button" className="btn botaozao p-2 fs-6 mt-5 mx-3">
          <AiOutlinePlus size={20} />
          <span style={fontStyle}> Create new list </span>
        </button>
      </Link>
    </div>
  );
}
