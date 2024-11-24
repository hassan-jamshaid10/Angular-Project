import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeatService } from '../seat.service';
import { Seat } from '../seat';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-seat',
  standalone: true,
  imports: [NgFor],
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent {


  seats: Seat[] = [];

  constructor(private SeatService: SeatService, private router: Router) { }

  ngOnInit(): void {
    this.getSeatList();
  }

  getSeatList() {
    this.SeatService.getAllSeats().subscribe((data: Seat[]) => {
      this.seats = data;
    });
  }

  updateSeat(SeatId: number): void {
    this.router.navigate(['/add-seat', { id: SeatId }]);
  }

  deleteSeat(id: number) {
    this.SeatService.deleteSeat(id).subscribe(
      (      data: any) => {
        console.log(data);
        this.getSeatList();
      },
      (      error: any) => console.log(error)
    );
  }

}
