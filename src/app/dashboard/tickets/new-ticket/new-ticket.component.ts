import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewTicketComponent {

@ViewChild('form') form?:ElementRef<HTMLFormElement>;

onSubmit(titleInput:string, requestInput:string) {
  console.log("Submitted"+titleInput+", Request: "+requestInput);
  this.form?.nativeElement.reset();
}

}
