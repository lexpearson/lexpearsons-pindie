import Image from "next/image";
import Styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <section className={Styles.banner}>
      <div className={Styles.banner__description}>
        <h1 className={Styles.banner__title}>
          Портал инди-игр от&nbsp;студентов Яндекс Практикума
        </h1>
        <div className={Styles["banner__text-block"]}>
          <p className={Styles.banner__text}>
            Студенты курсов разрабатывают свои игры на Unity, здесь мы их публикуем. Вы можете
            играть прямо на сайте. А если у вас есть аккаунт пользователя — получаете возможность
            голосовать за игры.
          </p>
        </div>
        <a href="#popular" className={`button ${Styles["banner__link"]}`}>
          Смотреть игры
        </a>
      </div>
      <Image
        src="/images/typography/banner-illustration.jpg"
        alt="Рука, утопленная в желтом фоне"
        className={Styles.banner__image}
        width={100}
        height={100}
      />
    </section>
  );
};
