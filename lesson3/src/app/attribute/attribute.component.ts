import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  public isSpecial = true;
  public isSpecial2 = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.isSpecial = !this.isSpecial;
  }

  onToggle2(){
    this.isSpecial2 = !this.isSpecial2;
  }
  setClasses(){
    return {
      'border-blue': this.isSpecial2,
      'cl-red': this.isSpecial2,
      'pd-10':this.isSpecial2
  }
  }
}
