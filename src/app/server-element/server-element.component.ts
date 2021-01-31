import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,//permet de désactiver l'encapsulation des attributs du composant et donc d'utiliser
  //du css à l'exterieur de ce composant alors qu'il est appellé dans ce dernier.
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked,
OnDestroy {

  @Input('serv') element: {type: string, name: string, content:string};
  //@Input permet d'exposer la propriété 'serv' en dehors de son composant server-element.
  // Par defaut chaque propriété d'un composant ne sont que accessible dans ce meme composant.
  // Ici 'serv' est un alias pour assigner un autre nom de propriété que element.
  //@Input va chercher la propriete serv dans le composant exercices.componant

  @Input() name : string;

  @ViewChild('heading', {static:true}) header : ElementRef;

  constructor() { 
    console.log('constructor appellé');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges appellé');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit appellé');
    
  }

  ngDoCheck(){
    console.log('ngDoCheck appellé');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit appellé');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked appellé');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit appellé');
    console.log('Text content : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked appellé');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy appellé');
  }
  
}
