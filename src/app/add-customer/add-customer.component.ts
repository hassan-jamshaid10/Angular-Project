import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {


  customer: Customer = new Customer();
  submitted = false;
  isUpdateMode = false;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {




    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isUpdateMode = true;
        this.customerService.getCustomerById(params['id']).subscribe(
          (data: any) => {
            this.customer = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    });
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    if (this.isUpdateMode) {
      this.customerService.updateCustomer(this.customer.customerId, this.customer).subscribe(
        (data) => {
          console.log('Customer updated successfully!', data);
          this.customer = new Customer(); 
          this.gotoList();
        },
        (error) => {
          console.error('Error updating customer:', error);
        }
      );
    } else {
      this.customerService.createCustomer(this.customer).subscribe(
        (data) => {
          console.log('Customer added successfully!', data);
          this.customer = new Customer(); 
          this.gotoList();
        },
        (error: any) => {
          console.error('Error adding customer:', error);
        }
      );
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}
