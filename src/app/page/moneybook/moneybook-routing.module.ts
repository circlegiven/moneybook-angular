import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MoneybookList} from './moneybook-list';
import {WorkModule} from '../../component/work/work.module';

@NgModule({
  imports: [
    CommonModule,
    WorkModule,
    RouterModule.forChild([
      {path: '', component: MoneybookList},
    ])],
  declarations: [
    MoneybookList,
  ]
})
export class MoneybookRoutingModule {
  
}
