const date = new Date();
const month = new Date().toLocaleString("ru", {
  month: "short",
});

export const getTime = () => {
  return `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" : ""
  }${date.getMinutes()}`;
};

export const getDayAndMonth = () => {
  return `${date.getDate()} ${month}`;
};
