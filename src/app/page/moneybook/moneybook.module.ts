import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BookService} from '../../service/book.service';
import {CookieService} from 'ngx-cookie-service';
import {MoneybookList} from './moneybook-list';
import {WorkListComponent} from '../../component/work/work-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MoneybookList},
    ])],
  declarations: [
    MoneybookList,
    WorkListComponent
  ],
  providers: [BookService, CookieService]
})
export class MoneybookModule {
  
}
