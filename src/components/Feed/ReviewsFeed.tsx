import { getRandomNumber } from "@/utils";
import Review from "../Review";
import AddReviewCard from "../AddReviewCard";

interface ReviewFeedProps {
    className?: string;
}

const article = new Array(10).fill(0).map(() => getRandomNumber(0, 5));

/**
 * ReviewsFeed component
 */
function ReviewsFeed(props : ReviewFeedProps) {
    return (
        <div className={props.className}>
            <section>
                <AddReviewCard />
            </section>
            <section className="mt-4 flex flex-col gap-4">
                {
                    article.map((score) => (
                        <Review score={score} />
                    ))
                }
            </section>
        </div>
    )
}

export default ReviewsFeed;