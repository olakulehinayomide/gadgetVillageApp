import { ILogin } from './i-login';

export interface ISignup extends ILogin {
    firstname: string;
    lastname: string;
    middlename: string;
    phoneNumber?: string;
}
