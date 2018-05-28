import {
  Input,
  Component,

  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import {DataServiceService} from '../data-service.service'; 
@Component({
  selector: 'custom-button',
  template: `
  
  
  <button (click)="handleClick()">{{label}}</button>
  <button (click)="handleClick()">second</button>
  <button (click)="handleClick()">third</button>
<br/>
<br/>
First name: <input type="text" name="FirstName" value={{firstname}}><br>
Last name: <input type="text" name="LastName" value={{lastname}}><br>
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
export class ButtonComponent implements OnInit{
  @Input() label = 'default label';

  @Output() action = new EventEmitter<number>();

  @Output() onSubmit = new EventEmitter<string>();

  private clicksCt = 0;
  public firstname ='Mickey';
  public lastname = 'Mouse';

  constructor(private dataService:DataServiceService) { }

  handleClick() {
    window.alert("hi!");
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
  handleSubmit() {
    console.log("submit clicked");
    this.onSubmit.emit(this.firstname+" "+this.lastname);

  }

  ngOnInit(){
    console.log("service:  "+this.dataService.firstname+" "+this.dataService.lastname);
    this.firstname = this.dataService.firstname;
    this.lastname = this.dataService.lastname;
  }
}