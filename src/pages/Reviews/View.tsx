import ReviewLoadingCard from "@/components/ReviewLoadingCard"
import Template from "@/components/Template"
import { useAppSelector } from "@/store/hooks"

function View() {
    const auth = useAppSelector((state) => state.auth)


    return (
        <Template auth={auth}>
            <div className="mt-2">
                <ReviewLoadingCard />
            </div>
        </Template>
    )
}

export default View