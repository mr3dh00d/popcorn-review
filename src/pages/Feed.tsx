import Template from "../components/Template";
import Stats from "@/components/Feed/Stats";
import ReviewsFeed from "@/components/Feed/ReviewsFeed";

/**
 * Feed page
 */
function Feed() {

  return (
    <Template>
        <div className="flex gap-4 w-full justify-between mt-2">
            <Stats className="w-1/6" />
            <ReviewsFeed className="w-2/3" />
            {/* <div className="bg-green-500 w-1/6 h-auto">
              Aca estadísticas
            </div> */}
            {/* <div className="bg-red-500 w-2/3 h-[120rem]">
              Aca va el Feed
            </div> */}
            <div className="bg-blue-500 w-1/6">
              Aca va información
            </div>
        </div>
    </Template>
  );
}

export default Feed;