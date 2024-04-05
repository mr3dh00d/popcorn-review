import { getMoviePoster} from "@/utils"
import { FaRegHeart, FaTrash } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import { routes } from "@/routes/routes"
import { Review } from "@/types/reviews"

interface ReviewProps {
    review: Review
    canEdit?: boolean
}

/**
 * Review component
 */
function ReviewCard (props : ReviewProps) {
    const { review } = props
    return (
        <article className="flex gap-4 items-center w-full bg-white rounded-md px-8 py-4">
            <img width={144} className="rounded-md" src={getMoviePoster(review.movie.poster_path)} alt={`poster ${review.movie.title}`} />
            <div className="flex flex-col flex-1">
                <header className="flex justify-between items-center">
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-bold">
                                {review.movie.title}
                            </h2>
                            <div className="flex gap-2">
                                {
                                    Array(5).fill(0).map((_, i) => (
                                        <div key={i} className={`w-4 h-4 rounded-full border-orange-300 border-2 ${i+1 <= review.score ? 'bg-orange-300' : 'bg-transparent'}`}></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <img width={25} src={`/avatars/${review.user.avatar}.png`} alt="" />
                            <h3 className="text-sm text-gray-400">@{review.user.username}</h3>
                        </div>
                    </div>
                </header>
                <div className="mt-2">
                    <p className="text-gray-500">
                        {review.description}
                    </p>
                </div>
                <footer className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                        <button className="text-2xl">
                            <FaRegHeart />
                        </button>
                        <span>{review.likes}</span>
                    </div>
                    { props.canEdit &&
                        <div className="text-lg flex gap-4 items-center justify-between">
                            <Link to={`${routes.reviews.base}/${routes.reviews.edit.replace(':id', `${review.id}`)}`} className="text-blue-400">
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

    )
}

export default ReviewCard