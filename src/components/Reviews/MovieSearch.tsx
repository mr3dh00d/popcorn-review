import { useEffect, useState } from "react";
import MovieResult from "./MovieResult";
import { fetchMovieSearch } from "@/actions/fetchMovieSearch";
import { Movie } from "@/types/movies";
import MovieResultLoading from "./MovieResultLoading";

interface MovieSearchProps {
    setMovie: (movie: Movie) => void;
}

function MovieSearch(props : MovieSearchProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState<Movie[] | []>([]);
    const [shouldSearch, setShouldSearch] = useState(true);

    useEffect(() => {
        if (shouldSearch && query.length > 3) {
            setOpen(true);
            setLoading(true);
            fetchMovieSearch(query)
            .then(results => setResults(results))
            .finally(() => setLoading(false));
        }
    }, [query, shouldSearch]);

    const setMovie = (movie: Movie) => {
        props.setMovie(movie);
        setQuery(movie.title);
        setOpen(false);
        setShouldSearch(false);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setShouldSearch(true);
    }

    const renderResults = () => {
        if (results.length === 0) {
            return <div className="py-2 px-4 text-gray-400">No hay resultados</div>;
        }
        return results.map((movie, i) => <MovieResult key={i} movie={movie} setMovie={setMovie}/>);
    }

    const renderLoading = () => (
        Array(5).fill(0).map((_, i) => <MovieResultLoading key={i} />)
    );

    return (
        <section className="relative">
            <input
                className="w-full p-2 ps-4  border-2 rounded-lg text-gray-500 text-start"
                type="text"
                placeholder="Película que quieres reseñar"
                value={query}
                onChange={handleInputChange}
                onFocus={() => setOpen(query.length > 3)}
                />
            { open &&
                <div className="absolute overflow-auto w-full max-h-64 bg-white border rounded-b-lg shadow-md">
                    { !loading ? renderResults() : renderLoading()}
                </div>
            }
        </section>
    );
}

export default MovieSearch;