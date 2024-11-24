import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {


  payments: Payment[] = [];

  constructor(private PaymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.getPaymentList();
  }

  getPaymentList() {
    this.PaymentService.getAllPayments().subscribe((data: Payment[]) => {
      this.payments = data;
    });
  }

  updatePayment(PaymentId: number): void {
    this.router.navigate(['/add-payment', { id: PaymentId }]);
  }

  deletePayment(id: number) {
    this.PaymentService.deletePayment(id).subscribe(
      (      data: any) => {
        console.log(data);
        this.getPaymentList();
      },
      (      error: any) => console.log(error)
    );
  }

}
