import { IUser } from './i-user';

export interface IAuth {
    status?: string;
    token: string;
    user: IUser;
}
