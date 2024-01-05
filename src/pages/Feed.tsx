import Template from "../components/Template";
import Stats from "@/components/Feed/Stats";
import ReviewsFeed from "@/components/Feed/ReviewsFeed";
import { useAppSelector } from "@/store/hooks";

/**
 * Feed page
 */
function Feed() {
  const auth = useAppSelector((state) => state.auth);
  return (
    <Template auth={auth}>
        <div className="flex gap-4 w-full mt-2">
            <Stats user={auth.user} className="w-1/6" />
            <ReviewsFeed user={auth.user} className="w-2/3" />
        </div>
    </Template>
  );
}

export default Feed;