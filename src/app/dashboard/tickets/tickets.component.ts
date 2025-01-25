import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  tickets: Ticket[] = [];

  onAdd(data: { title: string, request: string }) {
    console.log("Request Reached TicketsComponent: " + data.title);

    const tempTicket: Ticket = {
      id: Math.random().toString(),
      title: data.title,
      request: data.request,
      status: 'open'
    };

    this.tickets.push(tempTicket);
    console.log(this.tickets.length);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket,status:'closed'}
      }
      return ticket;
    });
  }


}
