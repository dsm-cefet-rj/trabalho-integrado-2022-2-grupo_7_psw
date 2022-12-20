import Header from "../components/header";
import UpdatePicture from "../components/updateProfilePicture";
import { pictureForm } from "../recoil/atoms/pictureForm";
import { useRecoilValue } from "recoil";
import UserSettingsComponent from "../components/userSettings/userSettingsComponent";
import { Suspense } from "react";

export default function Screen() {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <UserSettingsComponent/>
      <UpdatePicture />
    </>
  );
}
