export interface product {
    id: number;
    title: string;
    img: string;
    desc: string;
    price: string;
    category:string;
    quantity?: number;
}

export interface category {
    id: number,
    img: string,
    title: string,
    category: string,
}

export interface CartState {
    hidden: boolean;
    cartItems: product[];
    shoppingCost: number;
  }
  
  export interface AddToCartPayload {
    product: product;
  }

  export interface Order {
    id: number;
    name: string;
    quantity: number;
  }
  
  export interface OrdersState {
    orders: Order[] | null;
    loading: boolean;
    error: string | null;
  }

  export interface OrderAxios {
    id: string;
    items: string[];
    total: number;
  }

  export interface OrdersResponse {
    data: Order[];
  }
  
  export interface OrderResponse {
    data: Order;
  }

  export interface User {
    token: string;
  }