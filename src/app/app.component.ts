import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  firstName='';
  lastName='';

  ngOnInit(){
    this.firstName='Naveen';
    this.lastName='Arebailu';
  }

  getTitleNameValues(firstName, lastName)
  {
    this.title=`${firstName} ${lastName}`;
  }
}
