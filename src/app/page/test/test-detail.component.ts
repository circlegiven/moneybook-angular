import { Component, OnInit } from '@angular/core';
import { TestValue, TestValueImpl } from '../../value/test.value';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../service/test.service';
import { ActivateRoutes } from '@angular/router/src/operators/activate_routes';

@Component({
  selector: 'test-detail',
  templateUrl: 'test-detail.component.html'
})
export class TestDetailComponent implements OnInit {

  private _id: string;

  detailData: TestValue;

  constructor(private _testService: TestService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    // :id는 constructor에서 받아온다
    this._id = _activatedRoute.snapshot.params['id'];
    console.log(this._id);
  }

  private getTestDatailData(id: string): void {
    this._testService.getTestDetail(id)
      .subscribe(value => {

    }, error => console.log('error', error));
  }

  ngOnInit(): void {
    this.detailData = new TestValueImpl();
    // 상세화면 조회
    this.getTestDatailData(this._id);
  }

  backButtonHandler(): void {
    this._router.navigate(['/test']);
  }
}
