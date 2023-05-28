import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl: string;
  headers: HttpHeaders;

  private token = 'aL!HZN7Vd4xKHMxEODdf4ZkXvdKf5vDy8VjJPDl-jv244qn17NP=fXV-j=q6BMVV'

  constructor(private http: HttpClient) {
    this.baseUrl = "https://hmax-api-wzmzeliz4a-rj.a.run.app/api/dev-challange/products";
    this.headers = new HttpHeaders().set('Content-Type', 'application/json', )
                                    .set('Accept', 'application/json')
                                    .set('Access-Control-Allow-Origin', "")
                                    .set('Access-Control-Allow-Headers', "")
                                    .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
                                    .set('token', this.token)
  }

  getAll(){
    return this.http.get<Product[]>(this.baseUrl, { headers: this.headers });

  }
  getOne(id:string){
    let url: string = this.baseUrl + "/" + id;
    return this.http.get<Product[]>(url, { headers: this.headers });
  }
  insert(product: Product){
    return this.http.post<any>(this.baseUrl, product, { headers: this.headers });
  }
  update(product: Product){
    let url: string = this.baseUrl + "/" + product.id;
    return this.http.patch<any>(url, product,  { headers: this.headers });
  }
  delete(id:string){
    let url: string = this.baseUrl + "/" + id;
    return this.http.delete<any>(url, { headers: this.headers });
  }
}
