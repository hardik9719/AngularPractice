import { Component, OnInit } from '@angular/core';
import { IProduct } from './prodInterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle: string ='Product Lists';
  colors=["red","blue","green"];
  imageWidth:number=75;
  imageMargin:number=2;
  col:string;
  _textFilter: string;
  public get textFilter(): string {
    return this._textFilter;
  }
  public set textFilter(value: string) {
    this._textFilter = value;
    console.log(value);
    this.col=value
    // this.filteredProducts=this.performFilter(this._textFilter);
  }
  
  
  
  
  
  
  showImage:boolean=false;
  filteredProducts:IProduct[];
  products:IProduct[] = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":170.00,"quantity":56840,"imageUrl":"assets/images/screwdriver.jpg"},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":302.00,"quantity":9358,"imageUrl":"assets/images/screwdriver.jpg"},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":129.50,"quantity":90316,"imageUrl":"assets/images/screwdriver.jpg"},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":760.00,"quantity":5899,"imageUrl":"assets/images/screwdriver.jpg"}
  ];
  toggleImage():void{
    this.showImage=!this.showImage;
  }
  constructor() {
    this._textFilter="Lic";
   }

  ngOnInit(): void {
  }
  // performFilter(filterVal:string): IProduct[]{
  //   this.filteredProducts= this.products.filter((product:IProduct)=>
  //   product.name.indexOf(this.filterVal)!=-1
  //   );
  //   return this.filteredProducts;
  // }
  


}
