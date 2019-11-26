import { Component, OnInit, Input, EventEmitter, Output, ApplicationRef, ViewChild, ElementRef } from '@angular/core';
import { TableSetting, TableProps } from 'src/app/table/models/settings.model';
import { SortState, SortOrder } from 'src/app/table/models/sort-order.model';
import { TableColumnComponent } from '../column/table-column.component';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { TableRowTotalTemplate, TableRowExpandTemplate } from 'src/app/table/directive/table-directive.directive';

@Component({
  selector: 'ng-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.sass']
})
export class TableContentComponent implements OnInit {

  @Input() rowTotalTemplate: TableRowTotalTemplate
  @Input() rowExpandTemplate: TableRowExpandTemplate

  @Input() settings: TableSetting<any>
  @Input() sortState: SortState
  @Input() props : TableProps
  @Input() dataSource: any[]
  @Input() tbColumn: TableColumnComponent
  @Input() tbActions: ActionButtonComponent
  @Input() colTemplates
  @Input() isLoading: boolean
  @Output() changeOrderState: EventEmitter<SortState> = new EventEmitter<SortState>()

  @ViewChild('tbodyEl', {static: false}) tbodyElement: ElementRef
  sortOrder = SortOrder;
  constructor(
    // private _appRef = ApplicationRef
  ) { }

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

  tableRowClickHandler(rowData: any, rowEl: HTMLElement, index, event){
    if(!this.settings.rows.triggerExpand && !this.settings.rows.triggerExpandFunc) return

    const rowEmbeddedView = this.rowExpandTemplate.templateRef.createEmbeddedView({...rowData})
    const templateEl = rowEmbeddedView.rootNodes[0] as HTMLElement
    if(templateEl.tagName !== 'TR'){
      console.error('Please use <tr> as root element for RowExpandTemplate')
    } else {
      templateEl.setAttribute(`row-expanded`, '')
      this.handleCollapseRow(rowEl, templateEl);
      
    }

  }
  insertElementAfterRow(tRow: HTMLElement, templateEl: HTMLElement) {
    tRow.insertAdjacentElement('afterend', templateEl)
  }

  handleCollapseRow(tRow: HTMLElement, templateEl: HTMLElement){
    const {triggerCloseExpanded, triggerCloseExpandedFunc} = this.settings.rows
    if(tRow.nextElementSibling.attributes.getNamedItem('row-expanded')){
      if(triggerCloseExpanded ||  triggerCloseExpandedFunc){
        tRow.nextElementSibling.remove()
      }
    } else {
      tRow.insertAdjacentElement('afterend', templateEl)
    }
  }
}
