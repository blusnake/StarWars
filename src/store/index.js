import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters/charactersSlice";
import planetsSlice from "./planets/planetsSlice";
import starshipsSlice from "./starships/starshipsSlice";
import moviesSlice from "./movies/moviesSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        planets: planetsSlice,
        starships: starshipsSlice,
        movies: moviesSlice
    }
})