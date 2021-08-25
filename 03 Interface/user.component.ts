import { Component } from '@angular/core'; 

import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})


export class UserComponent {
    
  user: User

  constructor() {
    this.user = {
      firstName: 'Michael',
      lastName: 'Santana',
      age: 24,
      address: {
        street: 'Comandante Castro',
        city: 'Santo Domingo',
        country: 'Republica dominicana'
      }
    }
}
}
  