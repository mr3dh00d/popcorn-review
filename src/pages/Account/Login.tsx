import Template from "@/components/Template";
import { useAppSelector } from "@/store/hooks";
import logo from "@images/popcorn-logo.jpg";
import { Link } from "react-router-dom";

interface LoginProps {}
/**
 * Login component
 */
// @ts-ignore
function Login(props : LoginProps) {
    const auth = useAppSelector((state) => state.auth);

    return (
        <Template auth={auth}>
            <section className="mt-2 flex flex-col items-center justify-center w-full h-[80vh]">
                <article className="bg-white w-1/2 min-h-10 rounded-md flex flex-col py-6 items-center">
                    <div className="w-1/2 flex flex-col justify-center items-center gap-4">
                        <img className="rounded-full shadow-md" width={120} height={120} src={logo} alt="logo-popcornreview" />
                        <h2 className="font-styled text-3xl text-gray-600 font-bold" >PopCornReview</h2>
                    </div>
                    <form className="w-1/2 flex flex-col gap-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-700">Inicia sesión</h1>
                        <input className="rounded-md border border-gray-300 p-2" type="text" placeholder="Correo electrónico" />
                        <input className="rounded-md border border-gray-300 p-2" type="password" placeholder="Contraseña" />
                        <button className="rounded-md bg-gray-700 text-white p-2" type="submit">Iniciar sesión</button>
                    </form>
                    <Link className="mt-4 text-sm text-gray-400 hover:text-gray-500 transition-all ease-in-out" to={'/register'}>¿No tienes cuenta? Regístrate</Link>
                </article>
            </section>
        </Template>
    );
}

export default Login;