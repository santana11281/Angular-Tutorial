import { Component } from "@angular/core";

@Component({

    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css'],


})

export class UserComponent {
firstName='Michael';
lastName = 'Santana'
age=24

constructor(){
console.log("constructor");
  this.sayHI()
}

sayHI(){
    console.log(`hi ${this.firstName}`);
}


}