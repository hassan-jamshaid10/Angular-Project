import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ticket } from './ticket'; // Import Ticket model

const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:4200'  // Change this as needed for production
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = `${environment.apiBaseUrl}/tickets`; // Use environment variable for base URL

  constructor(private http: HttpClient) { }

  // Create a new ticket
  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}`, ticket);
  }

  // Update an existing ticket by ID
  updateTicket(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/${id}`, ticket);
  }

  // Delete a ticket by ID
  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  // Get all tickets
  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl);
  }

  // Get a specific ticket by ID
  getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }
}
