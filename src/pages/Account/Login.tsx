import Template from "@/components/Template";

interface LoginProps {}
/**
 * Login component
 */
function Login(props : LoginProps) {
    return (
        <Template>
            <section className="mt-2 flex flex-col w-full h-[80vh]">
                <article className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-4xl font-bold text-gray-700">Inicia sesión</h1>
                    <form className="flex flex-col gap-4 w-1/3">
                        <input className="rounded-md border border-gray-300 p-2" type="text" placeholder="Correo electrónico" />
                        <input className="rounded-md border border-gray-300 p-2" type="password" placeholder="Contraseña" />
                        <button className="rounded-md bg-gray-700 text-white p-2" type="submit">Iniciar sesión</button>
                    </form>
                </article>
            </section>
        </Template>
    );
}

export default Login;