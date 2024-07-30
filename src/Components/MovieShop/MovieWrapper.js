import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MovieContext = createContext();

export function MovieWrapper(){
    const [movieListKey, setMovieListKey] = useState("now_playing");
    return<>
        <MovieContext.Provider value={{movieListKey, setMovieListKey}}>
            <Outlet/>
        </MovieContext.Provider>
    </>
}