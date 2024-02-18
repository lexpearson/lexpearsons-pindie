import Image from "next/image";
import Styles from "./Promo.module.css";

export const Promo = () => {
  return (
    <section className={Styles.promo}>
      <div>
        <h2 className={Styles.promo__title}>Твой промо-код</h2>
        <p className={Styles.promo__description}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button className={`button ${Styles.promo__button}`}>Получить код</button>
      </div>
      <Image
        src="/images/typography/promo-illustration.svg"
        alt="Собака"
        className={Styles.promo__image}
      />
    </section>
  );
};
