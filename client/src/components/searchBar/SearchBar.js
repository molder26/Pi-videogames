import React, { useState } from "react";

export default function SearchBar() {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        console.log("handleClick 👉️", search);
        setSearch("");
    };

    return (
        <>
            <input
                type="text"
                id="searchBox"
                name="searchBox"
                onChange={handleChange}
                value={search}
                autoComplete="off"
            />

            <button onClick={handleClick}>Buscar</button>
        </>
    );
}
