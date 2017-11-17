import { ProdutoProvider } from './../../providers/produto/produto';
import { ListprodutosPage } from './../listprodutos/listprodutos';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
    providers:[ // Aqui que carregamos a instancia para utilizar o Provider
    CategoriaProvider,
    ProdutoProvider
  ]
})
export class ListPage {
  categorias: Array<any>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaprovider: CategoriaProvider) {
  }

  ionViewDidEnter() {
      this.loadCategorias();
  }

  loadCategorias(){
    this.categoriaprovider.getCategorias().subscribe(data => {
      const response = (data as any); // Transformamos a resposta em um objeto sem tipagem, pois ai conseguimos pegar o seu valor de qualquer maneira
      const objretorno = JSON.parse(response._body); // transformamos em JSON

      this.categorias = objretorno;
    })
  }

  // Aqui é a função que abre o detalhe da página
  openCategoria(categoria){
    this.navCtrl.push(ListprodutosPage, {id: categoria.id});
    console.log("Categoria aberta foi: "+categoria.id);_
  }

  
}
