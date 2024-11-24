import { Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Seat } from '../seat';
import { SeatService } from '../seat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-seat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-seat.component.html',
  styleUrls: ['./add-seat.component.css']
})
export class AddSeatComponent {



  seat: Seat = new Seat();
  submitted = false;
  isUpdateMode = false;

  constructor(
    private seatService: SeatService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {




    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isUpdateMode = true;
        this.seatService.getSeatById(params['id']).subscribe(
          (data) => {
            this.seat = data;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  newSeat(): void {
    this.submitted = false;
    this.seat = new Seat();
  }

  save() {
    if (this.isUpdateMode) {
      this.seatService.updateSeat(this.seat.seatId, this.seat).subscribe(
        (data) => {
          console.log('Seat updated successfully!', data);
          this.seat = new Seat(); 
          this.gotoList();
        },
        (error) => {
          console.error('Error updating seat:', error);
        }
      );
    } else {
      this.seatService.createSeat(this.seat).subscribe(
        (data) => {
          console.log('Seat added successfully!', data);
          this.seat = new Seat(); 
          this.gotoList();
        },
        (error) => {
          console.error('Error adding seat:', error);
        }
      );
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/seats']);
  }
}



