import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from "../../providers/produto/produto";
import { ProdutoPage } from '../produto/produto';

@IonicPage()
@Component({
  selector: 'page-listprodutos',
  templateUrl: 'listprodutos.html',
  providers: [
    ProdutoProvider
  ]
})
export class ListprodutosPage {

  produtos: Array<any>;
  public idcategoria;

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoprovider: ProdutoProvider) {
  }


  ionViewDidLoad() {
    // Essa função abaixo pegaria todos os parametros passados por navegação porem so queremos o id
    this.idcategoria = this.navParams.get("id");
    console.log("Lista de produtos recebou o id: "+this.idcategoria);

    // Ja utilizamos uma função muito parecida no feed.ts
    this.produtoprovider.getListProdutos(this.idcategoria).subscribe(
      data => {
      const response = (data as any); // Transformamos a resposta em um objeto sem tipagem, pois ai conseguimos pegar o seu valor de qualquer maneira
      const objretorno = JSON.parse(response._body); // transformamos em JSON

      this.produtos = objretorno;
      console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

    // Aqui é a função que abre o detalhe da página
    openProduto(produto){
      console.log("O Produto aberto foi: "+produto.id);
      this.navCtrl.push(ProdutoPage, {id: produto.id});
    }
  

}
