import { IUser } from './auth/i-user';

export interface IHttpResponse {
    status: string;
    message?: string;
    data?: any;
    user?: IUser;
    token?: string;
    redirect_to_activate?: boolean;
}
