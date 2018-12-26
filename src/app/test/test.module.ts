import {RouterModule} from '@angular/router';
import {TestListComponent} from './test-list.component';
import {TestCreateComponent} from './test-create.component';
import {TestDetailComponent} from './test-detail.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: TestListComponent},
    {path: 'create', component: TestCreateComponent},
    {path: ':id', component: TestDetailComponent}
  ])],
  declarations: [
    TestListComponent,
    TestCreateComponent,
    TestDetailComponent
  ]
})
export class TestModule { }
