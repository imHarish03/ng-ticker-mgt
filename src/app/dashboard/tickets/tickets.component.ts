import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketsComponent {
  

}
