import React from "react";
import { Link } from "react-router-dom";

import "./Welcome.css";

export default function Welcome() {
    return (
        <div className="main_class">
            <div>
                <Link
                    to="/home"
                    style={{ textDecoration: "none" }}
                >
                    <button className="btn_welcome">
                        <span>Bienvenido</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
