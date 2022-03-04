import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

  public name: string = 'khoa';
  public age: number = 34;
  public isMarried: boolean = true;
  public imgWidth : number = 300;
  public isDisable: boolean = true;

  public user = {
    name: 'Dever',
    age: 23,
    isMarried:false
  }


  public imgLink : string = 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRxXZmsthm2MMU3oXsQLr5Nx68Cd-rngbDJJZZ-djOZdFnnToFBEIIoyj3hqDCxfdfVoG2uuaA9a4c84nKU9Ks';

  constructor() { }

  ngOnInit(): void {
  }

  // DOES NOT WORK
  // showInfo(){
  //   return 'name:${this.user['name']}';
  // }
}
