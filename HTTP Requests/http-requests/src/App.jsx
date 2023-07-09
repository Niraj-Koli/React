import React, { Fragment, useState, useEffect, useCallback } from "react";

import "./App.css";

import List from "./components/List/List";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // const response = await fetch("https://swapi.dev/api/films"); // Using Swapi API //

            // const data = await response.json();

            // const transformedMovies = data.results.map((movieData) => {
            //     return {
            //         id: movieData.episode_id,
            //         title: movieData.title,
            //         releaseDate: movieData.release_date,
            //         openingText: movieData.opening_crawl,
            //     };
            // });
            // setMovies(transformedMovies);

            // Using Firebase //

            const response = await fetch(
                "https://react-883a7-default-rtdb.firebaseio.com/movies.json"
            );

            if (!response.ok) {
                throw new Error("Something Went Wrong !!!");
            }

            const data = await response.json();

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    releaseDate: data[key].releaseDate,
                    openingText: data[key].openingText,
                });
            }

            setMovies(loadedMovies);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    async function addMovieHandler(movie) {
        const response = await fetch(
            "https://react-883a7-default-rtdb.firebaseio.com/movies.json",
            {
                method: "POST",
                body: JSON.stringify(movie),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        console.log(data);
    }

    let content = <p>Found Nothing.</p>;

    if (movies.length > 0) {
        content = <List movies={movies} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </Fragment>
    );
}

export default App;
