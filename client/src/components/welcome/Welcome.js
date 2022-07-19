import React from "react";
import { Link } from "react-router-dom";

import "./Welcome.css";

export default function Welcome() {
    return (
        <div className="main_class">
            <Link className="btn_welcome" role="button" to="/home">
                <span>Start</span>
            </Link>
        </div>
    );
}
