import ReviewsFeed from "@/components/Feed/ReviewsFeed";
import Template from "@/components/Template";
import { useAppSelector } from "@/store/hooks";

interface IndexProps {}

// @ts-ignore
function Index(props : IndexProps) {
    const auth = useAppSelector((state) => state.auth);
    return (
        <Template auth={auth}>
            <div className="w-full flex justify-center mt-2">
                <ReviewsFeed user={auth.user} className="w-2/3" canEdit/>
            </div>
        </Template>
    );
}

export default Index;