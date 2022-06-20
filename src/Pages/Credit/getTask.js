import {
  randomLikes,
  randomReplies,
  randomShares,
} from "../Credit/UI/Input-utils";

export const getTask = (name, title) => {
  const date = new Date();
  const month = new Date().toLocaleString("ru", {
    month: "short",
  });

  return {
    id: Date.now(),
    author: name,
    title: title,
    date: `${date.getDate()} ${month}`,
    time: `${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()} `,
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  };
};
