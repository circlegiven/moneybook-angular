import {AbstractService} from '../abstract/abstract.service';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';

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
}
