import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: 'work-list.component.html'
})
export class WorkListComponent {

  @Input('list')
  public list: any[];

  constructor() {
  }
}
