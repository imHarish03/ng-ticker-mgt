import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, HostListener } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

  @HostBinding('class.highlighted') isHighlighted = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHighlighted = true;
    console.log('Mouse entered component');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlighted = false;
    console.log('Mouse left component');
  }

}
