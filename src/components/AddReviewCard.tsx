interface AddReviewCardProps {}

/**
 * AddReviewCard component
 */
function AddReviewCard(props : AddReviewCardProps) {
    return (
        <article className="flex gap-4 items-center w-full bg-white rounded-md px-8 py-4">
            <img width={60} height={60} src="/avatars/avatar_1.png" alt="avatar_usuario" />
            <button className="w-full p-2 ps-4 border-2 rounded-full text-gray-500 text-start">
                Escribe una reseña
            </button>
        </article>
    )  
}

export default AddReviewCard;