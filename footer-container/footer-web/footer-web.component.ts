import { Component } from '@angular/core';

@Component({
  selector: 'footer-web',
  standalone: true,
  templateUrl: './footer-web.component.html',
  styles: [`
  .footer{
    &__text{
      color: aqua;
    }
    &__link{
      color: orange;
    }
  } 
`]
})
export class FooterWebComponent {
  
}