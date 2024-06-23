import { Customer } from "./lesson2/src/customer";
import { Order } from "./lesson2/src/order";
import { Product } from "./lesson2/src/product";

const customer1 = new Customer(1, 'John Doe', 'john.doe@example.com');
const order1 = new Order(101, customer1);

const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Mouse', 50);

order1.addProduct(product1);
order1.addProduct(product2);

console.log(order1.getProducts());
console.log(order1.getTotalAmount());

order1.removeProduct(1);

console.log(order1.getProducts());
console.log(order1.getTotalAmount());
