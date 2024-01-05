import Template from "../components/Template";
import Stats from "@/components/Feed/Stats";
import ReviewsFeed from "@/components/Feed/ReviewsFeed";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getReviews } from "@/store/slices/reviews";
import { useEffect } from "react";

/**
 * Feed page
 */
function Feed() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReviews());
  }, []);

  return (
    <Template auth={auth}>
        <div className="flex gap-4 w-full mt-2">
            <Stats user={auth.user} className="w-1/6" />
            <ReviewsFeed user={auth.user} className="w-2/3" reviews={reviews.reviews}/>
        </div>
    </Template>
  );
}

export default Feed;