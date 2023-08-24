import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions

  constructor(private httpClient:HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'content-Type':'application/json',
        // Authorization:"my-auth-token"   
      }),
    }
  }

  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:3000/products')
  }

  addProduct(newPrd:Product):Observable<Product>{
    return this.httpClient.post<Product>('http://localhost:3000/products',JSON.stringify(newPrd),this.httpOptions)
    .pipe(
      retry(2),
      catchError((err:any)=>{
        console.error(err)
        return throwError(()=> new Error('post error'))
      })
    )
  }

  removeProduct(id:number):Observable<Product>{
    return this.httpClient.delete<Product>(`http://localhost:3000/products/${id}`)
  }

  editProduct(id:number,value:Product):Observable<Product>{
    return this.httpClient.put<Product>(`http://localhost:3000/products/${id}`,JSON.stringify(value),this.httpOptions)
    .pipe(
      retry(2),
      catchError((err:any)=>{
        console.error(err)
        return throwError(()=> new Error('post error'))
      })
    )
  }
}
