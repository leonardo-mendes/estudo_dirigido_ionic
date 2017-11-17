import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListprodutosPage } from './listprodutos';

@NgModule({
  declarations: [
    ListprodutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListprodutosPage),
  ],
})
export class ListprodutosPageModule {}
