import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PagingSetting } from 'src/app/table/models/settings.model';

@Component({
  selector: 'ng-table-navigation',
  templateUrl: './table-navigation.component.html',
  styleUrls: ['./table-navigation.component.sass']
})
export class TableNavigationComponent implements OnInit {

  pagingOptions = new PagingSetting();
  @Output() change: EventEmitter<PagingSetting> = new EventEmitter<PagingSetting>();
  constructor(
  ) { }

  ngOnInit() {

  }
  onPreviousClick(){
    this.pagingOptions.currentIndex += -1;
    this.change.emit(this.pagingOptions);
  }
  onNextClick(){
    this.pagingOptions.currentIndex += 1;
    this.change.emit(this.pagingOptions);
  }
  

}
