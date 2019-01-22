import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkModule} from './work.module';
import {CreateWorkComponent} from '../../component/work/create-work.component';

@NgModule({
  imports: [
    CommonModule,
    WorkModule,
    RouterModule.forChild([
      {path: 'work/create', component: CreateWorkComponent},
      // {path: 'word/:id', component: TestDetailComponent}
    ])],
  declarations: [
    CreateWorkComponent
  ],
  providers: []
})
export class WorkRoutingModule { }
