import { Movie } from "./movies";
import { UserMin } from "./users";

export interface ReviewServerResponse {
    id: number;
    description: string;
    score: number;
    likes: number;
    user: UserMin;
    movieId: number;
    createdAt: string;
    updatedAt: string;
}

export interface Review {
    id: number;
    description: string;
    score: number;
    likes: number;
    user: UserMin;
    movie: Movie;
    createdAt: string;
    updatedAt: string;
}