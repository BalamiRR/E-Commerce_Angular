import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor() {

  }
  title = "ProductList";
  filterText = ""
  products : Product[] = [
    {id:1, name: "Laptop", price:200, categoryId:1, description: "Asus Zenbook", imageUrl:"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"},
    {id:2, name: "Mouse", price:690, categoryId:2, description: "DeLL", imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"},
    {id:3, name: "Screen", price:170, categoryId:3, description: "Casper", imageUrl:"https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:4, name: "MousePad", price:150, categoryId:4, description: "Lenovo", imageUrl:"https://images.unsplash.com/photo-1616071358409-ef30a44a90bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:5, name: "Keyboard", price:300, categoryId:5, description: "Toshiba", imageUrl:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"},
    {id:6, name: "Kasa", price:2500, categoryId:6, description: "MacBook", imageUrl:"https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1002&q=80"},
  ]
//https://images.unsplash.com/photo-1545177693-466cc24acb1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80
  ngOnInit(): void {

  }
}