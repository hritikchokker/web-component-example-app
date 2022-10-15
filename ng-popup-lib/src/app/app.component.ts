import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <lib-popup (onClick)="clickHandler($event)" [showPopup]="true"></lib-popup>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-popup-lib';
  showPopup = true;
  clickHandler(ev: boolean) {
    console.log(ev, 'eveve');
  }
}
