import React from "react";
import styles from "/styles/semaine1Menu.module.css";
import Button from "react-bootstrap/Button";
import home from "/public/images/logoHome.jpeg";
import Image from "next/image";
import semaine2program from "../../public/images/semaine2program.png";

export default function Menu() {
  return (
    <div className={styles.container}>
      <title>Semaine 2</title>

      <main className={styles.main}>
        <div>
          <a href="/">
            <Image src={home} width={50} height={50} className={styles.logo} />
          </a>
        </div>
        <h1 className={styles.title}>Semaine 2</h1>
        <div className={styles.grid}>
          <Button variant="dark" className={styles.button} href="jour2">
            Jour 2
          </Button>
          <Button variant="dark" className={styles.button} href="jour5">
            Jour 5
          </Button>
          <Button variant="dark" className={styles.button} href="jour6">
            Jour 6
          </Button>
          <Image src={semaine2program} />
        </div>
      </main>

      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
