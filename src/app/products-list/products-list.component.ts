import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  items!: Product[];

  constructor(private service: ProductService){}

  ngOnInit(): void {
    this.service.getAll().subscribe((data: any) => {
      this.items = data;
    });
  }
}
