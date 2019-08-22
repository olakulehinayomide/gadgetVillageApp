import { IMerchant } from './i-merchant';
import { ICategory } from './i-category';
import { ISubCategory } from './i-sub-category';
import { IReviews } from './i-reviews';

export interface IProduct {
    _id: string;
    title: string;
    description: string;
    type: string;
    avatars: any[];
    price: number;
    payment_method: string;
    bidding_increment?: number;
    bidding_start_date?: string;
    bidding_end_date?: string;
    merchant: IMerchant;
    category: ICategory;
    sub_category: ISubCategory;
    no_of_favorites: number;
    active?: boolean;
    reviews: IReviews[];
    created_at: string;
    updated_at: string;
}
