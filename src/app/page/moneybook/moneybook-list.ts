import {Component} from '@angular/core';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'moneybook-list',
  templateUrl: 'moneybook-list.html'
})
export class MoneybookList {

  public list: any[] = [
    { dateTime: '2019-01-23',
      workList: [
        {date: '2019-01-23T10:00:00', workType: 'PROFIT', category: '급여', money: 31313131},
        {date: '2019-01-23T10:00:00', workType: 'PROFIT', category: '환급', money: 200000},
        {date: '2019-01-23T22:00:00', workType: 'EXPENSE', category: '식비', money: 6000},
        {date: '2019-01-23T22:00:00', workType: 'EXPENSE', category: '통신비', money: 40000},
      ]
    },
    { dateTime: '2019-01-24',
      workList: [
        {date: '2019-01-24T10:00:00', workType: 'PROFIT', category: '환급', money: 200000},
        {date: '2019-01-24T14:00:00', workType: 'EXPENSE', category: '식비', money: 6000},
        {date: '2019-01-24T17:00:00', workType: 'EXPENSE', category: '통신비', money: 40000},
      ]
    },
    { dateTime: '2019-01-25',
      workList: [
        {date: '2019-01-25T10:00:00', workType: 'EXPENSE', category: '대출금', money: 8000000},
        {date: '2019-01-25T10:00:00', workType: 'EXPENSE', category: '통신비', money: 40000},
      ]
    },
  ];

  public categoryList: any[];

  constructor(private _bookService: BookService) {
    this._bookService.getCategoryList()
      .subscribe((result) => {
        console.log(result);
      });
  }

  // get category list

}
