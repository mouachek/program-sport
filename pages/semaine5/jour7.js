import React from "react";
import styles from "/styles/Jour.module.css";
import Image from "next/image";
import bootySmithSecond from "/public/images/bootySmithSecond.png";
import bootySmithSecond2 from "/public/images/bootySmithSecond2.png";
import home from "/public/images/logoHome.jpeg";

export default function Semaine5Jour7() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <a href="/">
            <Image src={home} width={50} height={50} className={styles.logo} />
          </a>
        </div>
        <title>Semaine 5 - Jour 7</title>
        <h1 className={styles.title}>Semaine 5 - Jour 7</h1>
        <h2>Vocabulaire :</h2>
        <p>
          SETS : séries <br /> REPS : répétitions <br /> REST : temps de repos
          <br /> HOLD : maintenir
        </p>
        <Image src={bootySmithSecond} />
        <Image src={bootySmithSecond2} />
      </main>
      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
