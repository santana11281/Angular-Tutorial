import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/User';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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


  constructor(private dataService: DataService) {  }

  ngOnInit():void {

   this.users = this.dataService.getUsers()

// this.loaded = true
  }

  addUser(){
 
    this.users.push(this.user)
    this.user ={

      firstName : '',
      lastName : '',
      age : 0,
      address:  {
        street: '',
        city: '',
        country:  ''
      }
    
  
    
  
    }
  }
 
 
  toggleHide(user:User){

    user.hide =!user.hide
  }

  onSubmit(e:any){

    console.log(e.target.value);
e.preventDefault()
  
  }





  toggleTop(){

if(this.toggleTopp){
this.toggleTopp = false
} else{
  this.toggleTopp = true
}
  }

 


  fireEvent(e:any){

  
return e.target.value
  }

}
