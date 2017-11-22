import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';

/**
 * Generated class for the MeusprodutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meusprodutos',
  templateUrl: 'meusprodutos.html',
  providers: [
    ProdutoProvider
  ]
})
export class MeusprodutosPage {

  produtos: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoprovider: ProdutoProvider, private toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadPage();
  }

  loadPage(){
    this.produtoprovider.getProdutos().subscribe(
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

  showConfirm(produto) {
    let confirm = this.alertCtrl.create({
      title: 'Você deseja excluir esse Produto?',
      buttons: [
        {
          text: 'NÃO',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'SIM',
          handler: () => {
            console.log("O Produto que irá ser deletado: "+produto.id);
            this.produtoprovider.deleteProduto(produto.id);
            console.log("Fez a chamada do metodo que deletou o produto: "+produto.id);
            this.ionViewDidLoad();
          }
        }
      ]
    });
    confirm.present();
  }

}
