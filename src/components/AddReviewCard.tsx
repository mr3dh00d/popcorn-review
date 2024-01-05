import { routes } from "@/routes/routes";
import { User } from "@/types/users";
import { Link } from "react-router-dom";

interface AddReviewCardProps {
    user: User | null
}

/**
 * AddReviewCard component
 */
// @ts-ignore
function AddReviewCard(props : AddReviewCardProps) {
    const { user } = props;
    return (
        <article className="flex gap-4 items-center w-full bg-white rounded-md px-8 py-4">
            <img width={60} height={60} src={`/avatars/${user?.avatar}.png`} alt="avatar_usuario" />
            <Link to={`${routes.reviews.base}/${routes.reviews.create}`} className="w-full p-2 ps-4 border-2 rounded-full text-gray-500 text-start">
                Escribe una reseña
            </Link>
        </article>
    )  
}

export default AddReviewCard;