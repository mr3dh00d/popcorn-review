import { useEffect, useState } from "react";
import MovieResult from "./MovieResult";

function MovieSearch() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        setOpen(query.length > 3);
    }, [query]);

    return (
        <section className="relative">
            <input
                className="w-full p-2 ps-4  border-2 rounded-lg text-gray-500 text-start"
                type="text"
                placeholder="Película que quieres reseñar"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setOpen(query.length > 3)}
                onBlur={() => setOpen(false)}/>
            { open &&
                <div className="absolute overflow-auto w-full h-64 bg-white border rounded-b-lg shadow-md">
                    <MovieResult />
                    <MovieResult />
                    <MovieResult />
                </div>
            }
        </section>
    );
}

export default MovieSearch;