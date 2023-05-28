import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { Product } from '../product';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit{

  item: Product;

  constructor(protected route: ActivatedRoute, protected router: Router, private service: ProductService){
    this.item = new Product();
    this.item.active = true;

  }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get("id");

    if(id != null){
      this.service.getOne(id).subscribe((data:any) => this.item = data);
    }
  }

}
