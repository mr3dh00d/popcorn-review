import { getRandomNumber } from "@/utils";
import Review from "../Review";
import AddReviewCard from "../AddReviewCard";
import { User } from "@/types/users";

interface ReviewFeedProps {
    user: User | null;
    className?: string;
    canEdit?: boolean;
}

const article = new Array(10).fill(0).map(() => getRandomNumber(0, 5));

/**
 * ReviewsFeed component
 */
function ReviewsFeed(props : ReviewFeedProps) {
    const { user } = props;
    return (
        <div className={props.className}>
            <section>
                <AddReviewCard user={user} />
            </section>
            <section className="mt-4 flex flex-col gap-4">
                {
                    article.map((score, i) => (
                        <Review key={i} score={score} canEdit={props.canEdit}/>
                    ))
                }
            </section>
        </div>
    )
}

export default ReviewsFeed;