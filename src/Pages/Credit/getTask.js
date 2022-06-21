import {
  randomLikes,
  randomReplies,
  randomShares,
} from "../Credit/UI/Input-utils";
import { getTime, getDayAndMonth } from "../../Posts/dateUtils";

export const getTask = (name, title) => {
  return {
    id: Date.now(),
    author: name,
    title: title,
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  };
};
