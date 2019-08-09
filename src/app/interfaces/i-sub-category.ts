import { ICategory } from './i-category';

export interface ISubCategory {
    _id: string;
    name: string;
    category: ICategory;
    created_at?: Date;
    updated_at?: Date;
}
