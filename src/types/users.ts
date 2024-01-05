export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserMin {
    id: number;
    name: string;
    username: string;
    avatar: string;
}