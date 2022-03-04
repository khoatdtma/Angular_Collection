import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-ways-binding',
  templateUrl: './two-ways-binding.component.html',
  styleUrls: ['./two-ways-binding.component.css']
})
export class TwoWaysBindingComponent implements OnInit {

  public title : string = 'Two ways binding'; 
  public name : string = ''; 
  public gender : number= 1 ;

  constructor() {
   }

  ngOnInit(): void {
  }

}
