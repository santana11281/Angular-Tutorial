import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = []
  showExtended:boolean = true
  enableAdd:boolean = true

  constructor() { }

  ngOnInit():void {

    this.users = [
      {
      firstName: 'Michael',
      lastName: 'Santana',
      age: 24,
      address: {
        street: 'Comandante Castro',
        city: 'Santo Domingo',
        country: 'Republica dominicana'
      },
      image:'http://lorempixel.com/600/600/people/3'
    },
    {
      firstName: 'Ambar',
      lastName: 'Santana',
      age: 24,
      address: {
        street: 'Comandante Castro',
        city: 'Santo Domingo',
        country: 'Republica dominicana'
      },
      image:'http://lorempixel.com/600/600/people/2'
    },
    {
      firstName: 'Ninja',
      lastName: 'Net',
      age: 24,
      address: {
        street: '13 Main st',
        city: 'Miami',
        country: 'Florida'
      },
      image:'http://lorempixel.com/600/600/people/5'
    }
  
  ]
this.showExtended = false
  this.addUser({
    firstName: 'Ninja',
    lastName: 'Net',
    age: 24,
    address: {
      street: '13 Main st',
      city: 'Miami',
      country: 'Florida'
    },
    image:'http://lorempixel.com/600/600/people/6'

  })

  }

  addUser(user:User){
    this.users.push(user)
      
  }


}
