import {Component, Input} from '@angular/core';
import {BudgetValue} from '../../value/budget.value';
import {BookService} from '../../service/book.service';

declare let moment: any;

@Component({
  selector: 'app-work-list',
  templateUrl: 'work-list.component.html'
})
export class WorkListComponent {

  @Input('list')
  public list: any[];

  constructor(private _bookService: BookService) {
  }

  /**
   * Convert work type
   * @param value
   */
  public convertWorkType(value: BudgetValue): string {
    return this._bookService.getConvertWorkType(value);
  }

  /**
   * Close all detail list
   */
  public allCloseDetailList(): void {
    this.list.forEach(item => item.isShow = false);
  }
}
