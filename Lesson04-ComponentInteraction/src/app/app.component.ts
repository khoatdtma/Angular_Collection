import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson04-ComponentInteraction';
  public isMarried : boolean = false;
  public age : number = 18;
  
  public users : any[] = [
    {
      id:1,
      name:'Lola',
      address:'hcm'
    },
    {
      id:2,
      name:'Minn',
      address:'hn'
    },
    {
      id:3,
      name:'Maxxx',
      address:'hcm'
    },
    {
      id:4,
      name:'Poot',
      address:'dn'
    },
    {
      id:5,
      name:'Momm',
      address:'dna'
    },
  ]

}
