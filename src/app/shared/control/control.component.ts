import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit{

  //@Input({ required: true }) title!: string;
  label=input.required<string>();

  //@HostBinding('class') className='control';
  //@HostListener

  private el=inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  
  ngAfterContentInit(): void {
    console.log(""+this.control);
  }

  onClick(){
    console.log("Clicked !!!");
    console.log(this.el);

    console.log("Content child loaded: "+this.control);
  }

}
