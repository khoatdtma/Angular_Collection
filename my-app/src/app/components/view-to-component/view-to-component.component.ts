import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
  public title: string = 'Event to compoent';
  public count: number = 0;
  public username: string = '';
  public name: string = '';
  onDblClickAction(event: Event) {

  }

  onIncrease(event: Event) {
    this.count++;
  }

  onKeyUp(event: Event) {
    var x = (<HTMLInputElement>event.target);
    this.username = x.value;
  }

  onKeyUpEnter(event: Event) {
    var x = (<HTMLInputElement>event.target);
    this.name = x.value;
    console.log(x.value)
  }

  onClickAction(event: Event) {
    console.log(event);
    //print button lable
    console.log((<HTMLButtonElement>event.target).innerHTML);
    //print class name of button
    console.log((<HTMLButtonElement>event.target).className);
    //set inner HTML for button


    (<HTMLButtonElement>event.target).innerHTML = 'Click me :)) :{}'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
