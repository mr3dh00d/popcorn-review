import { Movie } from "@/types/movies"

export async function fetchMovieData(movieId: number) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
      }
      
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-CL`, options)
    .then(response => response.json())
    .then(data => {
        const movie: Movie = {
            id: data.id,
            title: data.title,
            tagline: data.tagline,
            overview: data.overview,
            poster_path: data.poster_path,
            release_date: data.release_date
        }
        return movie
    })

    return movie

}