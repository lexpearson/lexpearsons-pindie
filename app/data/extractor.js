import { data } from "./data.js";

export const getGamesByCategory = (category) => {
  const datas = data.filter((game) => game.category.some((item) => item.name === category));
  console.log(datas);
  return datas;
};
