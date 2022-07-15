import React from "react";
import styles from "/styles/Jour.module.css";
import Image from "next/image";
import upperSecond from "/public/images/upperSecond.png";
import upperSecond2 from "/public/images/upperSecond2.png";
import home from "/public/images/logoHome.jpeg";

export default function Semaine8Jour6() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <a href="/">
            <Image src={home} width={50} height={50} className={styles.logo} />
          </a>
        </div>
        <title>Semaine 8 - Jour 6</title>
        <h1 className={styles.title}>Semaine 8 - Jour 6</h1>
        <h2>Vocabulaire :</h2>
        <p>
          SETS : séries <br /> REPS : répétitions <br /> REST : temps de repos
          <br /> HOLD : maintenir
        </p>
        <Image src={upperSecond} />
        <Image src={upperSecond2} />
      </main>
      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
