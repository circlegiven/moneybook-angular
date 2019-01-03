import {RouterModule} from '@angular/router';
import {TestListComponent} from './test-list.component';
import {TestCreateComponent} from './test-create.component';
import {TestDetailComponent} from './test-detail.component';
import {NgModule} from '@angular/core';
import { TestService } from '../../service/test.service';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
    {path: '', component: TestListComponent},
    {path: 'test', component: TestListComponent},
    {path: 'test/create', component: TestCreateComponent},
    {path: 'test/:id', component: TestDetailComponent}
  ])],
  declarations: [
    TestListComponent,
    TestCreateComponent,
    TestDetailComponent
  ],
  providers: [TestService, CookieService]
})
export class TestModule { }
