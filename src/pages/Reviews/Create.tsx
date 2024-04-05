import { createReviewAction } from "@/actions/review/createReviewAction"
import MovieSearch from "@/components/Reviews/MovieSearch"
import Template from "@/components/Template"
import { routes } from "@/routes/routes"
import { useAppSelector } from "@/store/hooks"
import { Movie } from "@/types/movies"
import { getMoviePoster } from "@/utils"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface FormErrors {
    description: string | null
    score: string | null
    movie_id: string | null
}


function Create() {
    const auth = useAppSelector((state) => state.auth)
    const navigate = useNavigate()
    const [description, setDescription] = useState<string>('')
    const [score, setScore] = useState(0)
    const [movie, setMovie] = useState<Movie | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<FormErrors>({
        description: "",
        score: "",
        movie_id: "",
    })
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (movie !== null) {
            setErrors({
                ...errors,
                movie_id: null,
            })
        }
    }, [movie])

    useEffect(() => {
        if (description !== null) {
            setErrors({
                ...errors,
                description: null,
            })
        }
    }, [description])

    useEffect(() => {
        if (score !== null) {
            setErrors({
                ...errors,
                score: null,
            })
        }
    }, [score])

    

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let validation = true
        let newErrors = errors
        console.log(description === "")
        if (description === '') {
            newErrors = {
                ...newErrors,
                description: 'Se requiere una descripción',
            }
            validation = false
        }
        if (score === 0) {
            newErrors = {
                ...newErrors,
                score: 'Se requiere una calificación',
            }
            validation = false
        }
        if (movie === null) {
            newErrors = {
                ...newErrors,
                movie_id: 'Se requiere una película',
            }
            validation = false
        }

        setErrors(newErrors)
        
        if (!validation) return

        const token = auth?.token || ""
        setLoading(true)
        createReviewAction(token,  {
            description,
            score,
            movie_id: movie?.id || null,
            user_id: auth.user?.id || null,
        })
        .then(() => {
            navigate(routes.feed)
        })
        .catch((err) => {
            setError(err.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <Template auth={auth}>
            <section className="w-full flex justify-center mt-2">
                <article className="flex flex-col gap-4 w-2/3 bg-white rounded-md px-8 py-4">
                    <h1 className="text-4xl font-bold">Nueva Reseña</h1>
                    <form className="flex flex-col gap-2 w-full" onSubmit={onSubmit}>
                        <MovieSearch setMovie={setMovie} loading={loading} />
                        { errors.movie_id && <span className="text-xs my-0 py-0 text-start text-red-500">{errors.movie_id}</span>}
                        <section className="flex gap-2">
                            <div className="flex flex-col items-center gap-2">
                                {
                                    movie === null || movie?.poster_path === null
                                    ? <div className="h-56 w-36 bg-gray-400 rounded-md"></div>
                                    : <img width={144} src={getMoviePoster(movie?.poster_path)} alt={`${movie?.title} Poster`} className="rounded-md"/>
                                }
                                <div className="flex justify-center items-center flex-col">
                                    <div className="flex gap-2">
                                        {
                                            Array(5).fill(0).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-5 h-5 rounded-full border-orange-300 border-2 ${i+1 <= score ? 'bg-orange-300' : 'bg-transparent'}`}
                                                    onClick={() => !loading && setScore(i+1 == score ? 0 : i+1)}
                                                ></div>
                                            ))
                                        }
                                    </div>
                                    { errors.score && <span className="text-xs my-0 py-0 text-start text-red-500">{errors.score}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea className="flex-1 p-4  border-2 rounded-lg text-gray-500 text-start" placeholder="Escribe una reseña" value={description} onChange={e => setDescription(e.target.value)} disabled={loading}/>
                                { errors.description && <span className="text-xs my-0 py-0 text-start text-red-500">{errors.description}</span>}
                            </div>
                        </section>
                        {
                            error && <span className="text-xs my-0 py-0 text-start text-red-500">{error}</span>
                        }
                        <section className="flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg  ">
                                Publicar
                            </button>
                        </section>
                    </form>
                </article>
            </section>
        </Template>
    )
}

export default Create