import { FaRegHeart } from "react-icons/fa6";

interface FeedProps {
    className?: string;
}

const article = new Array(10).fill(0);

const getRandomNumber = (min : number, max : number) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomAvatar = () => {
    const avatar_number = getRandomNumber(1, 15);
    return '/avatars/avatar_' + avatar_number + '.png';
};

/**
 * Feed component
 */
function ReviewsFeed(props : FeedProps) {
    return (
        <div className={props.className}>
            <section>
                <article  className="flex gap-4 items-center w-full bg-white rounded-md px-8 py-4">
                    <img width={60} height={60} src="/avatars/avatar_1.png" alt="avatar_usuario" />
                    <div className="w-full p-2 ps-4 border-2 rounded-full text-gray-500">
                        Escribe una reseña
                    </div>
                </article>
            </section>
            <section className="mt-4 flex flex-col gap-4">
                {
                    article.map(() => (
                        <article className="flex gap-4 items-center w-full bg-white rounded-md px-8 py-4">
                            {/* @follow-up Reemplazar por imagen */}
                            <div className="h-56 w-36 bg-gray-400 rounded-md"></div>
                            <div className="flex flex-col flex-1">
                                <header className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <h2 className="text-3xl font-bold">Película</h2>
                                        <div className="flex items-center gap-1 mt-1">
                                            <img width={25} src={getRandomAvatar()} alt="" />
                                            <h3 className="text-sm text-gray-400">@mr3dh00d</h3>
                                        </div>
                                    </div>
                                    {/* <div className="flex gap-4">
                                        <button className="bg-red-500 text-white rounded-md px-4 py-2">Eliminar</button>
                                        <button className="bg-blue-500 text-white rounded-md px-4 py-2">Editar</button>
                                    </div> */}
                                </header>
                                <div className="mt-2">
                                    <p className="text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit rem. Dolores voluptatibus minima in quaerat aut incidunt, et eligendi magni aspernatur, maiores vel aliquid nemo facere sit voluptatem iusto.
                                    </p>
                                </div>
                                <footer className="flex gap-2 mt-4">
                                    <button className="text-2xl">
                                        <FaRegHeart />
                                    </button>
                                    <span>{getRandomNumber(1,375)}</span>
                                </footer>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    )
}

export default ReviewsFeed;