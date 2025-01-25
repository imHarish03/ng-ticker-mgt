import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data=input.required<Ticket>({})
  dataVisible=signal(false);
  close=output();

  onToggleDetails(){
   // this.dataVisible.set(!this.dataVisible());
    this.dataVisible.update( (wasVisible) => !wasVisible );
  }

  onMarkAsCompleted(){
    this.close.emit();
  } 
  

}
