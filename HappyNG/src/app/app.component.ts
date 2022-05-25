import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'HappyNG need to be apdated';
  name: string;
  age: number | null;

  users: User[] = [];

constructor(private userService: UserService){
  this.users = this.userService.getUsers();
}

addUser(): void {
  this.users.push(new User(this.name, this.age))
  this.clearUser();
}
  clearUser(): void {
    this.name = "";
    this.age = null;
  }

}
