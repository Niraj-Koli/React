import React from "react";

import classes from "./List.module.css";

import Movie from "../Movie/Movie";

function List(props) {
    return (
        <ul className={classes["movies-list"]}>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    );
}

export default List;
