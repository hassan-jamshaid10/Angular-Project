import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SeatComponent } from './seat/seat.component';
import { AddSeatComponent } from './add-seat/add-seat.component';
import { TicketComponent } from './ticket/ticket.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddCustomerComponent,
    SeatComponent,
    AddSeatComponent,
    TicketComponent,
    PaymentComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // provideHttpClient(withInterceptorsFromDi())
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
