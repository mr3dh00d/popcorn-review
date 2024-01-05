
function MovieContent() {
    return (
        <div className="flex w-full px-4 py-2 border-b gap-2">
            <div className="w-14 h-20 bg-gray-400 rounded-md"></div>
            <div className="flex-1 flex flex-col">
                <h3 className="text-lg">Película</h3>
                <span className="text-xs text-gray-500">2021</span>
                <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta earum atque cupiditate non facilis nemo illum quas ea repellendus in quibusdam perspiciatis voluptates quidem quisquam odit dolor, dolores perferendis iste.
                </p>
            </div>
        </div>
    );
}

function MovieLoading() {
    return (
        <div className="flex w-full px-4 py-2 border-b gap-2 animate-pulse">
            <div className="w-14 h-20 bg-slate-400 rounded-md"></div>
            <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-lg">
                    <div className="h-5 w-1/4 rounded-full bg-slate-400"></div>
                </h3>
                <span className="text-xs text-gray-500">
                    <div className="h-3 w-10 rounded-full bg-slate-400"></div>
                </span>
                <div className="text-sm flex flex-col gap-1">
                    <div className="h-4 w-full rounded-full bg-slate-400"></div>
                    <div className="h-4 w-full rounded-full bg-slate-400"></div>
                </div>
            </div>
        </div>
    );
}


function MovieResult() {
    return <MovieLoading />;
}

export default MovieResult;