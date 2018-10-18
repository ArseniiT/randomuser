import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {

  users = [];
  searchStr :string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe( data => {
      this.users = data;
    })
  }


}
