import Image from "next/image";
import Styles from "./Card.module.css";

export const Card = ({ gameData }) => {
  return (
    <article className={Styles.card}>
      <Image
        src={gameData.image}
        alt={`Скриншот из игры "${gameData.title}"`}
        className={Styles.card__image}
        width={100}
        height={100}
      />
      <div className={Styles["card__content-block"]}>
        <h3 className={Styles.card__title}>{gameData.title}</h3>
        <p className={Styles.card__description}>{gameData.description}</p>
        <div className={Styles["card__info-container"]}>
          <p className={Styles.card__author}>
            Автор:
            <span className={Styles.card__accent}>{gameData.developer}</span>
          </p>
          <p className={Styles.card__votes}>
            Голосов на сайте:
            <span className={Styles.card__accent}>{gameData.users.length}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
