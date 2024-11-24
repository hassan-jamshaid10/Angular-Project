import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketComponent } from './ticket.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { RouterTestingModule } from '@angular/router/testing';  // Import RouterTestingModule
import { TicketService } from '../ticket.service';  // Import TicketService
import { FormsModule } from '@angular/forms';  // Import FormsModule if used in the component
import { NgFor } from '@angular/common';  // Import NgFor if used in the component

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TicketComponent,          // Import the component under test
        HttpClientTestingModule,  // Import HttpClientTestingModule to mock HTTP requests
        RouterTestingModule,      // Import RouterTestingModule to simulate router
        FormsModule,              // Import FormsModule if you're using forms
        NgFor                     // Import NgFor if you're using *ngFor in the template
      ],
      providers: [TicketService]    // Provide the TicketService used by the component
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
