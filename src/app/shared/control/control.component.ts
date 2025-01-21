import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent {
  //@Input({ required: true }) title!: string;
  label=input.required<string>();

  //@HostBinding('class') className='control';
  //@HostListener

  private el=inject(ElementRef);
  
  onClick(){
    console.log("Clicked !!!");
    console.log(this.el);
  }

}
