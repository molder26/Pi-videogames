import React from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.text}>Ups no hay juegos!</div>
            </div>
        </div>
    );
}
