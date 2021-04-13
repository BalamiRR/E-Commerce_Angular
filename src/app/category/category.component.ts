import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Kategori Listesi";
  categories : Category[] = [
    {id:1, name:"Elektronic"},
    {id:2, name:"Pc"},
    {id:3, name:"Contacting"},
    {id:4, name:"Music"},
    {id:5, name:"Drink"}
  ];

  ngOnInit(): void {
  }
}
