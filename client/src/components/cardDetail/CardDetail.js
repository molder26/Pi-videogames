import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { emptyDetailVideoGame, getDetailVideoGame } from "../../actions";
import Spinner from "../spinner/Spinner";

import "./CardDetail.css";

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
            {detailVideoGame.name ? (
                <div className="detail-vista" key={detailVideoGame.id}>
                    <img
                        src={detailVideoGame.img}
                        alt={detailVideoGame.name}
                        className="detail-img"
                    />
                    <div className="detail-content">
                        <h1 className="detail-titulo">
                            {detailVideoGame.name}
                        </h1>
                        <h4
                            className="detail-descripcion"
                            dangerouslySetInnerHTML={{
                                __html: detailVideoGame.description,
                            }}
                        ></h4>
                        <p className="detail-generos">Genres: {detailVideoGame.genres}</p>
                        <p className="detail-plataformas">{detailVideoGame.platforms}</p>
                        <p className="detail-rating">Rating: {detailVideoGame.rating}</p>
                        <p className="detail-released">Released: {detailVideoGame.released}</p>
                        <button className="detail-btnBack" onClick={history.goBack}>Back</button>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    );
}
