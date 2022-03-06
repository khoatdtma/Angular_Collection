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

  public names :string[]=['HCM','Kiev','Berlin','London'];
  
  public products = [
    {
      id:1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjAOekGegQ5FdH0PV2UQtANo21clXIGOVmg&usqp=CAU',
      name:'iphone 6',
      price:123
    },
    {
      id:2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjAOekGegQ5FdH0PV2UQtANo21clXIGOVmg&usqp=CAU',
      name:'iphone 8',
      price:345
    },
  ]

  public productsFromAPI = [
    {
      id:1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjAOekGegQ5FdH0PV2UQtANo21clXIGOVmg&usqp=CAU',
      name:'iphone 6',
      price:123
    },
    {
      id:2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjAOekGegQ5FdH0PV2UQtANo21clXIGOVmg&usqp=CAU',
      name:'iphone 8',
      price:345
    },
    {
      id:3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjAOekGegQ5FdH0PV2UQtANo21clXIGOVmg&usqp=CAU',
      name:'iphone 7',
      price:456
    },
    {
      id:4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjAOekGegQ5FdH0PV2UQtANo21clXIGOVmg&usqp=CAU',
      name:'iphone 7',
      price:456
    },
    {
      id:5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjAOekGegQ5FdH0PV2UQtANo21clXIGOVmg&usqp=CAU',
      name:'iphone 7',
      price:456
    },

  ]

  public temp:any;

  public users : any[] = [
    {
      name:'Lynq',
      country:'England'
    },
    {
      name:'Mark',
      country:'USA'
    },
    {
      name:'Steven',
      country:'England'
    },
    {
      name:'Joss',
      country:'Holland'
    },
    {
      name:'Manolito',
      country:'England'
    },
  ]



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

  onLoadData(){
    if(this.temp==null){
      this.temp = this.products;
    }
    this.products = this.productsFromAPI;
  }
  onBackToLocal(){
    this.products = this.temp;
  }

  myTrackByFunction(index:any , item:any){
    return item.id;
  }

}
