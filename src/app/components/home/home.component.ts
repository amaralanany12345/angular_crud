import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:Product[]=[]
  constructor(private appService:AppService,private router:Router){

  }
  ngOnInit(): void {
    this.appService.getAllProduct().subscribe(prd=>{
      this.productList=prd
    })
  }
  remove(index:number,id:number){
    this.appService.removeProduct(id).subscribe((prd)=>{
      this.productList.splice(index,1)
      this.router.navigateByUrl('/')
    })
  }
  edit(index:number,id:number){
    this.router.navigateByUrl(`/editProduct/${id}`,{state:{data:this.productList[index]}})
  }
}
