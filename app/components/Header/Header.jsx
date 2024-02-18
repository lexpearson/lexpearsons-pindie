import Image from "next/image";
import Styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={Styles["header"]}>
      <a href="/" className={Styles["logo"]}>
        <Image
          src="/images/logo.svg"
          alt="Логотип Pindie"
          className={Styles["logo__image"]}
          width={100}
          height={100}
        />
      </a>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <a href="#" className={Styles["menu__link"]}>
              Новинки
            </a>
          </li>
          <li className={Styles["menu__item"]}>
            <a href="#" className={Styles["menu__link"]}>
              Популярные
            </a>
          </li>
          <li className={Styles["menu__item"]}>
            <a href="#" className={Styles["menu__link"]}>
              Шутеры
            </a>
          </li>
          <li className={Styles["menu__item"]}>
            <a href="#" className={Styles["menu__link"]}>
              Ранеры
            </a>
          </li>
          <li className={Styles["menu__item"]}>
            <a href="#" className={Styles["menu__link"]}>
              Пиксельные
            </a>
          </li>
          <li className={Styles["menu__item"]}>
            <a href="#" className={Styles["menu__link"]}>
              TDS
            </a>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          <button className={Styles["auth__button"]}>Войти</button>
        </div>
      </nav>
    </header>
  );
};
