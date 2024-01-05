import { getRandomAvatar, getRandomNumber } from "@/utils";
// @ts-ignore
import { FaRegHeart, FaTrash } from "react-icons/fa6";
// @ts-ignore
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";

interface ReviewProps {
    score: number;
    canEdit?: boolean;
}

/**
 * Review component
 */
function Review (props : ReviewProps) {
    return (
        <article className="flex gap-4 items-center w-full bg-white rounded-md px-8 py-4">
            {/* @follow-up Reemplazar por imagen */}
            <div className="h-56 w-36 bg-gray-400 rounded-md"></div>
            <div className="flex flex-col flex-1">
                <header className="flex justify-between items-center">
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">Película</h2>
                            <div className="flex gap-2">
                                {
                                    Array(5).fill(0).map((_, i) => (
                                        <div key={i} className={`w-4 h-4 rounded-full border-orange-300 border-2 ${i+1 <= props.score ? 'bg-orange-300' : 'bg-transparent'}`}></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <img width={25} src={getRandomAvatar()} alt="" />
                            <h3 className="text-sm text-gray-400">@mr3dh00d</h3>
                        </div>
                    </div>
                </header>
                <div className="mt-2">
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit rem. Dolores voluptatibus minima in quaerat aut incidunt, et eligendi magni aspernatur, maiores vel aliquid nemo facere sit voluptatem iusto.
                    </p>
                </div>
                <footer className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                        <button className="text-2xl">
                            <FaRegHeart />
                        </button>
                        <span>{getRandomNumber(1,375)}</span>
                    </div>
                    { props.canEdit &&
                        <div className="text-lg flex gap-4 items-center justify-between">
                            <Link to={`${routes.reviews.base}/${routes.reviews.edit.replace(':id', `${props.score}`)}`} className="text-blue-400">
                                <FaEdit />
                            </Link>
                            <button className="text-red-400">
                                <FaTrash />
                            </button>

                        </div>
                    }
                </footer>
            </div>
        </article>

    );
}

export default Review;