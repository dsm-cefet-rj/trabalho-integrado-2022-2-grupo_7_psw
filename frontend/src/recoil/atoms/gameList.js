import { atom } from "recoil";

export const gameListState = atom({
  key: "gameLististState",
  default: [
    {
      listName: "List name",
      games: [],
    },
  ],
});
