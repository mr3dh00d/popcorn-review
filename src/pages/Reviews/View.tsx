import Review from "@/components/Review";
import Template from "@/components/Template"

function View() {
    return (
        <Template>
            <div className="mt-2">
                <Review score={1} canEdit />
            </div>
        </Template>
    );
}

export default View;