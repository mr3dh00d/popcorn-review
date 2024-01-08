import { ReviewServerResponse } from "@/types/reviews";
import { getRandomAvatar, getRandomNumber } from "@/utils";


export function fetchReviews () : Promise<{
    json: () => Array<ReviewServerResponse>;
}>{
    return fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        headers: {
            // "Authorization": "Bearer " + token,
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        return res.data.reviews.map((review : ReviewServerResponse) => {
            return review;
        });

    })
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         const reviews : Array<ReviewServerResponse> = Array(10)
    //         .fill(0)
    //         .map((_, i) => ({
    //             id: i,
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dicta suscipit inventore? Sint doloremque at ex atque, libero neque ducimus odit, aliquam quia quis enim perferendis cumque eligendi consequatur architecto.',
    //             score: getRandomNumber(1, 5),
    //             likes: getRandomNumber(1, 375),
    //             user: {
    //                 id: i,
    //                 name: 'John Doe ' + i,
    //                 username: 'john_doe' + i,
    //                 avatar: getRandomAvatar(),
    //             },
    //             movieId: 11 + i,
    //             createdAt: new Date().toISOString(),
    //             updatedAt: new Date().toISOString(),
    //         }))
    //         resolve({
    //             json: () => reviews,
    //         });
    //     }, 1500);
    // });   
}