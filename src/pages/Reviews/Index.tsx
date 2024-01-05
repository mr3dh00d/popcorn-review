import ReviewsFeed from "@/components/Feed/ReviewsFeed";
import Template from "@/components/Template";

interface IndexProps {}

// @ts-ignore
function Index(props : IndexProps) {
    return (
        <Template>
            <div className="w-full flex justify-center mt-2">
                <ReviewsFeed className="w-2/3" canEdit/>
            </div>
        </Template>
    );
}

export default Index;