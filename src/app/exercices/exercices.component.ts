import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  constructor() {
    if(this.logClickNumber > 5){

    }
   }

  ngOnInit(): void {
  }

  userName = '';

  onUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

  deleteUserName(){
    this.userName = '';
  }

  secretContent = false;
  logClickNumber = 0;

  displaySecretContent(){
    this.secretContent= !this.secretContent;
    this.logClickNumber = this.logClickNumber +1;
  }

  bgColor(){
    return this.logClickNumber > 4 ? 'blue' : '';
  }

  

}
