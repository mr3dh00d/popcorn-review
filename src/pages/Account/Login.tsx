import { login as loginAction } from "@/actions/auth/login"
import Template from "@/components/Template"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import logo from "@images/popcorn-logo.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { login } from "@/store/slices/auth"
import { User } from "@/types/users"

interface LoginProps {}
/**
 * Login component
 */
// @ts-ignore
function Login(props : LoginProps) {
    const auth = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const errorStyle = error ? 'border-red-500' : ''

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault()
        console.log('submit', {email, password})
        setLoading(true)
        loginAction(email, password)
        .then((res) => {
            const data = res.data
            const user : User = {
                id: data.user.id,
                name: data.user.name,
                username: data.user.username,
                email: data.user.email,
                avatar: data.user.avatar,
                created_at: data.user.created_at,
                updated_at: data.user.updated_at,
            }
            const token = data.token
            dispatch(login({
                user,
                token,
            }))
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
            <section className="mt-2 flex flex-col items-center justify-center w-full h-[80vh]">
                <article className="bg-white w-1/2 min-h-10 rounded-md flex flex-col py-6 items-center">
                    <div className="w-1/2 flex flex-col justify-center items-center gap-4">
                        <img className="rounded-full shadow-md" width={120} height={120} src={logo} alt="logo-popcornreview" />
                        <h2 className="font-styled text-3xl text-gray-600 font-bold" >PopCornReview</h2>
                    </div>
                    <form className="w-1/2 flex flex-col gap-4 text-center" onSubmit={onSubmit}>
                        <h1 className="text-4xl font-bold text-gray-700">Inicia sesión</h1>
                        <input className={`rounded-md border border-gray-300 p-2 ${errorStyle}`} type="text" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} disabled={loading}/>
                        <input className={`rounded-md border border-gray-300 p-2 ${errorStyle}`} type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} disabled={loading}/>
                        <button className="rounded-md bg-gray-700 text-white p-2 hover:cursor-pointer" type="submit">Iniciar sesión</button>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                    <Link className="mt-4 text-sm text-gray-400 hover:text-gray-500 transition-all ease-in-out" to={'/register'}>¿No tienes cuenta? Regístrate</Link>
                </article>
            </section>
        </Template>
    )
}

export default Login