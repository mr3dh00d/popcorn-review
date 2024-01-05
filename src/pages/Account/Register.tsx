import Template from "@/components/Template";
import logo from "@images/popcorn-logo.jpg";
import { Link } from "react-router-dom";
import AvatarSelect from "../../components/Account/AvatarSelect";

interface RegisterProps {}
/**
 * Login component
 */
// @ts-ignore
function Register(props : RegisterProps) {
    return (
        <Template>
            <section className="mt-2 flex flex-col items-center justify-center w-full h-[80vh]">
                <article className="bg-white w-1/2 min-h-10 rounded-md flex flex-col py-6 items-center">
                    <div className="w-1/2 flex flex-col justify-center items-center gap-4">
                        <img className="rounded-full shadow-md" width={120} height={120} src={logo} alt="logo-popcornreview" />
                        <h2 className="font-styled text-3xl text-gray-600 font-bold" >PopCornReview</h2>
                    </div>
                    <form className="flex flex-col gap-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-700">Crear una cuenta</h1>
                        <div className="flex justify-center">
                            <AvatarSelect />
                        </div>
                        <input className="rounded-md border border-gray-300 p-2" type="text" placeholder="Nombre" />
                        <div className="flex w-full">
                            <span className="w-8 text-lg flex items-center justify-center bg-gray-300 text-gray-500 rounded-l-md">@</span>
                            <input className="flex-1 rounded-r-md border border-gray-300 p-2" type="text" placeholder="Nombre de usuario" />
                        </div>
                        <input className="rounded-md border border-gray-300 p-2" type="text" placeholder="Correo electrónico" />
                        <input className="rounded-md border border-gray-300 p-2" type="password" placeholder="Contraseña" />
                        <input className="rounded-md border border-gray-300 p-2" type="password" placeholder="Repetir contraseña" />
                        <button className="rounded-md bg-gray-700 text-white p-2" type="submit">Iniciar sesión</button>
                    </form>
                    <Link className="mt-4 text-sm text-gray-400 hover:text-gray-500 ease-in-out" to={'/login'}>¿Ya tienes cuenta? Inicia sesión</Link>
                </article>
            </section>
        </Template>
    );
}

export default Register;