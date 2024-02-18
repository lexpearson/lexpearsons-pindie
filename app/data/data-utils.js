import { data } from "./data.js";

export const getGamesByCategory = (category) => {
  return data.filter((game) => game.category.some((item) => item.name === category));
};
