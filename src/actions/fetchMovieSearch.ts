import { Movie } from "@/types/movies";

interface MovieServerResponse {
  page: number,
  results: Array<Movie> | [],
  total_pages: number,
  total_results: number
}

export async function fetchMovieSearch(query: string) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
      };
      
    const results = await fetch(`https://api.themoviedb.org/3/search/movie?language=es-CL&query=${query}`, options)
    .then(response => response.json())
    .then((data : MovieServerResponse) => {
        const results = data.results;
        return results;
    });

    return results;

}