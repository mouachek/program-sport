import React from "react";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import planning from "../public/images/planning.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <title>Program Sport</title>

      <main className={styles.main}>
        <h1 className={styles.title}>Programme 🏋🏼‍♀️</h1>
        <div className={styles.grid}>
          <a href="/echauffements/echauffements" className={styles.card}>
            <h2>Échauffements</h2>
          </a>
          <a href="/etirements/etirements" className={styles.card}>
            <h2>Étirements</h2>
          </a>
        </div>
        <div className={styles.grid}>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine1/menu"
          >
            Semaine 1
          </Button>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine2/menu"
          >
            Semaine 2
          </Button>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine3/menu"
          >
            Semaine 3
          </Button>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine4/menu"
          >
            Semaine 4
          </Button>
        </div>
        <div className={styles.grid}>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine5/menu"
          >
            Semaine 5
          </Button>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine6/menu"
          >
            Semaine 6
          </Button>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine7/menu"
          >
            Semaine 7
          </Button>
          <Button
            variant="dark"
            className={styles.button}
            href="/semaine8/menu"
          >
            Semaine 8
          </Button>
        </div>
        <Image src={planning} />
      </main>

      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
