import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData=[
    {"id":1,"name":"sree"},
    {"id":2,"name":"vyshu"},
    {"id":3,"name":"Madhu"},
  ];

  data(name: string){
    alert(`Data was ${name}`);
  }
  title = 'json data from parent to child' ;

  
}
