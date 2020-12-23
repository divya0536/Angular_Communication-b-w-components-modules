import { Component, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 @Output() eventEmitter=new EventEmitter();
 
  name: string= "Varshini";
  
  constructor() { }

  ngOnInit() {

  }
  display(){
    this.eventEmitter.emit(this.name);
    
  }
  
  
}
