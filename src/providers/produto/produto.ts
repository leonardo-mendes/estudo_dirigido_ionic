import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider {

  private url: string = "http://localhost:8082/";

  constructor(public http: Http) {
    console.log('Hello CategoriaProvider Provider');
  }

  getListProdutos(idCategoria:string) {
    return this.http.get(this.url + "categorias/" + idCategoria);
  }

  getProduto(idProduto:string) {
    return this.http.get(this.url + "produtos/" + idProduto);
  }

  getProdutos() {
    return this.http.get(this.url + "produtos");
  }

  deleteProduto(idProduto:string) {
    return this.http.delete(this.url + "produtos/" + idProduto);
  }

}
