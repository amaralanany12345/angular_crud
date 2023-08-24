import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
newProduct:Product={} as Product
constructor(private appService:AppService,private router:Router){

}
addProduct(){
    this.appService.addProduct(this.newProduct).subscribe((prd)=>{
      this.router.navigateByUrl('/')
    })
}

}
