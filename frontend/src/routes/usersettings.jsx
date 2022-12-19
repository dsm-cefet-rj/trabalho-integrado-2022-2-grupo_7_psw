import Header from "../components/header";
import UpdatePicture from "../components/updateProfilePicture";
import { pictureForm } from "../recoil/atoms/pictureForm";
import { useRecoilValue } from "recoil";
import UserSettingsComponent from "../components/userSettings/userSettingsComponent";

export default function Screen() {
  return (
    <>
      <Header />
      <UserSettingsComponent/>
      <UpdatePicture />
    </>
  );
}
