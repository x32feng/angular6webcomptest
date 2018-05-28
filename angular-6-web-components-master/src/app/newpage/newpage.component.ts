import { Component, OnInit } from '@angular/core';
import {
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {DataServiceService} from '../data-service.service'; 
@Component({
  selector: 'custom-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {

  @Input()
  set json(json: any) {
   // this.obj = JSON.parse(json);
   console.log("newpage json:  "+this.dataService.firstname+" "+this.dataService.lastname);
    this.dataService.firstname = json.firstname;
    this.dataService.lastname = json.lastname;
  }

  public firstname ='Mickey';
  public lastname = 'Mouse';

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
  }

}
