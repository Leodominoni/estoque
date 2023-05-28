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
    this.gelAll()

  }

  gelAll(){
    this.service.getAll().subscribe((data: any) => this.items = data);
  }

  delete(id: string) {
    this.service.delete(id).subscribe(
      (data: any) => this.callbackSucess(),
      (error: any) => this.callbackError(error)
    );
  }

  private callbackSucess(){
    alert('Registro registrado com sucesso')
    this.gelAll()
  }

  private callbackError(error:any){
    alert('Registro registrado com sucesso')
    console.log(error)
  }
}
