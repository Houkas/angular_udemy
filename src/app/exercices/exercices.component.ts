import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})

export class ExercicesComponent implements OnInit {

  constructor() {

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
  logClickNumber = [];

  displaySecretContent(){
    this.secretContent= !this.secretContent;
    this.logClickNumber.push(this.logClickNumber.length + 1);//push ajoute un element à un tableau, length indique la longueur du tableau.
  }

  serverNCs = [];

  addServer(serverData:{serverName: string, serverContent:string}){
    this.serverNCs.push({type:'serverNormal', name: serverData.serverName, content:serverData.serverContent});
  }

  addServerBlue(serverData:{serverName: string, serverContent:string}){
    this.serverNCs.push({type:'serverBlue', name:serverData.serverName, content:serverData.serverContent});
  }

  onChangeFirst(){
    this.serverNCs[0].name = 'changed !';
  }

  onDestroyFirst(){
    this.serverNCs.splice(0, 1);
  }

}
