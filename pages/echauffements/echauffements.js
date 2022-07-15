import React from "react";
import styles from "/styles/Echauffements.module.css";
import Image from "next/image";
import echauffements from "/public/images/echauffements.png";
import echauffementsTips from "/public/images/echauffementsTips.png";
import home from "/public/images/logoHome.jpeg";

export default function Echauffements() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <a href="/">
            <Image src={home} width={50} height={50} className={styles.logo} />
          </a>
        </div>
        <title>Échauffements</title>
        <h1 className={styles.title}>️Échauffements</h1>
        <Image src={echauffementsTips} />
        <Image src={echauffements} />
      </main>
      <footer className={styles.footer}>Made with 💪🏼 by Manel</footer>
    </div>
  );
}
