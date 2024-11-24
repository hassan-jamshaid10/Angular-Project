import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddSeatComponent } from './add-seat/add-seat.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SeatComponent } from './seat/seat.component';
import { TicketComponent } from './ticket/ticket.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CustomerComponent,AddSeatComponent,AddCustomerComponent,SeatComponent,TicketComponent,PaymentComponent,AddPaymentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusApplication';
}
