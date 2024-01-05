import MovieSearch from "@/components/Reviews/MovieSearch";
import Template from "@/components/Template"
import { useState } from "react";

function Create() {
    const [score, setScore] = useState(0);

    return (
        <Template>
            <section className="w-full flex justify-center mt-2">
                <article className="flex flex-col gap-4 w-2/3 bg-white rounded-md px-8 py-4">
                    <h1 className="text-4xl font-bold">Nueva Reseña</h1>
                    <form className="flex flex-col gap-2 w-full">
                        <MovieSearch />
                        <section className="flex gap-2">
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-56 w-36 bg-gray-400 rounded-md"></div>
                                <div className="flex gap-2">
                                    {
                                        Array(5).fill(0).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-5 h-5 rounded-full border-orange-300 border-2 ${i+1 <= score ? 'bg-orange-300' : 'bg-transparent'}`}
                                                onClick={() => setScore(i+1 == score ? 0 : i+1)}
                                            ></div>
                                        ))
                                    }
                                </div>
                            </div>
                            <textarea className="flex-1 p-4  border-2 rounded-lg text-gray-500 text-start" placeholder="Escribe una reseña"/>
                        </section>
                        <section className="flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg  ">
                                Publicar
                            </button>
                        </section>
                    </form>
                </article>
            </section>
        </Template>
    );
}

export default Create;