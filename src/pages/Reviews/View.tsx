import ReviewCard from "@/components/ReviewCard";
import Template from "@/components/Template"
import { useAppSelector } from "@/store/hooks";

function View() {
    const auth = useAppSelector((state) => state.auth);
    return (
        <Template auth={auth}>
            <div className="mt-2">
                <ReviewCard score={1} canEdit />
            </div>
        </Template>
    );
}

export default View;