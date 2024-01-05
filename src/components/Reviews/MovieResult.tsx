import { Movie } from "@/types/movies";
import { getMoviePoster } from "@/utils";

interface MovieResultProps {
    movie: Movie;
    setMovie: (movie: Movie) => void;
}

function MovieResult(props : MovieResultProps) {
    const { movie } = props;
    return (
        <div className="flex w-full px-4 py-2 border-b gap-2" onClick={() => props.setMovie(movie)}>
            <div className="">
                { movie.poster_path === null
                    ? <div className="w-14 h-20 bg-slate-400 rounded-md"></div>
                    : <img width={56} src={getMoviePoster(movie.poster_path)} alt={`${movie.title} Poster`} className="rounded-md"/>
                }
            </div>
            <div className="flex-1 flex flex-col">
                <h3 className="text-lg">{movie.title}</h3>
                <span className="text-xs text-gray-500">{movie.release_date}</span>
                <p className="text-sm">
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}

export default MovieResult;