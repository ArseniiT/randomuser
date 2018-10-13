import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [
    {name: 'Carl'},
    {name: 'John'},
    {name: 'Sylvian'},
    {name: 'Bob'},
    {name: 'Bob'},
    {name: 'Jackie'}
  ]
}
