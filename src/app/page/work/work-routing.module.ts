import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkModule} from './work.module';

@NgModule({
  imports: [
    CommonModule,
    WorkModule,
    RouterModule.forChild([
      {path: '', component: TestListComponent},
      {path: 'test', component: TestListComponent},
      {path: 'test/create', component: TestCreateComponent},
      {path: 'test/:id', component: TestDetailComponent}
    ])],
  declarations: [
    TestListComponent
  ],
  providers: []
})
export class WorkRoutingModule { }
