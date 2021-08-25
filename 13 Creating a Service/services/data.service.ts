import { Injectable } from '@angular/core';
import { User } from '../Model/User';
@Injectable()

export class DataService {

  users:User[] = []
  showExtended:boolean = true
  enableAdd:boolean = true
  currentClass = {}
  currentStyle = {}
  toggleTopp:boolean = false

  user:User = {
    firstName : '',
    lastName : '',
    age : null,
    address:  {
      street: '',
      city: '',
      country:  ''
    }
  }









  constructor() {


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
      image:'http://lorempixel.com/600/600/people/3',
      balance:25500,
      register:"02/05/2020",
      hide:false
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
      image:'http://lorempixel.com/600/600/people/2',
      hide:false
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
      image:'http://lorempixel.com/600/600/people/7',
      isActive:true,
      hide:false

    }
  
  ]
this.showExtended = false
 

  this.setCurrentClass()
  this.setCurrentStyle()



  console.log(this.users,"ssssssssssssssssss");

   }


   getUsers():User[]{

    return this.users
  }







  
   setCurrentClass(){

    this.currentClass = {
      "btn-success": this.enableAdd,
    }
  }

  setCurrentStyle(){
    this.currentStyle = {
      'padding-top':this.showExtended ? '0':'20px',
      'font-size':this.showExtended ? '':'40px'
    }

  }

}
