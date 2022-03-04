import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  public isShow = false;
  public name = '';

  public age:number = 0;
  public isShowAge = false;

  public coffeeType = '';

  



  onClickCoffee(event:Event){
    var x = (<HTMLInputElement>event.target);
    this.coffeeType = <string>x.parentElement?.textContent;
  }

  onToggle(event:Event){
      this.isShowAge = !this.isShowAge;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
