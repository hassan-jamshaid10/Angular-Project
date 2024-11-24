import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:4200/payments';
  httpclient: any;
  apiUrl!: string;

  constructor(private http: HttpClient) { }

  createPayment(Payment: any): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}`, Payment);

  }

  updatePayment(id: number, Payment: any): Observable<any> {
    return this.httpclient.put(`${this.baseUrl}/${id}`, Payment);
  }

  deletePayment(id: number): Observable<any> {
    return this.httpclient.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  getAllPayments(): Observable<any> {
    return this.httpclient.post(this.apiUrl) as Observable<[Payment]>

  }

  getPaymentById(id: number): Observable<any> {
    return this.httpclient.get(this.apiUrl +"/"+ id) 

  }
}
