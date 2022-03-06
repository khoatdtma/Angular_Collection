import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('married') isMarried: boolean = true;
  @Input('age') ageChild: number = 19;

  //1st way
  // @Input('name') name: string='';

  //2nd way --> add by setter
  private  _name :string='';
  
  @Input()
  set name (name : string){
    this._name = name;

  }
  get name(){
    return this._name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
