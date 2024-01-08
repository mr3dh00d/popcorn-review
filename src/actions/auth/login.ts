export async function login(email: string, password: string) {
    return fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Las credenciales no son válidas');
    });
}