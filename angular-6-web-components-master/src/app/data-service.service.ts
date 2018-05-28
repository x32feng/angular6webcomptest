import { Injectable } from '@angular/core';
import {
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
@Input()
set submit(data: string) {
  // this.obj = JSON.parse(json);
 
   
 }
  public firstname = "firsT";
  public lastname = "LAST";

  
  constructor() { }
}
