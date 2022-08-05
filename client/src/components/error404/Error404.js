import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Error404.module.css";

export default function Error404() {
    const history = useHistory();
    return (
        <div className={styles.error404}>
            <div className={styles.card}>
                <div></div>
                <div className={styles.img}></div>
                <div className={styles.text}>
                    Error 404!
                    <br /> No existe la pagina!
                </div>
            <div className={styles.bottom}>
                <button
                    className={styles.btn}
                    onClick={() => history.push("/home")}
                >
                    go Home
                </button>
            </div>
            </div>
        </div>
    );
}
