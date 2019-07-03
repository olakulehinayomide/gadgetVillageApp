import { ILogin } from './i-login';

export interface ISignup extends ILogin {
    username: string;
    fullname: string;
    phoneNumber?: string;
}
