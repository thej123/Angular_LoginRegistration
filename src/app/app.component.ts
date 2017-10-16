import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  keys = [];
  bool = false


  display() {
    this.keys = (Object.keys(this.users[0]))
    this.bool = true
  }
  onSubmit(){
    this.users.push(this.user);
    console.log(this.user)
    console.log(this.users[0])
    this.user = new User();
    this.display()
    console.log(this.keys)
  }
}
