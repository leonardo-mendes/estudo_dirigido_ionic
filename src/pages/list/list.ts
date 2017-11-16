import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private url: string = "http://localhost:8082/";
  categorias: Array<any>;
  produtos: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.http.get(this.url + 'categorias')
      .map(res => res.json())
      .subscribe(data => {
        this.categorias = data;
      })



  }

  
}
