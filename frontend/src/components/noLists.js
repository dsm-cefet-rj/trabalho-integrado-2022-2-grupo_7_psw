import { Link } from "react-router-dom";

export default function noLists() {
  return (
    <div className="mt-5 mx-3">
      <h5 className="text-light">No lists available, why not create one?</h5>
      <Link to="/lists/new">
        <button type="button" class="btn btn-success p-2 fs-6">
          Create new list
        </button>
      </Link>
    </div>
  );
}
