import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
  providers: [
    ProdutoProvider
  ]
})
export class ProdutoPage {

  public idproduto;
  public produto;

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoprovider: ProdutoProvider) {
  }

  ionViewDidLoad() {
    // Essa função abaixo pegaria todos os parametros passados por navegação porem so queremos o id
    this.idproduto = this.navParams.get("id");
    console.log("Código de produto recebeu o id: " + this.idproduto);

    // Ja utilizamos uma função muito parecida no feed.ts
    this.produtoprovider.getProduto(this.idproduto).subscribe(
      data => {
        const response = (data as any); // Transformamos a resposta em um objeto sem tipagem, pois ai conseguimos pegar o seu valor de qualquer maneira
        const objretorno = JSON.parse(response._body); // transformamos em JSON

        this.produto = objretorno;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}
