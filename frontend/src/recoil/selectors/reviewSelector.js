import { selectorFamily } from "recoil";

export const asyncGetReviewByGameIdAndUserId = selectorFamily({
    key: "getReviewByGameAndUser",
    get: (queryParameters) => async () => {
        // console.log(gameId, userId)
        const response = await fetch(`http://localhost:3001/getreview/${queryParameters}`);
        if(!response.ok) {
            return null
        }

        const result = await response.json();
        return result;
    }
})