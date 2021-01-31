import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() serverCreatedBlue = new EventEmitter<{serverName: string, serverContent:string}>();;
  //EventEmitter est un objet qui permet d'emettre nos propres evenements, ici serverCreated et serverCreatedBlue
  // Ces deux evenements sont dans le composant parent exercices.component.html
  //@Output permet de communiquer avec son composant parent ici exercices.component

  //serverN = '';
  //serverC = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addServer(nameInput : HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value});
    //emit va nous permettre d'emettre un nouvel evenement, ici serverCreated.
    //on transmet dans le emit() l'objet en question -> ici les champs serverN et serverC
  }

  addServerBlue(nameInput: HTMLInputElement){
    this.serverCreatedBlue.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value});
  }

}
