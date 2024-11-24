import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers: [TicketService]  // Provide the TicketService here, not HttpClient
})
export class TicketComponent {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.getTicketList();
  }

  getTicketList() {
    this.ticketService.getAllTickets().subscribe((data: Ticket[]) => {
      this.tickets = data;
    });
  }

  updateTicket(ticketId: number): void {
    this.router.navigate(['/add-ticket', { id: ticketId }]);
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe(
      (data: any) => {
        console.log(data);
        this.getTicketList();
      },
      (error: any) => console.log(error)
    );
  }
}
