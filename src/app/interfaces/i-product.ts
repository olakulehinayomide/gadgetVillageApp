import { IMerchant } from './i-merchant';

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
    no_of_favorites: number;
    active?: boolean;
    created_at: string;
    updated_at: string;
}
