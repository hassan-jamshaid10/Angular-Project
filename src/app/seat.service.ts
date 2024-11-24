import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {


  private baseUrl = 'http://localhost:4200/seats';

  constructor(private http: HttpClient) { }

  createSeat(Seat: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, Seat);
  }

  updateSeat(id: number, Seat: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, Seat);
  }

  deleteSeat(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllSeats(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getSeatById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
