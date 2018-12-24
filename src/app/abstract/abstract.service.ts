import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Injector} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {catchError, flatMap} from 'rxjs/operators';
import {Result} from '../value/common.value';
import {CookieService} from 'ngx-cookie-service';

export abstract class AbstractService {

  protected http: HttpClient;

  protected cookieService: CookieService;

  // constructor
  constructor(protected injector: Injector) {
    this.http = injector.get(HttpClient);
    this.cookieService = injector.get(CookieService);
  }

  /**
   * GET method
   * @param {string} url
   * @param headers
   * @returns {Observable<any>}
   */
  protected get(url: string, headers: any = {'Content-Type': 'application/json'}): Observable<any> {
    return this.http.get(url, {headers: headers, withCredentials: true, observe: 'response'})
      .pipe(
        flatMap((response: HttpResponse<any>) => this.resultHandlerObservable(response)),
        catchError( (error: HttpErrorResponse) => this.errorHandlerObservable(error))
      );
  }

  /**
   * POST method
   * @param {string} url
   * @param data
   * @param headers
   * @returns {Observable<any>}
   */
  protected post(url: string, data: any, headers: any = {'Content-Type': 'application/json'}) {
    return this.http.post(url, JSON.stringify(data), {headers: headers, withCredentials: true, observe: 'response'})
      .pipe(
        flatMap((response: HttpResponse<any>) => this.resultHandlerObservable(response)),
        catchError( (error: HttpErrorResponse) => this.errorHandlerObservable(error))
      );
  }

  /**
   * PUT method
   * @param {string} url
   * @param data
   * @param headers
   * @returns {Observable<any>}
   */
  protected put(url: string, data: any, headers: any = {'Content-Type': 'application/json'}) {
    return this.http.put(url, JSON.stringify(data), {headers: headers, withCredentials: true, observe: 'response'})
      .pipe(
        flatMap((response: HttpResponse<any>) => this.resultHandlerObservable(response)),
        catchError( (error: HttpErrorResponse) => this.errorHandlerObservable(error))
      );
  }

  /**
   * DELETE method
   * @param {string} url
   * @param headers
   * @returns {Observable<any>}
   */
  protected delete(url: string, headers: any = {'Content-Type': 'application/json'}) {
    return this.http.delete(url, {headers: headers, withCredentials: true, observe: 'response'})
      .pipe(
        flatMap((response: HttpResponse<any>) => this.resultHandlerObservable(response)),
        catchError( (error: HttpErrorResponse) => this.errorHandlerObservable(error))
      );
  }


  /**
   * Result handler
   * @param {HttpResponse<any>} response
   * @returns {Observable<any>}
   */
  protected resultHandlerObservable (response: HttpResponse<any>): Observable<any> {
    // 코드값이 있다면
    if ( response.body.code ) {
      // Result로 캐스팅
      const result: Result = response.body as Result;
      // 호출 실패
      if ( result.code !== 'SUCCESS' ) {
        // 에러 메시지
        console.log(result.message);
      }
    }
    // 결과값 리턴
    return of(response.body);
  }


  /**
   * Error handler
   * @param error
   * @returns {Observable<any>}
   */
  protected errorHandlerObservable (error: any): Observable<any> {
    // error message
    const errMsg = (error._message) ? error._message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    // 토큰 만료
    if (error.status === 401) {
      // init cookie
      this.cookieService.deleteAll();
      // 정보초기화
      this.app.destroy();
      // 권한없음 반환
      const result: Result = new Result();
      result.code = '0002';
      result.message = 'UNAUTHURIZATION';
      return throwError(result);
    }
    // 에러 반환
    const result: Result = new Result();
    result.code = '0001';
    result.message = 'FAIL';
    return throwError(result);
  }
}
