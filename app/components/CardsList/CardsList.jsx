import Card from "../Card/Card";
import Styles from "./CardsList.module.css";

export const CardsList = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {props.data.map((gameData, index) => (
          <li key={index} className={Styles["cards-list__item"]}>
            <a href={gameData.link} className={Styles["card-list__link"]}>
              <Card gameData={gameData} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
