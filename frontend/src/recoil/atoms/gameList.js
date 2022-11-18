import { atom } from "recoil";

export const gameListState = atom({
  key: "gameListState",
  default: [
    {
      listName: "List Name",
      games: [],
    },
  ],
});
