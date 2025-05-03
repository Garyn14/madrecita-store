export interface Category {
    id: number;
    name: string;
  }
  
  export interface Unit {
    id: number;
    name: string;
    symbol: string;
  }
  
  export interface ProductResponse {
    id: number;
    name: string;
    price: number;
    amount: number;
    photo?: string;
    category: Category;
    unit: Unit;
  }
  