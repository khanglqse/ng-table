/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ApplicationRef, ContentChild, ContentChildren, ViewChild, ElementRef, Input, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { TableActionButtonTemplate, TableColumnTemplate, TableHeaderTemplate, TableHeaderControlTemplate, TableFooterTemplate, TableRowTotalTemplate, TableRowExpandTemplate } from "../directive/table-directive.directive";
import { TableSetting, PagingSetting, TableProps } from "../models/settings.model";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SortState } from "../models/sort-order.model";
import { takeUntil } from 'rxjs/operators';
export class NgTableComponent {
    /**
     * @param {?} _appRef
     * @param {?} _httpClient
     * @param {?} _cdr
     */
    constructor(_appRef, _httpClient, _cdr) {
        this._appRef = _appRef;
        this._httpClient = _httpClient;
        this._cdr = _cdr;
        this.colTemplates = {};
        this.columnTriggerExpand$ = new Subject;
        this.dataPropName = "data";
        this.method = "get";
        this.pagingOptionChange = new EventEmitter();
        this.sortStateChange = new EventEmitter();
        this.pagingOptions = new PagingSetting();
        this.props = new TableProps();
        this.filterModel = {};
        this.sortState = new SortState();
        this._unsubscribe$ = new Subject();
    }
    /**
     * @param {?} columnTemplates
     * @return {?}
     */
    set setColumnTemplates(columnTemplates) {
        if (!columnTemplates || columnTemplates.length === 0) {
            this.colTemplates = {};
            return;
        }
        columnTemplates.forEach((/**
         * @param {?} temp
         * @return {?}
         */
        temp => {
            this.colTemplates[temp.for] = temp;
        }));
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initSettings();
        this.registerObserver();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dataSource && changes.dataSource.currentValue) {
            this._cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    registerObserver() {
        if (this.filterModel$) {
            this.filterModel$.pipe(takeUntil(this._unsubscribe$)).subscribe((/**
             * @param {?} filter
             * @return {?}
             */
            filter => {
                this.filterModel = filter;
                this.shouldFetchData() && this.fetchData();
            }));
        }
        if (this.sortState$) {
            this.sortState$.pipe(takeUntil(this._unsubscribe$)).subscribe((/**
             * @param {?} sortState
             * @return {?}
             */
            sortState => {
                this.sortState = sortState;
                this.shouldFetchData() && this.fetchData();
            }));
        }
    }
    /**
     * @return {?}
     */
    shouldFetchData() {
        return this.url;
    }
    /**
     * @return {?}
     */
    fetchData() {
        /** @type {?} */
        const model = Object.assign({}, this.filterModel, this.pagingOptions, this.sortState);
        this.isLoading = true;
        this._httpClient.get(this.url, { params: model }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.dataSource = res[this.dataPropName];
            this.isLoading = false;
        }));
    }
    /**
     * @return {?}
     */
    initSettings() {
        this.settings = new TableSetting(this.settings);
        this.initInternalProps();
        this.validateInitConfiguration();
        console.log(this.dataSource);
    }
    /**
     * @return {?}
     */
    initInternalProps() {
        this.props.isHaveHeader = this.settings && this.settings.header;
        this.props.sortable = this.settings && this.settings.sortable;
        this.props.isHaveActionButtons = this.settings && this.settings.actionButtons && this.settings.actionButtons.buttons && this.settings.actionButtons.buttons.length > 0;
        this.props.tableColSpan = this.settings.columns.length + 1;
        this.props.haveRowTotal = this.rowTotalTemplate ? true : false;
        // console.table(this.props)
    }
    /**
     * @return {?}
     */
    validateInitConfiguration() {
        if (this.filterModel$ && this.dataSource) {
            console.warn("Consider to remove filterModel (un-usage) while using dataSource");
        }
        if (this.sortState && this.dataSource) {
            console.warn("Consider to remove sortState (un-usage) while using dataSource");
        }
    }
    /**
     * @param {?} sortState
     * @return {?}
     */
    handleOrderStateChange(sortState) {
        // this.resetPagingOption()
        this.sortState = sortState;
        this.sortStateChange.emit(sortState);
        this.shouldFetchData() && this.fetchData();
    }
    /**
     * @param {?} pagingOptions
     * @return {?}
     */
    onPagingOptionChange(pagingOptions) {
        this.pagingOptions = pagingOptions;
        this.pagingOptionChange.emit(pagingOptions);
        this.shouldFetchData() && this.fetchData();
    }
    /**
     * @return {?}
     */
    resetOrderState() {
        this.sortState = new SortState();
    }
    /**
     * @return {?}
     */
    resetPagingOption() {
        this.pagingOptions = new PagingSetting();
    }
    /**
     * @param {?} eleObj
     * @return {?}
     */
    handleColumnTriggerExpand(eleObj) {
        this.columnTriggerExpand$.next(eleObj);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
NgTableComponent.decorators = [
    { type: Component, args: [{
                selector: "ng-table",
                template: "<!-- <ng-table-column [settings]=\"settings\"></ng-table-column> -->\r\n\r\n<div class=\"ng-table-container\">\r\n    <div *ngIf=\"isLoading\" class=\"table-loading\">\r\n        <div class=\"loading-spinner\">\r\n            <i>Refresh icon go here</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-container\" [ngClass]=\"{'loading': isLoading}\">\r\n        <!-- injected template  -->\r\n        <ng-table-header *ngIf=\"props.isHaveHeader\" [headerControlTemplate]=\"headerControlTemplate\" [headerTemplate]=\"headerTemplate\" [settings]=\"settings\"></ng-table-header>\r\n        <ng-table-column (onTriggerExpand)=\"handleColumnTriggerExpand($event)\" #tbColumn></ng-table-column>\r\n        <!-- table header -->\r\n        <ng-action-button [actionButtonSettings]=\"settings.actionButtons\" #tbActionButtons [actBtnTemplate]=\"actBtnTemplate\"></ng-action-button>\r\n        <ng-table-content \r\n            [columnTriggerExpand$] = \"columnTriggerExpand$\"\r\n            [settings]=\"settings\" [sortState]=\"sortState\" [props]=\"props\" [dataSource]=\"dataSource\" [colTemplates]=\"colTemplates\"\r\n            [tbColumn]=\"tbColumn\" [tbActions]=\"tbActionButtons\" [rowTotalTemplate]=\"rowTotalTemplate\" [isLoading]=\"isLoading\"\r\n            (changeOrderState)=\"handleOrderStateChange($event)\" [rowExpandTemplate]=\"rowExpandTemplate\"\r\n            > \r\n        </ng-table-content>\r\n        <!-- table footeer -->\r\n        <div class=\"table-footer\" *ngIf=\"footerTemplate && footerTemplate.templateRef\">\r\n            <ng-container *ngTemplateOutlet=\"footerTemplate.templateRef\"></ng-container>\r\n        </div>\r\n        <ng-table-navigation *ngIf=\"settings.pagination\" [totalCount]=\"totalCount\" (change)=\"onPagingOptionChange($event)\"></ng-table-navigation>\r\n    </div>\r\n\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
                styles: [":host ::ng-deep .flex{display:flex!important}:host ::ng-deep .flex-fill{flex:1 1 auto!important}:host ::ng-deep table{text-align:left;border-radius:2px 2px 0 0;border-collapse:separate;border-spacing:0;width:100%}:host ::ng-deep table td,:host ::ng-deep table th{padding:16px;text-shadow:1px 1px 1px #fff;white-space:nowrap;border-collapse:separate;position:relative;overflow-wrap:break-word;border-bottom:1px solid #f0f0f0}:host ::ng-deep .text-right{text-align:right}:host ::ng-deep .text-center{text-align:center}:host ::ng-deep .text-left{text-align:left}:host ::ng-deep .disabled{color:#fff;background-color:grey}.ng-table-container{position:relative}.ng-table-container .table-loading{position:absolute;background:grey;z-index:1;top:50%;left:50%}.ng-table-container .main-container.loading{opacity:.7}"]
            }] }
];
/** @nocollapse */
NgTableComponent.ctorParameters = () => [
    { type: ApplicationRef },
    { type: HttpClient },
    { type: ChangeDetectorRef }
];
NgTableComponent.propDecorators = {
    actBtnTemplate: [{ type: ContentChild, args: [TableActionButtonTemplate, { static: false },] }],
    headerControlTemplate: [{ type: ContentChild, args: [TableHeaderControlTemplate, { static: true },] }],
    headerTemplate: [{ type: ContentChild, args: [TableHeaderTemplate, { static: true },] }],
    footerTemplate: [{ type: ContentChild, args: [TableFooterTemplate, { static: false },] }],
    rowTotalTemplate: [{ type: ContentChild, args: [TableRowTotalTemplate, { static: false },] }],
    rowExpandTemplate: [{ type: ContentChild, args: [TableRowExpandTemplate, { static: false },] }],
    setColumnTemplates: [{ type: ContentChildren, args: [TableColumnTemplate,] }],
    tbodyElement: [{ type: ViewChild, args: ["tbodyElement", { static: true },] }],
    settings: [{ type: Input }],
    totalCount: [{ type: Input }],
    dataSource: [{ type: Input }],
    url: [{ type: Input }],
    isLoading: [{ type: Input }],
    filterModel$: [{ type: Input }],
    dataPropName: [{ type: Input }],
    method: [{ type: Input }],
    sortState$: [{ type: Input }],
    pagingOptionChange: [{ type: Output }],
    sortStateChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgTableComponent.prototype.actBtnTemplate;
    /** @type {?} */
    NgTableComponent.prototype.headerControlTemplate;
    /** @type {?} */
    NgTableComponent.prototype.headerTemplate;
    /** @type {?} */
    NgTableComponent.prototype.footerTemplate;
    /** @type {?} */
    NgTableComponent.prototype.rowTotalTemplate;
    /** @type {?} */
    NgTableComponent.prototype.rowExpandTemplate;
    /** @type {?} */
    NgTableComponent.prototype.colTemplates;
    /** @type {?} */
    NgTableComponent.prototype.columnTriggerExpand$;
    /** @type {?} */
    NgTableComponent.prototype.tbodyElement;
    /** @type {?} */
    NgTableComponent.prototype.settings;
    /** @type {?} */
    NgTableComponent.prototype.totalCount;
    /** @type {?} */
    NgTableComponent.prototype.dataSource;
    /** @type {?} */
    NgTableComponent.prototype.url;
    /** @type {?} */
    NgTableComponent.prototype.isLoading;
    /** @type {?} */
    NgTableComponent.prototype.filterModel$;
    /** @type {?} */
    NgTableComponent.prototype.dataPropName;
    /** @type {?} */
    NgTableComponent.prototype.method;
    /** @type {?} */
    NgTableComponent.prototype.sortState$;
    /** @type {?} */
    NgTableComponent.prototype.pagingOptionChange;
    /** @type {?} */
    NgTableComponent.prototype.sortStateChange;
    /** @type {?} */
    NgTableComponent.prototype.pagingOptions;
    /** @type {?} */
    NgTableComponent.prototype.props;
    /** @type {?} */
    NgTableComponent.prototype.filterModel;
    /** @type {?} */
    NgTableComponent.prototype.sortState;
    /**
     * @type {?}
     * @private
     */
    NgTableComponent.prototype._unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NgTableComponent.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    NgTableComponent.prototype._httpClient;
    /**
     * @type {?}
     * @private
     */
    NgTableComponent.prototype._cdr;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUVWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3ZCLE1BQU0sd0NBQXdDLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFRMUMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBMEQzQixZQUNVLE9BQXVCLEVBQ3ZCLFdBQXVCLEVBQ3ZCLElBQXVCO1FBRnZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBekMxQixpQkFBWSxHQUEyQyxFQUFFLENBQUM7UUFDakUseUJBQW9CLEdBQUcsSUFBSSxPQUFPLENBQUM7UUF1QjFCLGlCQUFZLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZCx1QkFBa0IsR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDcEYsb0JBQWUsR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUduRixrQkFBYSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFBO1FBQ2xELFVBQUssR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFBO1FBQ3BDLGdCQUFXLEdBQVEsRUFBRSxDQUFBO1FBQ3JCLGNBQVMsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRS9CLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQTtJQUt2QyxDQUFDOzs7OztJQXZDTCxJQUNJLGtCQUFrQixDQUFDLGVBQTJDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNSO1FBRUQsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQzs7OztJQStCRixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtZQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUNELGdCQUFnQjtRQUNkLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2RSxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQTtnQkFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUM1QyxDQUFDLEVBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO2dCQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQzVDLENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDOzs7O0lBQ0QsU0FBUzs7Y0FDRCxLQUFLLHFCQUFRLElBQUksQ0FBQyxXQUFXLEVBQUssSUFBSSxDQUFDLGFBQWEsRUFBSyxJQUFJLENBQUMsU0FBUyxDQUFFO1FBQy9FLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ0QsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ3hCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzlCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBO1FBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUE7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2SyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDOUQsNEJBQTRCO0lBQzlCLENBQUM7Ozs7SUFFRCx5QkFBeUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsT0FBTyxDQUFDLElBQUksQ0FDVixrRUFBa0UsQ0FDbkUsQ0FBQztTQUNIO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FDVixnRUFBZ0UsQ0FDakUsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxzQkFBc0IsQ0FBQyxTQUFvQjtRQUN6QywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUM1QyxDQUFDOzs7OztJQUNELG9CQUFvQixDQUFDLGFBQTRCO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUM1QyxDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQTtJQUNsQyxDQUFDOzs7O0lBQ0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFBO0lBQzFDLENBQUM7Ozs7O0lBRUQseUJBQXlCLENBQUMsTUFBTTtRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQy9CLENBQUM7OztZQTVKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGcyREFBcUM7O2FBR3RDOzs7O1lBakNDLGNBQWM7WUF3QlAsVUFBVTtZQWJqQixpQkFBaUI7Ozs2QkF5QmhCLFlBQVksU0FBQyx5QkFBeUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0NBRXpELFlBQVksU0FBQywwQkFBMEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBR3pELFlBQVksU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBSWxELFlBQVksU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7K0JBR25ELFlBQVksU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0NBR3JELFlBQVksU0FBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7aUNBTXRELGVBQWUsU0FBQyxtQkFBbUI7MkJBV25DLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUkxQyxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztrQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSztpQ0FFTCxNQUFNOzhCQUNOLE1BQU07Ozs7SUEvQ1AsMENBQ2lEOztJQUNqRCxpREFDeUQ7O0lBRXpELDBDQUMyQzs7SUFHM0MsMENBQzJDOztJQUUzQyw0Q0FDK0M7O0lBRS9DLDZDQUNpRDs7SUFFakQsd0NBQWlFOztJQUNqRSxnREFBbUM7O0lBYW5DLHdDQUVFOztJQUVGLG9DQUFxQzs7SUFDckMsc0NBQTRCOztJQUM1QixzQ0FBMkI7O0lBQzNCLCtCQUFxQjs7SUFDckIscUNBQTRCOztJQUM1Qix3Q0FBc0M7O0lBQ3RDLHdDQUErQjs7SUFDL0Isa0NBQXdCOztJQUN4QixzQ0FBMEM7O0lBRTFDLDhDQUE4Rjs7SUFDOUYsMkNBQW1GOztJQUduRix5Q0FBa0Q7O0lBQ2xELGlDQUFvQzs7SUFDcEMsdUNBQXFCOztJQUNyQixxQ0FBdUM7Ozs7O0lBRXZDLHlDQUEyQzs7Ozs7SUFFekMsbUNBQStCOzs7OztJQUMvQix1Q0FBK0I7Ozs7O0lBQy9CLGdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBUYWJsZUFjdGlvbkJ1dHRvblRlbXBsYXRlLFxyXG4gIFRhYmxlQ29sdW1uVGVtcGxhdGUsXHJcbiAgVGFibGVIZWFkZXJUZW1wbGF0ZSxcclxuICBUYWJsZUhlYWRlckNvbnRyb2xUZW1wbGF0ZSxcclxuICBUYWJsZUZvb3RlclRlbXBsYXRlLFxyXG4gIFRhYmxlUm93VG90YWxUZW1wbGF0ZSxcclxuICBUYWJsZVJvd0V4cGFuZFRlbXBsYXRlXHJcbn0gZnJvbSBcIi4uL2RpcmVjdGl2ZS90YWJsZS1kaXJlY3RpdmUuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFRhYmxlU2V0dGluZywgUGFnaW5nU2V0dGluZywgVGFibGVQcm9wcyB9IGZyb20gXCIuLi9tb2RlbHMvc2V0dGluZ3MubW9kZWxcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgU29ydFN0YXRlIH0gZnJvbSBcIi4uL21vZGVscy9zb3J0LW9yZGVyLm1vZGVsXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibmctdGFibGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYmxlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RhYmxlLmNvbXBvbmVudC5zYXNzXCJdLFxyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGFibGVBY3Rpb25CdXR0b25UZW1wbGF0ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHVibGljIGFjdEJ0blRlbXBsYXRlOiBUYWJsZUFjdGlvbkJ1dHRvblRlbXBsYXRlO1xyXG4gIEBDb250ZW50Q2hpbGQoVGFibGVIZWFkZXJDb250cm9sVGVtcGxhdGUsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgcHVibGljIGhlYWRlckNvbnRyb2xUZW1wbGF0ZTogVGFibGVIZWFkZXJDb250cm9sVGVtcGxhdGU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGFibGVIZWFkZXJUZW1wbGF0ZSwgeyBzdGF0aWM6IHRydWUgfSlcclxuICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRhYmxlSGVhZGVyVGVtcGxhdGU7XHJcblxyXG5cclxuICBAQ29udGVudENoaWxkKFRhYmxlRm9vdGVyVGVtcGxhdGUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHB1YmxpYyBmb290ZXJUZW1wbGF0ZTogVGFibGVGb290ZXJUZW1wbGF0ZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUYWJsZVJvd1RvdGFsVGVtcGxhdGUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHB1YmxpYyByb3dUb3RhbFRlbXBsYXRlOiBUYWJsZVJvd1RvdGFsVGVtcGxhdGU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGFibGVSb3dFeHBhbmRUZW1wbGF0ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHVibGljIHJvd0V4cGFuZFRlbXBsYXRlOiBUYWJsZVJvd0V4cGFuZFRlbXBsYXRlO1xyXG5cclxuICBwdWJsaWMgY29sVGVtcGxhdGVzOiB7IFtrZXk6IHN0cmluZ106IFRhYmxlQ29sdW1uVGVtcGxhdGUgfSA9IHt9O1xyXG4gIGNvbHVtblRyaWdnZXJFeHBhbmQkID0gbmV3IFN1YmplY3Q7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFibGVDb2x1bW5UZW1wbGF0ZSlcclxuICBzZXQgc2V0Q29sdW1uVGVtcGxhdGVzKGNvbHVtblRlbXBsYXRlczogQXJyYXk8VGFibGVDb2x1bW5UZW1wbGF0ZT4pIHtcclxuICAgIGlmICghY29sdW1uVGVtcGxhdGVzIHx8IGNvbHVtblRlbXBsYXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5jb2xUZW1wbGF0ZXMgPSB7fTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtblRlbXBsYXRlcy5mb3JFYWNoKHRlbXAgPT4ge1xyXG4gICAgICB0aGlzLmNvbFRlbXBsYXRlc1t0ZW1wLmZvcl0gPSB0ZW1wO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBAVmlld0NoaWxkKFwidGJvZHlFbGVtZW50XCIsIHsgc3RhdGljOiB0cnVlIH0pIHRib2R5RWxlbWVudDogRWxlbWVudFJlZjxcclxuICAgIEhUTUxFbGVtZW50XHJcbiAgPjtcclxuXHJcbiAgQElucHV0KCkgc2V0dGluZ3M6IFRhYmxlU2V0dGluZzxhbnk+O1xyXG4gIEBJbnB1dCgpIHRvdGFsQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBkYXRhU291cmNlOiBhbnlbXTtcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZmlsdGVyTW9kZWwkOiBPYnNlcnZhYmxlPGFueT5cclxuICBASW5wdXQoKSBkYXRhUHJvcE5hbWUgPSBcImRhdGFcIjtcclxuICBASW5wdXQoKSBtZXRob2QgPSBcImdldFwiO1xyXG4gIEBJbnB1dCgpIHNvcnRTdGF0ZSQ6IE9ic2VydmFibGU8U29ydFN0YXRlPlxyXG5cclxuICBAT3V0cHV0KCkgcGFnaW5nT3B0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8UGFnaW5nU2V0dGluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2luZ1NldHRpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHNvcnRTdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPFNvcnRTdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNvcnRTdGF0ZT4oKTtcclxuXHJcblxyXG4gIHBhZ2luZ09wdGlvbnM6IFBhZ2luZ1NldHRpbmcgPSBuZXcgUGFnaW5nU2V0dGluZygpXHJcbiAgcHJvcHM6IFRhYmxlUHJvcHMgPSBuZXcgVGFibGVQcm9wcygpXHJcbiAgZmlsdGVyTW9kZWw6IGFueSA9IHt9XHJcbiAgc29ydFN0YXRlOiBTb3J0U3RhdGUgPSBuZXcgU29ydFN0YXRlKCk7XHJcblxyXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KClcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0U2V0dGluZ3MoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJPYnNlcnZlcigpXHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGFTb3VyY2UgJiYgY2hhbmdlcy5kYXRhU291cmNlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWdpc3Rlck9ic2VydmVyKCkge1xyXG4gICAgaWYodGhpcy5maWx0ZXJNb2RlbCQpe1xyXG4gICAgICB0aGlzLmZpbHRlck1vZGVsJC5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZmlsdGVyID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlck1vZGVsID0gZmlsdGVyXHJcbiAgICAgICAgdGhpcy5zaG91bGRGZXRjaERhdGEoKSAmJiB0aGlzLmZldGNoRGF0YSgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnNvcnRTdGF0ZSQpe1xyXG4gICAgICB0aGlzLnNvcnRTdGF0ZSQucGlwZSh0YWtlVW50aWwodGhpcy5fdW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHNvcnRTdGF0ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zb3J0U3RhdGUgPSBzb3J0U3RhdGVcclxuICAgICAgICB0aGlzLnNob3VsZEZldGNoRGF0YSgpICYmIHRoaXMuZmV0Y2hEYXRhKClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgc2hvdWxkRmV0Y2hEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXJsXHJcbiAgfVxyXG4gIGZldGNoRGF0YSgpIHtcclxuICAgIGNvbnN0IG1vZGVsID0geyAuLi50aGlzLmZpbHRlck1vZGVsLCAuLi50aGlzLnBhZ2luZ09wdGlvbnMsIC4uLnRoaXMuc29ydFN0YXRlIH1cclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5faHR0cENsaWVudC5nZXQodGhpcy51cmwsIHsgcGFyYW1zOiBtb2RlbCB9KS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHJlc1t0aGlzLmRhdGFQcm9wTmFtZV1cclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluaXRTZXR0aW5ncygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgVGFibGVTZXR0aW5nKHRoaXMuc2V0dGluZ3MpXHJcbiAgICB0aGlzLmluaXRJbnRlcm5hbFByb3BzKClcclxuICAgIHRoaXMudmFsaWRhdGVJbml0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKVxyXG4gIH1cclxuXHJcbiAgaW5pdEludGVybmFsUHJvcHMoKSB7XHJcbiAgICB0aGlzLnByb3BzLmlzSGF2ZUhlYWRlciA9IHRoaXMuc2V0dGluZ3MgJiYgdGhpcy5zZXR0aW5ncy5oZWFkZXJcclxuICAgIHRoaXMucHJvcHMuc29ydGFibGUgPSB0aGlzLnNldHRpbmdzICYmIHRoaXMuc2V0dGluZ3Muc29ydGFibGVcclxuICAgIHRoaXMucHJvcHMuaXNIYXZlQWN0aW9uQnV0dG9ucyA9IHRoaXMuc2V0dGluZ3MgJiYgdGhpcy5zZXR0aW5ncy5hY3Rpb25CdXR0b25zICYmIHRoaXMuc2V0dGluZ3MuYWN0aW9uQnV0dG9ucy5idXR0b25zICYmIHRoaXMuc2V0dGluZ3MuYWN0aW9uQnV0dG9ucy5idXR0b25zLmxlbmd0aCA+IDA7XHJcbiAgICB0aGlzLnByb3BzLnRhYmxlQ29sU3BhbiA9IHRoaXMuc2V0dGluZ3MuY29sdW1ucy5sZW5ndGggKyAxXHJcbiAgICB0aGlzLnByb3BzLmhhdmVSb3dUb3RhbCA9IHRoaXMucm93VG90YWxUZW1wbGF0ZSA/IHRydWUgOiBmYWxzZVxyXG4gICAgLy8gY29uc29sZS50YWJsZSh0aGlzLnByb3BzKVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVJbml0Q29uZmlndXJhdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmZpbHRlck1vZGVsJCAmJiB0aGlzLmRhdGFTb3VyY2UpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiQ29uc2lkZXIgdG8gcmVtb3ZlIGZpbHRlck1vZGVsICh1bi11c2FnZSkgd2hpbGUgdXNpbmcgZGF0YVNvdXJjZVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zb3J0U3RhdGUgJiYgdGhpcy5kYXRhU291cmNlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIkNvbnNpZGVyIHRvIHJlbW92ZSBzb3J0U3RhdGUgKHVuLXVzYWdlKSB3aGlsZSB1c2luZyBkYXRhU291cmNlXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlT3JkZXJTdGF0ZUNoYW5nZShzb3J0U3RhdGU6IFNvcnRTdGF0ZSkge1xyXG4gICAgLy8gdGhpcy5yZXNldFBhZ2luZ09wdGlvbigpXHJcbiAgICB0aGlzLnNvcnRTdGF0ZSA9IHNvcnRTdGF0ZVxyXG4gICAgdGhpcy5zb3J0U3RhdGVDaGFuZ2UuZW1pdChzb3J0U3RhdGUpXHJcbiAgICB0aGlzLnNob3VsZEZldGNoRGF0YSgpICYmIHRoaXMuZmV0Y2hEYXRhKClcclxuICB9XHJcbiAgb25QYWdpbmdPcHRpb25DaGFuZ2UocGFnaW5nT3B0aW9uczogUGFnaW5nU2V0dGluZykge1xyXG4gICAgdGhpcy5wYWdpbmdPcHRpb25zID0gcGFnaW5nT3B0aW9uc1xyXG4gICAgdGhpcy5wYWdpbmdPcHRpb25DaGFuZ2UuZW1pdChwYWdpbmdPcHRpb25zKVxyXG4gICAgdGhpcy5zaG91bGRGZXRjaERhdGEoKSAmJiB0aGlzLmZldGNoRGF0YSgpXHJcbiAgfVxyXG4gIHJlc2V0T3JkZXJTdGF0ZSgpIHtcclxuICAgIHRoaXMuc29ydFN0YXRlID0gbmV3IFNvcnRTdGF0ZSgpXHJcbiAgfVxyXG4gIHJlc2V0UGFnaW5nT3B0aW9uKCkge1xyXG4gICAgdGhpcy5wYWdpbmdPcHRpb25zID0gbmV3IFBhZ2luZ1NldHRpbmcoKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ29sdW1uVHJpZ2dlckV4cGFuZChlbGVPYmope1xyXG4gICAgdGhpcy5jb2x1bW5UcmlnZ2VyRXhwYW5kJC5uZXh0KGVsZU9iailcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpXHJcbiAgICB0aGlzLl91bnN1YnNjcmliZSQuY29tcGxldGUoKVxyXG4gIH1cclxufVxyXG4iXX0=