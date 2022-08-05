import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { emptyDetailVideoGame, getDetailVideoGame } from "../../actions";
import NavBar from "../navBar/NavBar";
import Spinner from "../spinner/Spinner";

import styles from "./CardDetail.module.css";

export default function CardDetail(props) {
    const id = props.match.params.id;

    const history = useHistory();

    const dispatch = useDispatch();
    const { detailVideoGame } = useSelector((state) => state);

    useEffect(() => {
        dispatch(emptyDetailVideoGame());
        dispatch(getDetailVideoGame(id));
    }, [dispatch, id]);

    return (
        <div>
            <NavBar />
            {detailVideoGame.name ? (
                <div className={styles.detailVista} key={detailVideoGame.id}>
                    <img
                        src={detailVideoGame.img}
                        alt={detailVideoGame.name}
                        className={styles.detailImg}
                    />
                    <div className={styles.detailContent}>
                        <h1 className={styles.detailTitulo}>
                            {detailVideoGame.name}
                        </h1>
                        <h4
                            className={styles.detailDescripcion}
                            dangerouslySetInnerHTML={{
                                __html: detailVideoGame.description,
                            }}
                        ></h4>
                        <p className={styles.detailGeneros}>Genres: {detailVideoGame.genres}</p>
                        <p className={styles.detailPlataformas}>{detailVideoGame.platforms}</p>
                        <p className={styles.detailRating}>Rating: {detailVideoGame.rating}</p>
                        <p className={styles.detailReleased}>Released: {detailVideoGame.released}</p>
                        <button className={styles.detailBtnBack} onClick={history.goBack}>Back</button>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    );
}
