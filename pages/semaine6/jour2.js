import React from "react";
import styles from "/styles/Jour.module.css";
import Image from "next/image";
import hitCable from "/public/images/hitCable.png";
import home from "/public/images/logoHome.jpeg";

export default function Semaine2Jour2() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <a href="/">
            <Image src={home} width={50} height={50} className={styles.logo} />
          </a>
        </div>
        <title>Semaine 6 - Jour 2</title>
        <h1 className={styles.title}>Semaine 6 - Jour 2</h1>
        <h2>Vocabulaire :</h2>
        <p>
          SETS : séries <br /> REPS : répétitions <br /> REST : temps de repos
          <br /> HOLD : maintenir
        </p>
        <Image src={hitCable} />
      </main>
      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
