import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() serv: {type: string, name: string, content:string};
  //input permet d'exposer la propriété 'serv' en dehors de son composant server-element

  constructor() { }

  ngOnInit(): void {
  }

}
