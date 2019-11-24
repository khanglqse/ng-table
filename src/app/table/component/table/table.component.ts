import {
  Component,
  OnInit,
  ApplicationRef,
  ContentChild,
  ContentChildren,
  ViewChild,
  ElementRef,
  QueryList,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy
} from "@angular/core";
import {
  TableActionButtonTemplate,
  TableColumnTemplate,
  TableHeaderTemplate,
  TableHeaderControlTemplate,
  TableFooterTemplate,
  TableRowTotalTemplate,
  TableRowExpandTemplate
} from "../../directive/table-directive.directive";
import { TableSetting, PagingSetting, TableProps } from "../../models/settings.model";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SortState } from "../../models/sort-order.model";
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: "ng-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.sass"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {

  @ContentChild(TableActionButtonTemplate, { static: false })
  public actBtnTemplate: TableActionButtonTemplate;
  @ContentChild(TableHeaderControlTemplate, { static: true })
  public headerControlTemplate: TableHeaderControlTemplate;

  @ContentChild(TableHeaderTemplate, { static: true })
  public headerTemplate: TableHeaderTemplate;


  @ContentChild(TableFooterTemplate, { static: false })
  public footerTemplate: TableFooterTemplate;

  @ContentChild(TableRowTotalTemplate, { static: false })
  public rowTotalTemplate: TableRowTotalTemplate;

  @ContentChild(TableRowExpandTemplate, { static: false })
  public rowExpandTemplate: TableRowExpandTemplate;

  public colTemplates: { [key: string]: TableColumnTemplate } = {};

  @ContentChildren(TableColumnTemplate)
  set setColumnTemplates(columnTemplates: Array<TableColumnTemplate>) {
    if (!columnTemplates || columnTemplates.length === 0) {
      this.colTemplates = {};
      return;
    }

    columnTemplates.forEach(temp => {
      this.colTemplates[temp.for] = temp;
    });
  };
  @ViewChild("tbodyElement", { static: true }) tbodyElement: ElementRef<
    HTMLElement
  >;

  @Input() settings: TableSetting<any>;
  @Input() dataSource: any[];
  @Input() url: string;
  @Input() isLoading: boolean;
  @Input() filterModel$: Observable<any>
  @Input() dataPropName = "data";
  @Input() method = "get";
  @Input() sortState$: Observable<SortState>

  @Output() pagingOptionChange: EventEmitter<PagingSetting> = new EventEmitter<PagingSetting>();
  @Output() sortStateChange: EventEmitter<SortState> = new EventEmitter<SortState>();


  pagingOptions: PagingSetting = new PagingSetting()
  props: TableProps = new TableProps()
  filterModel: any = {}
  sortState: SortState = new SortState();

  private unsubscribe$ = new Subject<void>()
  constructor(
    private _appRef: ApplicationRef,
    private _httpClient: HttpClient,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initSettings();
    this.registerObserver()
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataSource && changes.dataSource.currentValue) {
      this._cdr.detectChanges();
    }
  }
  registerObserver() {
    if(this.filterModel$){
      this.filterModel$.pipe(takeUntil(this.unsubscribe$)).subscribe(filter => {
        this.filterModel = filter
        this.shouldFetchData() && this.fetchData()
      })
    }
    if(this.sortState$){
      this.sortState$.pipe(takeUntil(this.unsubscribe$)).subscribe(sortState => {
        this.sortState = sortState
        this.shouldFetchData() && this.fetchData()
      })
    }
  }
  shouldFetchData() {
    return this.url
  }
  fetchData() {
    const model = { ...this.filterModel, ...this.pagingOptions, ...this.sortState }
    this.isLoading = true
    this._httpClient.get(this.url, { params: model }).subscribe((res: any) => {
      this.dataSource = res[this.dataPropName]
      this.isLoading = false
    });
  }
  initSettings() {
    this.settings = new TableSetting(this.settings)
    this.initInternalProps()
    this.validateInitConfiguration();
    console.log(this.dataSource)
  }

  initInternalProps() {
    this.props.isHaveHeader = this.settings && this.settings.header
    this.props.sortable = this.settings && this.settings.sortable
    this.props.isHaveActionButtons = this.settings && this.settings.actionButtons && this.settings.actionButtons.buttons && this.settings.actionButtons.buttons.length > 0;
    this.props.tableColSpan = this.settings.columns.length + 1
    this.props.haveRowTotal = this.rowTotalTemplate ? true : false
    // console.table(this.props)
  }

  validateInitConfiguration() {
    if (this.filterModel$ && this.dataSource) {
      console.warn(
        "Consider to remove filterModel (un-usage) while using dataSource"
      );
    }
    if (this.sortState && this.dataSource) {
      console.warn(
        "Consider to remove sortState (un-usage) while using dataSource"
      );
    }
  }
  handleOrderStateChange(sortState: SortState) {
    // this.resetPagingOption()
    this.sortState = sortState
    this.sortStateChange.emit(sortState)
    this.shouldFetchData() && this.fetchData()
  }
  onPagingOptionChange(pagingOptions: PagingSetting) {
    this.pagingOptions = pagingOptions
    this.pagingOptionChange.emit(pagingOptions)
    this.shouldFetchData() && this.fetchData()
  }
  resetOrderState() {
    this.sortState = new SortState()
  }
  resetPagingOption() {
    this.pagingOptions = new PagingSetting()
  }

  ngOnDestroy() {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
