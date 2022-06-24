import themeColor from "./themeColor";

export const getDarkMode = (darkMode, element) => {
  return darkMode ? themeColor[element] : null;
};
