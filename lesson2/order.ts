import { Product } from "./product";
import { Customer } from "./customer";

export class Order {
    private orderId: number;
    private customer: Customer;
    private products: Product[];
    private totalAmount: number;

    constructor(orderId: number, customer: Customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = [];
        this.totalAmount = 0;
    }

    // getters
    getOrderId(): number {
        return this.orderId;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getTotalAmount(): number {
        this.totalAmount = this.calculateTotal();
        return this.totalAmount;
    }

    // methods
    addProduct(product: Product): void {
        this.products.push(product);
        this.calculateTotal();
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(item => item.getId() !== productId);
        this.calculateTotal();
    }

    calculateTotal(): number {
        let result: number = 0;
        for (let i = 0; i < this.products.length; i++) {
            result += this.products[i].getPrice();
        }
        return result;
    }
}
