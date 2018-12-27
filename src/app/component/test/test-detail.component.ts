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

  }

  private getTestDatailData(id: string): void {
    this._testService.getTestDetail(id)
      .subscribe(value => {

    }, error => console.log('error', error));
  }

  ngOnInit(): void {
    this.detailData = new TestValueImpl();
    this._activatedRoute.params.subscribe(params => this._id = params['id']);
    console.log(this._id);
  }

  backButtonHandler(): void {
    this._router.navigate(['/test']);
  }
}
