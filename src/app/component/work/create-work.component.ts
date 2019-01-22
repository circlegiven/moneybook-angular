import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BudgetValue} from '../../value/budget.value';

@Component({
  selector: 'app-create-work-component',
  templateUrl: 'create-work.component.html'
})
export class CreateWorkComponent implements OnInit {

  @ViewChild('inputMoney')
  private _inputMoney: ElementRef;

  @ViewChild('inputWork')
  private _inputWork: ElementRef;

  selectedBudget: {label: string, value: BudgetValue};
  selectedCategory;
  selectedPayment;

  budgetValueList = [
    {label: '수입', value: BudgetValue.PROFIT},
    {label: '지출', value: BudgetValue.EXPENSE},
  ];

  categoryList = [

  ];

  paymentList = [

  ];

  constructor() {
  }


  ngOnInit() {
    this.selectedBudget = this.budgetValueList[0];
  }

  onChangeBudget(budget): void {
    this.selectedBudget = budget;
    // change category list
  }

  onClickSave(): void {
    // check input element
    console.log(this._inputWork.nativeElement.value);
    console.log(this._inputMoney.nativeElement.value);
  }

  onClickCancel(): void {

  }
}
