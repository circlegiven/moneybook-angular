import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'test-create',
  templateUrl: 'test-create.component.html'
})
export class TestCreateComponent implements OnInit {
  // create input forms
  testForm: FormGroup;

  constructor(private testService: TestService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    // 입력폼 기본값과 validator 세팅
    this.testForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.maxLength(5)]],
      description: ['', [Validators.maxLength(100)]],
    });
  }

  /**
   * 등록 버튼 클릭 이벤트
   */
  doneButtonHandler(): void {
    console.log(this.testForm);
    console.log(this.testForm.valid);
    if (this.testForm.valid) {
      console.log(this.testForm.value.title);
      console.log(this.testForm.value.name);
      console.log(this.testForm.value.description);
    }
  }

  /**
   * 목록으로 이동 버튼 클릭 이벤트
   */
  backButtonHandler(): void {
    this.router.navigate(['/test']);
  }

  /**
   * Set test
   * @private
   */
  private _setTest(): void {
    this.testService.setTest(this._getTestParams())
      .subscribe(value => {

      }, error => console.log('error', error));
  }

  /**
   * Get test params
   * @returns {object}
   * @private
   */
  private _getTestParams(): object {
    return {};
  }
}
