import React from "react";
import styles from "/styles/Jour.module.css";
import Image from "next/image";
import bootySecond from "/public/images/bootySecond.png";
import bootySecond2 from "/public/images/bootySecond2.png";
import hip from "/public/images/hip.png";
import home from "/public/images/logoHome.jpeg";

export default function Semaine8Jour5() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <a href="/">
            <Image src={home} width={50} height={50} className={styles.logo} />
          </a>
        </div>
        <title>Semaine 8 - Jour 5</title>
        <h1 className={styles.title}>Semaine 8 - Jour 5</h1>
        <h2>Vocabulaire :</h2>
        <p>
          SETS : séries <br /> REPS : répétitions <br /> REST : temps de repos
          <br /> HOLD : maintenir
        </p>
        <Image src={bootySecond} />
        <Image src={bootySecond2} />
        <Image src={hip} />
      </main>
      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
