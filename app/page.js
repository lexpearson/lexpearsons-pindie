import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";
import { getGamesByCategory } from "./data/data-utils";

const popularGames = getGamesByCategory("popular");
const newGames = getGamesByCategory("new");

export default function Home() {
  return (
    <main>
      <Banner />
      <CardsList data={popularGames} id='popular' title='Популярные' />
      <CardsList data={newGames} id='new' title='Новинки' />
      <Promo />
    </main>
  );
}
