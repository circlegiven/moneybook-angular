import {AbstractService} from '../abstract/abstract.service';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TestService extends AbstractService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  /**
   * Set test data
   * @param data
   * @returns {Observable<any>}
   */
  public setTest(data: any) {
    return this.post(this.API_URL + 'test', data);
  }

  /**
   * Get test list
   * @returns {Observable<any>}
   */
  public getTestList(): Observable<any> {
    return this.get(this.API_URL + 'test');
  }

  /**
   * Get test detail
   * @param {string} id
   * @returns {Observable<any>}
   */
  public getTestDetail(id: string): Observable<any> {
    return this.get(this.API_URL + 'test/' + id);
  }
}
