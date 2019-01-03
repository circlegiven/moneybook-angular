import {AbstractService} from '../abstract/abstract.service';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import { TestValue } from '../value/test.value';
import {PaymentTypeValue} from '../value/payment-type.value';

@Injectable({
  providedIn: 'root',
})
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
    return this.post(this.API_URL + 'payment', data);
  }

  /**
   * Get test list
   * @returns {Observable<any>}
   */
  public getTestList(): Observable<PaymentTypeValue[]> {
    return this.get(this.API_URL + 'payment/all');
  }

  /**
   * Get test detail
   * @param {string} id
   * @returns {Observable<any>}
   */
  public getTestDetail(id: string): Observable<TestValue> {
    return this.get(this.API_URL + 'test/' + id);
  }
}
