import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableSetting, TableProps } from 'src/app/table/models/settings.model';
import { SortState, SortOrder } from 'src/app/table/models/sort-order.model';
import { TableColumnComponent } from '../column/table-column.component';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { TableRowTotalTemplate } from 'src/app/table/directive/table-directive.directive';

@Component({
  selector: 'ng-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.sass']
})
export class TableContentComponent implements OnInit {

  @Input() settings: TableSetting<any>
  @Input() sortState: SortState
  @Input() props : TableProps
  @Input() dataSource: any[]
  @Input() tbColumn: TableColumnComponent
  @Input() tbActions: ActionButtonComponent
  @Input() rowTotalTemplate: TableRowTotalTemplate
  @Input() colTemplates
  @Input() isLoading: boolean
  @Output() changeOrderState: EventEmitter<SortState> = new EventEmitter<SortState>()
  sortOrder = SortOrder;
  constructor() { }

  ngOnInit() {
    console.log(this.tbColumn._columnTemplate)
    console.log(this.settings)
  }
  sort(colIndex: number, e: Event){
    if((e.currentTarget as HTMLElement).classList.contains('sortable')){
      this.sortState.index = colIndex
      const currentSortColumn = this.sortState.columnDef;
      // update direction
      if(currentSortColumn === this.settings.columns[colIndex].columnDef){
        this.sortState.order = this.sortState.order === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc
      } 
      // update sort column name
      else {
        this.sortState.columnDef = this.settings.columns[colIndex].columnDef
        this.sortState.order = this.sortOrder.Asc
      }
      this.changeOrderState.emit(this.sortState);
    }
  }

  expandTableRow(item, el, event){

  }
}
