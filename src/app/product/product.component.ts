import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from './../services/alertify.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})

export class ProductComponent implements OnInit {
  
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService
  ){}

  title = "ProductList"
  filterText = ""
  products : Product[]
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    });
  }
  /*https://images.unsplash.com/photo-1545177693-
  466cc24acb1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfH
  x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80*/
  
  addToCart(product){
    this.alertifyService.succeed(product.name + "Product added")
  }

}
