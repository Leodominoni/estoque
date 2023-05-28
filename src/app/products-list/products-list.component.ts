import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  items!: Product[];

  constructor(private service: ProductServiceService){}

  ngOnInit(): void {
    this.service.getAll().subscribe((data: any) => {
      this.items = data;
    });
  }
}
