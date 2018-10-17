import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  isChecked: boolean = false;

  @Input() userComponent;

  onClick() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);

  }

}
