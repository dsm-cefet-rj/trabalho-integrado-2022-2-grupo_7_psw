import { useRecoilValue } from "recoil";
import { userAtom } from "../recoil/atoms/userState";

function Bio(){
    let loggedUser = useRecoilValue(userAtom)
    return(
        <div className="col-11 mx-auto">
        <div className="col-11 mx-auto border-bottom border-secondary">
            <p className="font-weight-light">BIO</p>
        </div>
            <p className="text-secondary col-11 mx-auto my-3">
            {loggedUser.bio}
            </p>
        </div>
    );
}

export default Bio