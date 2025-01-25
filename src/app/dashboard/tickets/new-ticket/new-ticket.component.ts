import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @ViewChild('titleInput') title?: ElementRef<string>;

  //private form=viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title:string,request:string}>();

  ngOnInit(): void {
    console.log("After  OnInit");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("After ViewInit");
    console.log(this.form?.nativeElement);
  }

  onSubmit(titleInput: string, requestInput: string) {
    console.log("Submitted Title: " + titleInput + ", Request: " + requestInput);
    console.log("Titile loaded via viewchild: " + this.title?.nativeElement);

    ///send the data to TicketsComponent
    let ticket: {title:string,request:string} = {
     
      title: titleInput,
      request: requestInput,
     
    };

    this.add.emit(ticket);
    this.form?.nativeElement.reset();
    //this.form().nativeElement.reset();
  }

}
