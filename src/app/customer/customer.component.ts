import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
// import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import id from '@angular/common/locales/id';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService, HttpClient]

})
export class CustomerComponent {
  
  
  customers!: [Customer]
  constructor(private CustomerService: CustomerService, private router: Router) { }

  ngOnInit(){
    this.CustomerService.getAllCustomers().subscribe(
      data => this.customers = data
    )
  }

 

  updateCustomer(_: number) {
    this.router.navigateByUrl("/add-customer/"+id)
  }

  deleteCustomer(id: number) {
    this.CustomerService.deleteCustomer(id).subscribe(_ => this.ngOnInit())
  }

}
