import { Component, OnInit } from '@angular/core';


@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  /*template: `<app-server></app-server>
  <app-server></app-server>
  <p>Bonjour</p>`,/*Ecriture html*/
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  servers = ['Apache', 'Nginx'];

  serverCreated = false;

  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);

  }

  ngOnInit(): void {
  }

  serverCreationStatus = 'No server was created';

  onCreateServer(){
    this.serverCreationStatus = 'Server was created ! Name is : ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  serverName = 'Ubuntu';

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  userName = '';

  onUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

  deleteUserName(){
    this.userName = '';
  }
  
}
