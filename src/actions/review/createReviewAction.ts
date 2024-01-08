interface params {
    description: string;
    score: number;
    movie_id: number;
    user_id: number | null;
}

export async function createReviewAction(token: string, params: params) {
    let good_response = true;
    return fetch(`${import.meta.env.VITE_API_URL}/reviews/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(params),
    }).then((res) => {
        good_response = res.ok;
        return res.json();
    }).then((res) => {
        if (good_response) {
            return res;
        }
        throw new Error(res.message);
    });
}