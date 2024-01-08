interface params {
    name: string;
    avatar: string;
    username: string;
    email: string;
    password: string;
    repeat_password: string;
}

export async function signin(params: params) {
    let good_response = true;
    return fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => {
        good_response = res.ok;
        return res.json();
    })
    .then((res) => {
        if (good_response) {
            return res;
        }
        throw new Error(res.message);
    })

}