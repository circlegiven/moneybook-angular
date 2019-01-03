import { Component, OnInit } from '@angular/core';
import { TestValue } from '../../value/test.value';
import { TestService } from '../../service/test.service';
import { Router } from '@angular/router';
import {PaymentTypeValue} from '../../value/payment-type.value';

@Component({
  selector: 'test-list',
  templateUrl: 'test-list.component.html'
})
export class TestListComponent implements OnInit {

  paymentList: PaymentTypeValue[] = [];

  constructor(private testService: TestService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.testService.getTestList()
      .subscribe(value => {
        this.paymentList = value;
      },error => {

      });
  }

  /**
   * Create 생성 페이지 오픈
   */
  createTest(): void {
    this.router.navigate(['/test/create']);
  }

  titleHandler(id: string): void {
    this.router.navigate(['/test', id]);
  }
}
