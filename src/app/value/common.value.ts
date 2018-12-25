/**
 * API result
 */
export class Result {
  // Code
  public code: string;
  // 메시지
  public message: string;
  // 데이터
  public data: Object;
}

export class HttpHeader {
  // content type
  public contentType: string;
  // Authorization
  public authorization: string;

  constructor() {
    this.contentType = 'application/json';
  }
}
