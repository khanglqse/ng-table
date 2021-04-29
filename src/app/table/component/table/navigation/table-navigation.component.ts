import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { PagingSetting } from "src/app/table/models/settings.model";

@Component({
  selector: "ng-table-navigation",
  templateUrl: "./table-navigation.component.html",
  styleUrls: ["./table-navigation.component.sass"],
})
export class TableNavigationComponent implements OnInit {
  totalPage
  @Input() totalCount: number;
  pagingOptions = new PagingSetting();
  @Output()
  change: EventEmitter<PagingSetting> = new EventEmitter<PagingSetting>();
  constructor() {}

  ngOnInit() {
    this.totalPage = Math.ceil(this.totalCount/this.pagingOptions.pageSize) + 1
  }

  ngOnChange() {
    this.totalPage = Math.ceil(this.totalCount/this.pagingOptions.pageSize) + 1
  }
  onPreviousClick() {
    if(this.pagingOptions.pageNumber === 1){
      return
    }
    this.pagingOptions.pageNumber -=1
    this.change.emit(this.pagingOptions);
  }

  onNextClick() {
    this.pagingOptions.pageNumber +=1
    this.change.emit(this.pagingOptions);
  }

  handlePageChange(event) {
    this.pagingOptions.pageNumber = event.target.value
    this.pagingOptions.pageIndex = event.target.value -1
    this.change.emit(this.pagingOptions)
  }

  handlePageSizeChange(event) {
    this.pagingOptions.pageSize = event.target.value
    this.change.emit(this.pagingOptions)
  }
}
