import {NgModule} from '@angular/core';
import {WorkListComponent} from './work-list.component';
import {BookService} from '../../service/book.service';
import {CookieService} from 'ngx-cookie-service';
import {MomentModule} from 'angular2-moment';
import {CommonModule} from '../../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    MomentModule
  ],
  declarations: [WorkListComponent],
  exports: [WorkListComponent],
  providers: [BookService, CookieService]
})
export class WorkModule {

}
