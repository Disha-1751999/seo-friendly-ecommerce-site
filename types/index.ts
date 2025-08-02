import { ReactNode } from 'react';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductListProps = {
  products: ProductType[];
  title: string;
  currentPage?: number;
  totalPages?: number;
  showPagination?: boolean;
};


 export interface ModalLayoutProps {
    children: ReactNode;
    modal: ReactNode;
}


export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string; 
};

export type CartState = {
  items: CartItem[];
};


export interface Order {
  id: string;
  fullName: string;
  address: string;
  phone: string;
  items: any[];
  totalAmount: number;
  orderDate: string;
}

export interface OrderState {
  orders: Order[]
}


