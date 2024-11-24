import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:4200/passengers';

  constructor(private http: HttpClient) { }

  createCustomer(Customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, Customer);
  }

  updateCustomer(id: number, Customer: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, Customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
