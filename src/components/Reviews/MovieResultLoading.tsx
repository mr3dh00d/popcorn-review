function MovieResultLoading() {
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

export default MovieResultLoading;