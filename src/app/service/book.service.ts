import {AbstractService} from './abstract.service';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {BudgetValue} from '../value/budget.value';

@Injectable()
export class BookService extends AbstractService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  /**
   * Get work list
   * @returns {Observable<any>}
   */
  public getWorkList(): Observable<any[]> {
    return this.get(this.API_URL + 'work/list');
  }

  public getCategoryList(): Observable<any[]> {
    return this.get(this.API_URL + 'category');
  }

  /**
   * Convert work type
   * @param value
   */
  public getConvertWorkType(value: BudgetValue): string {
    switch (value) {
      case BudgetValue.EXPENSE:
        return '지출';
      case BudgetValue.PROFIT:
        return '수입';
    }
  }
}
