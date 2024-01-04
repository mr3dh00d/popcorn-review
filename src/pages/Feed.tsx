import Template from "../components/Template";
import Stats from "@/components/Feed/Stats";
import ReviewsFeed from "@/components/Feed/ReviewsFeed";

/**
 * Feed page
 */
function Feed() {

  return (
    <Template>
        <div className="flex gap-4 w-full mt-2">
            <Stats className="w-1/6" />
            <ReviewsFeed className="w-2/3" />
        </div>
    </Template>
  );
}

export default Feed;