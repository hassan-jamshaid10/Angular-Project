import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {


  customers: Customer[] = [];
  payment: Payment = new Payment();
  submitted = false;
  isUpdateMode = false;

  constructor(
    private paymentService: PaymentService,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {


    // Fetch Customers
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.log(error);
      }
    );



    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isUpdateMode = true;
        this.paymentService.getPaymentById(params['id']).subscribe(
          (data) => {
            this.payment = data;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  newPayment(): void {
    this.submitted = false;
    this.payment = new Payment();
  }

  save() {
    if (this.isUpdateMode) {
      this.paymentService.updatePayment(this.payment.paymentId, this.payment).subscribe(
        (data) => {
          console.log('Payment updated successfully!', data);
          this.payment = new Payment(); 
          this.gotoList();
        },
        (error) => {
          console.error('Error updating payment:', error);
        }
      );
    } else {
      this.paymentService.createPayment(this.payment).subscribe(
        (data) => {
          console.log('Payment added successfully!', data);
          this.payment = new Payment(); 
          this.gotoList();
        },
        (error) => {
          console.error('Error adding payment:', error);
        }
      );
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/payments']);
  }
}

