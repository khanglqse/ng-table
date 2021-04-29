import { Component, OnInit, Input, EventEmitter, Output, ApplicationRef, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, ViewRef } from '@angular/core';
import { TableSetting, TableProps, ColumnSetting } from '../../models/settings.model';
import { SortState, SortOrder } from '../../models/sort-order.model';
import { TableColumnComponent } from '../column/table-column.component';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { TableRowTotalTemplate, TableRowExpandTemplate } from '../../directive/table-directive.directive';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ng-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.sass']
})
export class TableContentComponent implements OnInit, OnChanges, OnDestroy {

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
  @Input() columnTriggerExpand$ : Subject<{rowData, tRowEl}>
  @Output() changeOrderState: EventEmitter<SortState> = new EventEmitter<SortState>()



  @ViewChild('tbodyEl', {static: true}) tbodyElement: ElementRef<HTMLElement>
  _viewRefs: ViewRef[] = []
  sortOrder = SortOrder;

  private _unsubscribe$ = new Subject<void>()
  pinnedColumns: any[];
  tableWidth: string;
  normalColumns: ColumnSetting<any>[];
  pinnedColumnsWidth: any;
  constructor(
    private _appRef: ApplicationRef
  ) { }

  ngOnInit() {
    this.registerEvent()
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.dataSource && changes.dataSource.currentValue){
      this.clearExpandedRow()
    }
    if(changes.settings && changes.settings.currentValue){
      this.initPinnedColumnsSetting()
    }
  }
  initPinnedColumnsSetting(){
    this.pinnedColumns = this.settings.columns.filter(m => m.pinned)
    this.normalColumns = this.settings.columns.filter(m => !m.pinned)
    this.pinnedColumnsWidth = this.pinnedColumns.reduce((pre, cur):number => pre + parseInt(cur.width), 0)
    let left = 0
    this.pinnedColumns.forEach((m, index) => {
      m.left = left
      left += parseInt(m.width)

      // if(index !== 0){
      //   m.left = left
      // } else {
      //   m.left = 0
      // }
    })
    this.tableWidth = `calc(100% - ${this.pinnedColumnsWidth}px)`
    console.table(this.pinnedColumnsWidth)
  }
  clearExpandedRow(){
    if(this.rowExpandTemplate && this.tbodyElement && this.tbodyElement.nativeElement){
      if(this._viewRefs){
        this._viewRefs.forEach(item => this._appRef.detachView(item))
      }
      const expandedRows = this.tbodyElement.nativeElement.querySelectorAll('row-expanded')
      if(expandedRows){
        expandedRows.forEach(item => this.tbodyElement.nativeElement.removeChild(item))
      }
    }
  }
  registerEvent(){
    this.columnTriggerExpand$.pipe(takeUntil(this._unsubscribe$))
    .subscribe(({rowData, tRowEl}) => {this.tableRowClickHandler(rowData, tRowEl, true)})
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

  tableRowClickHandler(rowData: any, rowEl: HTMLElement, ignoreSettings: boolean){
    if(!ignoreSettings){
      if(!this.settings.rows.triggerExpand && !this.settings.rows.triggerExpandFunc ) return
    }
    const rowEmbeddedView = this.rowExpandTemplate.templateRef.createEmbeddedView({rowData})
    this._appRef.attachView(rowEmbeddedView)
    this._viewRefs.push(rowEmbeddedView)
    const templateEl = rowEmbeddedView.rootNodes[0] as HTMLElement
    if(templateEl.tagName !== 'TR'){
      console.error('Please use <tr> as root element for RowExpandTemplate')
    } else {
      templateEl.setAttribute(`row-expanded`, '')
      this.handleCollapseRow(rowEl, templateEl);
    }
    // event.stopPropagation()
  }

  handleCollapseRow(tRow: HTMLElement, templateEl: HTMLElement){
    const {triggerCloseExpanded, triggerCloseExpandedFunc} = this.settings.rows
    if(tRow.nextElementSibling && tRow.nextElementSibling.attributes.getNamedItem('row-expanded')){
      if(triggerCloseExpanded ||  triggerCloseExpandedFunc){
        tRow.nextElementSibling.remove()
      }
    } else {
      tRow.insertAdjacentElement('afterend', templateEl)
    }
  }
  ngOnDestroy() {
    this._unsubscribe$.next()
    this._unsubscribe$.complete()
  }
}
