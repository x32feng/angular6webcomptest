import {
  Input,
  Component,

  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
  
  
  <button (click)="handleClick()">{{label}}</button>
  <button (click)="handleClick()">second</button>
  <button (click)="handleClick()">third</button>
<br/>
<br/>
First name: <input type="text" name="FirstName" value="Mickey"><br>
Last name: <input type="text" name="LastName" value="Mouse"><br>
<br/>
<br/>
<button id="sbtn" (click)="handleSubmit()">SUBMIT</button>



`,
  
  styles: [
    `
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `
  ],

})
export class ButtonComponent {
  @Input() label = 'default label';

  @Output() action = new EventEmitter<number>();

  @Output() onSubmit = new EventEmitter<boolean>();

  private clicksCt = 0;

  handleClick() {
    window.alert("hi!");
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
  handleSubmit() {
    console.log("submit clicked");
    this.onSubmit.emit(true);

  }
}
