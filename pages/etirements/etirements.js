import React from "react";
import styles from "/styles/Etirements.module.css";
import Image from "next/image";
import etirements from "/public/images/etirements.png";
import home from "/public/images/logoHome.jpeg";

export default function Etirements() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <a href="/">
            <Image src={home} width={50} height={50} className={styles.logo} />
          </a>
        </div>
        <title>Etirements</title>
        <h1 className={styles.title}>Etirements</h1>
        <Image src={etirements} />
      </main>
      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
