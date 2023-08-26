import { User } from "./user.interface";

export interface LoginRes {
    token: string,
    user: User
}