import { Customer } from "./customer";

export class Payment {
    paymentId: number=0;
    type: string='';
    customer: Customer = new Customer();
}
