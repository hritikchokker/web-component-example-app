import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-popup',
  template: `
  <div class="wrapper">
    <div class="container" [style.height]="height" [style.width]="width" >
    <p>{{message}}</p>
    </div>
    <div class="wrapper__btn">
      <button (click)="onClick.emit(true)">
        close
      </button>
    </div>
  </div>
  `,
  styles: [`
  :host{
    background-color:red;
  }
  .wrapper{
    display:flex;
    width:100%;
      z-index:10;
      position:relative;
      flex-direction:column;
    justify-content:center;
  }
  .wrapper__btn{
  text-align:center;
  margin-top:10px
  }
  .wrapper__btn > button{
        padding: 10px 30px;
        background-color: #73ee63;
        font-size:1rem;
        border-radius:10px;
          cursor:pointer;
        border:none;
  }
  .container{
  background-color:grey;
  text-align:center;
  margin: 0 auto;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.container:hover{
  transform:scale(1.1);
  transition:.8s ease all;
}
  `]
})
export class PopupComponent implements OnInit {

  @Input() showPopup = false;
  @Input() message = 'popup web component works';
  @Input() height = '300px';
  @Input() width = '500px';
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
