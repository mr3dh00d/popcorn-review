export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: string;
    created_at: string;
    updated_at: string;
}

export interface UserMin {
    id: number;
    name: string;
    username: string;
    avatar: string;
}