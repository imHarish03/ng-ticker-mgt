import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, HostListener } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, TicketsComponent, TrafficComponent, ServerStatusComponent, DashboardItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {

}
