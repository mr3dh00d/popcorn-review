import ReviewCard from "../ReviewCard"
import AddReviewCard from "../AddReviewCard"
import { User } from "@/types/users"
import { Review } from "@/types/reviews"
import ReviewLoadingCard from "../ReviewLoadingCard"

interface ReviewFeedProps {
    user: User | null
    reviews: Array<Review> | null
    className?: string
    canEdit?: boolean
}

// const article = new Array(10).fill(0).map(() => getRandomNumber(0, 5))

/**
 * ReviewsFeed component
 */
function ReviewsFeed(props : ReviewFeedProps) {
    const { user, reviews, canEdit } = props


    const renderLoading = () => (
        Array(5).fill(0).map((_, i) => (
            <ReviewLoadingCard key={i}/>
        ))
    )

    const renderReviews = () => (
        reviews?.map((review, i) => (
            <ReviewCard key={i} review={review} canEdit={canEdit}/>
        ))
    )

    return (
        <div className={props.className}>
            <section>
                <AddReviewCard user={user} />
            </section>
            <section className="mt-4 flex flex-col gap-4">
                { reviews !== null ? renderReviews() : renderLoading() }
            </section>
        </div>
    )
}

export default ReviewsFeed