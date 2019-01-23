import {NgModule} from '@angular/core';
import {MomentDatePipe} from './pipe/moment.date.pipe';
import { CommonModule as AngularCommonModule } from '@angular/common';

@NgModule({
  imports: [
    AngularCommonModule,
  ],
  declarations: [
    MomentDatePipe,
  ],
  exports: [
    AngularCommonModule,
    MomentDatePipe
  ],
  providers: []
})
export class CommonModule {
  
}
