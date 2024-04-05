import { FaHeart } from "react-icons/fa6"

/**
 * Review component
 */
function ReviewLoadingCard () {
    return (
        <article className="flex gap-4 items-center w-full bg-white rounded-md px-8 py-4 animate-pulse">
            <div className="h-56 w-36 bg-slate-400 rounded-md"></div>
            <div className="flex flex-col flex-1">
                <header className="flex justify-between items-center">
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between items-center">
                            <div className="h-9 w-1/3 bg-slate-400 rounded-md"></div>
                            <div className="flex gap-2">
                                {
                                    Array(5).fill(0).map((_, i) => (
                                        <div key={i} className="w-4 h-4 rounded-full border-orange-300 border-2"></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <div className="h-6 w-6 rounded-full bg-slate-400"></div>
                            <div className="h-5 w-1/6 rounded-md bg-slate-400"></div>
                        </div>
                    </div>
                </header>
                <div className="mt-2 flex flex-col gap-2">
                    <div className="h-5 w-full rounded-md bg-slate-400"></div>
                    <div className="h-5 w-full rounded-md bg-slate-400"></div>
                    <div className="h-5 w-2/3 rounded-md bg-slate-400"></div>
                </div>
                <footer className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                        <button className="text-2xl text-slate-400">
                            <FaHeart />
                        </button>
                    </div>
                </footer>
            </div>
        </article>

    )
}

export default ReviewLoadingCard