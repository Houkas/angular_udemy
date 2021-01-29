import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverN = '';
  serverC = '';

  constructor() { }

  ngOnInit(): void {
  }

  addServer(){
    //this.serverNC.push({type:'serverNormal', name:this.serverN, content:this.serverC});
  }

  addServerBlue(){
    //this.serverNC.push({type:'serverBlue', name:this.serverN, content:this.serverC});
  }

}
