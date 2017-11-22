import { ProdutoPageModule } from './../pages/produto/produto.module';
import { ListprodutosPageModule } from './../pages/listprodutos/listprodutos.module';
import { ProdutoPage } from './../pages/produto/produto';
import { ListprodutosPage } from './../pages/listprodutos/listprodutos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import { CategoriaProvider } from '../providers/categoria/categoria';
import { ProdutoProvider } from '../providers/produto/produto';
import { MeusprodutosPageModule } from '../pages/meusprodutos/meusprodutos.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ListprodutosPageModule,
    ProdutoPageModule,
    MeusprodutosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaProvider,
    ProdutoProvider
  ]
})
export class AppModule {}
