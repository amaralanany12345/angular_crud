import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editedProduct:Product={} as Product
  activatedroute: any;
  constructor(private router:Router,private appService:AppService){

  }

  ngOnInit(): void {
    this.editedProduct=history.state.data
  }
  editProduct(id:number){
    this.appService.editProduct(id,this.editedProduct).subscribe((prd)=>{
      this.router.navigateByUrl('/')
    })
  }
}
