import { FaHeart, FaBookOpen  } from "react-icons/fa6";

interface StatsProps {
    className?: string;
}
/**
 * Stats component
 */
function Stats(props: StatsProps) {
    return (
        <div className={props.className}>
            <article className="bg-white w-full rounded-md mt-10 pb-4">
                <header>
                    <div className="flex flex-col items-center">
                        <img className="-mt-10 rounded-full border-4 border-white" width={80} height={80} src="/avatars/avatar_1.png" alt="avatar" />
                        <h2 className="text-xl font-bold">Dereck Pavez</h2>
                        <h3 className="text-sm text-gray-400">@mr3dh00d</h3>
                    </div>
                </header>
                <div className="flex justify-around mt-4">
                    <div className="flex flex-col items-center">
                        <FaBookOpen />
                        <h3 className="text-sm text-gray-400">Reseñas</h3>
                        <h2 className="text-xl font-bold">10</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHeart />
                        <h3 className="text-sm text-gray-400">Me gustas</h3>
                        <h2 className="text-xl font-bold">10</h2>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Stats;