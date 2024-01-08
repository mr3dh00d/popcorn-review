import Template from "@/components/Template";
import logo from "@images/popcorn-logo.jpg";
import { Link } from "react-router-dom";
import AvatarSelect from "../../components/Account/AvatarSelect";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { getRandomNumber } from "@/utils";
import { signin } from "@/actions/auth/siginin";
import { login } from "@/store/slices/auth";
import { User } from "@/types/users";

interface RegisterProps {}
interface form {
    name: {
        value: string,
        error: string | null,
    },
    avatar: {
        value: number,
    },
    username: {
        value: string,
        error: string | null,
    },
    email: {
        value: string,
        error: string | null,
    },
    password: {
        value: string,
        error: string | null,
    },
    repeat_password: {
        value: string,
    }
}
/**
 * Login component
 */
// @ts-ignore
function Register(props : RegisterProps) {
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState<form>({
        name: {
            value: '',
            error: null,
        },
        avatar: {
            value: getRandomNumber(1, 15),
        },
        username: {
            value: '',
            error: null,
        },
        email: {
            value: '',
            error: null,
        },
        password: {
            value: '',
            error: null,
        },
        repeat_password: {
            value: '',
        },
    });
    const [Error, setError] = useState<string>('');

    const handleChanges = (field : 'name' | 'username' | 'email' | 'password' | 'repeat_password', value : string) => {
        setForm({
            ...form,
            [field]: {
                ...form[field],
                value,
                error: null
            }
        });
    };


    const setAvatar = (avatar: number) => {
        setForm({
            ...form,
            avatar: {
                ...form.avatar,
                value: avatar,
            }
        });
    }

    const errorStyle = (error: string | null) => error ? 'border-red-500' : '';

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        let newForm = {...form};
        let good = true;
        Object.entries(form).forEach(([key, value]) => {
            if(!value.value || key !=='avatar' && value.value === '') {
                good = false;
                newForm = {
                    ...newForm,
                    [key]: {
                        ...(typeof newForm[key as keyof typeof newForm] === 'object' ? newForm[key as keyof typeof newForm] : { value: newForm[key as keyof typeof newForm] }),
                        error: 'Este campo es obligatorio',
                    }
                }
            }
        });

        if (form.password.value !== form.repeat_password.value) {
            good = false;
            newForm = {
                ...newForm,
                password: {
                    ...newForm.password,
                    error: 'Las contraseñas no coinciden',
                },
            }
        }

        setForm(newForm);

        if(!good) return;

        const data = {
            name: form.name.value,
            avatar: `avatar_${form.avatar.value}`,
            username: form.username.value,
            email: form.email.value,
            password: form.password.value,
            repeat_password: form.repeat_password.value,
        };

        setLoading(true);
        signin(data)
        .then((res) => {
            const data = res.data;
            const user : User = {
                id: data.user.id,
                name: data.user.name,
                username: data.user.username,
                email: data.user.email,
                avatar: data.user.avatar,
                created_at: data.user.created_at,
                updated_at: data.user.updated_at,
            }
            const token = data.token;
            dispatch(login({
                user,
                token,
            }));
        })
        .catch((err) => {
            setError(err.message);
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        });

    };

    return (
        <Template auth={auth}>
            <section className="mt-2 flex flex-col items-center justify-center w-full h-[80vh]">
                <article className="bg-white w-1/2 min-h-10 rounded-md flex flex-col py-6 items-center">
                    <div className="w-1/2 flex flex-col justify-center items-center gap-4">
                        <img className="rounded-full shadow-md" width={120} height={120} src={logo} alt="logo-popcornreview" />
                        <h2 className="font-styled text-3xl text-gray-600 font-bold" >PopCornReview</h2>
                    </div>
                    <form className="flex flex-col gap-4 text-center" onSubmit={onSubmit}>
                        <h1 className="text-4xl font-bold text-gray-700">Crear una cuenta</h1>
                        <div className="flex justify-center">
                            <AvatarSelect avatar={form.avatar.value} setAvatar={setAvatar} loading={loading}/>
                        </div>
                        <input className={"rounded-md border border-gray-300 p-2 " + errorStyle(form.name.error)} type="text" placeholder="Nombre" onChange={e => handleChanges('name', e.target.value)} disabled={loading}/>
                        {form.name.error && <span className="text-xs my-0 py-0 -mt-3 -mb-2 text-start text-red-500">{form.name.error}</span>}
                        <div className="flex w-full">
                            <span className="w-8 text-lg flex items-center justify-center bg-gray-300 text-gray-500 rounded-l-md">@</span>
                            <input className={"flex-1 rounded-r-md border border-gray-300 p-2 " + errorStyle(form.username.error)} type="text" placeholder="Nombre de usuario" onChange={e => handleChanges('username', e.target.value)} disabled={loading}/>
                        </div>
                        {form.username.error && <span className="text-xs my-0 py-0 -mt-3 -mb-2 text-start text-red-500">{form.username.error}</span>}
                        <input className={"rounded-md border border-gray-300 p-2 " + errorStyle(form.email.error)} type="text" placeholder="Correo electrónico" onChange={e => handleChanges('email', e.target.value)} disabled={loading}/>
                        {form.email.error && <span className="text-xs my-0 py-0 -mt-3 -mb-2 text-start text-red-500">{form.email.error}</span>}
                        <input className={"rounded-md border border-gray-300 p-2 " + errorStyle(form.password.error)} type="password" placeholder="Contraseña" onChange={e => handleChanges('password', e.target.value)} disabled={loading}/>
                        {form.password.error && <span className="text-xs my-0 py-0 -mt-3 -mb-2 text-start text-red-500">{form.password.error}</span>}
                        <input className={"rounded-md border border-gray-300 p-2 " + errorStyle(form.password.error)} type="password" placeholder="Repetir contraseña" onChange={e => handleChanges('repeat_password', e.target.value)} disabled={loading}/>
                        <button className="rounded-md bg-gray-700 text-white p-2" type="submit">Iniciar sesión</button>
                    </form>
                    {Error && <p className="text-red-500">{Error}</p>}
                    <Link className="mt-4 text-sm text-gray-400 hover:text-gray-500 ease-in-out" to={'/login'}>¿Ya tienes cuenta? Inicia sesión</Link>
                </article>
            </section>
        </Template>
    );
}

export default Register;