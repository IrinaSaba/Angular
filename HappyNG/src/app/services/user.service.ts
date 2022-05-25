import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): User[] {
   return [
     new User('Ben',45),
     new User('Irina',55),
     new User('Aliona',35),
     new User('Klava',25),
   ]
  }

  constructor() { }
}
