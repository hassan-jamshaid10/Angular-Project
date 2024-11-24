import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddSeatComponent } from './add-seat/add-seat.component';
import { SeatComponent } from './seat/seat.component';
import { TicketComponent } from './ticket/ticket.component';
import { PaymentComponent } from './payment/payment.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';

// Define routes
export const routes: Routes = [
    { path: "", component: CustomerComponent },
    { path: "customers", component: CustomerComponent },
    { path: "seats", component: SeatComponent },
    { path: "tickets", component: TicketComponent },
    { path: "payments", component: PaymentComponent },
    { path: "add-customer", component: AddCustomerComponent },
    { path: "add-seat", component: AddSeatComponent },
    { path: "add-payment", component: AddPaymentComponent }
];

