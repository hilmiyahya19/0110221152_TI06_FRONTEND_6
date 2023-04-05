import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Lucifer</h2>
          <h3 className={styles.hero__genre}>
            Genre: Crime, Drama, Fantasy
          </h3>
          <p className={styles.hero__description}>
          Lucifer Morningstar, tired of his sulking life in hell, comes to live in Los Angeles. While there, he helps humanity with their woes through his experience and telepathic ability to bring up people's innermost desires and thoughts from them. While meeting a Detective at his nightclub, a shootout involving him and the Detectives leads him to become a consultant for the LAPD trying to punish people for their crimes through law and justice.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
