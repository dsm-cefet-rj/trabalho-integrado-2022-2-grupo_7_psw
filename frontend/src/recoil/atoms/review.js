import { atom } from "recoil";

export const reviewState = atom({
  key: "reviewState",
  default: [
    {
      numOfstars: 5,
      text_review: "lorem ipsum",
      game_id: 1,
      date: "12/02/2003",
      checkOut: "false",
      coverReview:
        "https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png",
      titleReview: "Title",
      yearRelease: 2003,
      isFavorite: false,
    },
    {
      numOfstars: 5,
      text_review: "lorem ipsum",
      game_id: 1,
      date: "12/02/2003",
      checkOut: "false",
      coverReview:
        "https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png",
      titleReview: "Title",
      yearRelease: 2003,
      isFavorite: true,
    },
  ],
});
