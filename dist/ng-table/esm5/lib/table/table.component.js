/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ApplicationRef, ContentChild, ContentChildren, ViewChild, ElementRef, Input, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { TableActionButtonTemplate, TableColumnTemplate, TableHeaderTemplate, TableHeaderControlTemplate, TableFooterTemplate, TableRowTotalTemplate, TableRowExpandTemplate } from "../directive/table-directive.directive";
import { TableSetting, PagingSetting, TableProps } from "../models/settings.model";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SortState } from "../models/sort-order.model";
import { takeUntil } from 'rxjs/operators';
var NgTableComponent = /** @class */ (function () {
    function NgTableComponent(_appRef, _httpClient, _cdr) {
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
    Object.defineProperty(NgTableComponent.prototype, "setColumnTemplates", {
        set: /**
         * @param {?} columnTemplates
         * @return {?}
         */
        function (columnTemplates) {
            var _this = this;
            if (!columnTemplates || columnTemplates.length === 0) {
                this.colTemplates = {};
                return;
            }
            columnTemplates.forEach((/**
             * @param {?} temp
             * @return {?}
             */
            function (temp) {
                _this.colTemplates[temp.for] = temp;
            }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    NgTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initSettings();
        this.registerObserver();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.dataSource && changes.dataSource.currentValue) {
            this._cdr.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.registerObserver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.filterModel$) {
            this.filterModel$.pipe(takeUntil(this._unsubscribe$)).subscribe((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                _this.filterModel = filter;
                _this.shouldFetchData() && _this.fetchData();
            }));
        }
        if (this.sortState$) {
            this.sortState$.pipe(takeUntil(this._unsubscribe$)).subscribe((/**
             * @param {?} sortState
             * @return {?}
             */
            function (sortState) {
                _this.sortState = sortState;
                _this.shouldFetchData() && _this.fetchData();
            }));
        }
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.shouldFetchData = /**
     * @return {?}
     */
    function () {
        return this.url;
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.fetchData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var model = tslib_1.__assign({}, this.filterModel, this.pagingOptions, this.sortState);
        this.isLoading = true;
        this._httpClient.get(this.url, { params: model }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.dataSource = res[_this.dataPropName];
            _this.isLoading = false;
        }));
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.initSettings = /**
     * @return {?}
     */
    function () {
        this.settings = new TableSetting(this.settings);
        this.initInternalProps();
        this.validateInitConfiguration();
        console.log(this.dataSource);
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.initInternalProps = /**
     * @return {?}
     */
    function () {
        this.props.isHaveHeader = this.settings && this.settings.header;
        this.props.sortable = this.settings && this.settings.sortable;
        this.props.isHaveActionButtons = this.settings && this.settings.actionButtons && this.settings.actionButtons.buttons && this.settings.actionButtons.buttons.length > 0;
        this.props.tableColSpan = this.settings.columns.length + 1;
        this.props.haveRowTotal = this.rowTotalTemplate ? true : false;
        // console.table(this.props)
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.validateInitConfiguration = /**
     * @return {?}
     */
    function () {
        if (this.filterModel$ && this.dataSource) {
            console.warn("Consider to remove filterModel (un-usage) while using dataSource");
        }
        if (this.sortState && this.dataSource) {
            console.warn("Consider to remove sortState (un-usage) while using dataSource");
        }
    };
    /**
     * @param {?} sortState
     * @return {?}
     */
    NgTableComponent.prototype.handleOrderStateChange = /**
     * @param {?} sortState
     * @return {?}
     */
    function (sortState) {
        // this.resetPagingOption()
        this.sortState = sortState;
        this.sortStateChange.emit(sortState);
        this.shouldFetchData() && this.fetchData();
    };
    /**
     * @param {?} pagingOptions
     * @return {?}
     */
    NgTableComponent.prototype.onPagingOptionChange = /**
     * @param {?} pagingOptions
     * @return {?}
     */
    function (pagingOptions) {
        this.pagingOptions = pagingOptions;
        this.pagingOptionChange.emit(pagingOptions);
        this.shouldFetchData() && this.fetchData();
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.resetOrderState = /**
     * @return {?}
     */
    function () {
        this.sortState = new SortState();
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.resetPagingOption = /**
     * @return {?}
     */
    function () {
        this.pagingOptions = new PagingSetting();
    };
    /**
     * @param {?} eleObj
     * @return {?}
     */
    NgTableComponent.prototype.handleColumnTriggerExpand = /**
     * @param {?} eleObj
     * @return {?}
     */
    function (eleObj) {
        this.columnTriggerExpand$.next(eleObj);
    };
    /**
     * @return {?}
     */
    NgTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    };
    NgTableComponent.decorators = [
        { type: Component, args: [{
                    selector: "ng-table",
                    template: "<!-- <ng-table-column [settings]=\"settings\"></ng-table-column> -->\r\n\r\n<div class=\"ng-table-container\">\r\n    <div *ngIf=\"isLoading\" class=\"table-loading\">\r\n        <div class=\"loading-spinner\">\r\n            <i>Refresh icon go here</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-container\" [ngClass]=\"{'loading': isLoading}\">\r\n        <!-- injected template  -->\r\n        <ng-table-header *ngIf=\"props.isHaveHeader\" [headerControlTemplate]=\"headerControlTemplate\" [headerTemplate]=\"headerTemplate\" [settings]=\"settings\"></ng-table-header>\r\n        <ng-table-column (onTriggerExpand)=\"handleColumnTriggerExpand($event)\" #tbColumn></ng-table-column>\r\n        <!-- table header -->\r\n        <ng-action-button [actionButtonSettings]=\"settings.actionButtons\" #tbActionButtons [actBtnTemplate]=\"actBtnTemplate\"></ng-action-button>\r\n        <ng-table-content \r\n            [columnTriggerExpand$] = \"columnTriggerExpand$\"\r\n            [settings]=\"settings\" [sortState]=\"sortState\" [props]=\"props\" [dataSource]=\"dataSource\" [colTemplates]=\"colTemplates\"\r\n            [tbColumn]=\"tbColumn\" [tbActions]=\"tbActionButtons\" [rowTotalTemplate]=\"rowTotalTemplate\" [isLoading]=\"isLoading\"\r\n            (changeOrderState)=\"handleOrderStateChange($event)\" [rowExpandTemplate]=\"rowExpandTemplate\"\r\n            > \r\n        </ng-table-content>\r\n        <!-- table footeer -->\r\n        <div class=\"table-footer\" *ngIf=\"footerTemplate && footerTemplate.templateRef\">\r\n            <ng-container *ngTemplateOutlet=\"footerTemplate.templateRef\"></ng-container>\r\n        </div>\r\n        <ng-table-navigation *ngIf=\"settings.pagination\" [totalCount]=\"totalCount\" (change)=\"onPagingOptionChange($event)\"></ng-table-navigation>\r\n    </div>\r\n\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
                    styles: [":host ::ng-deep .flex{display:flex!important}:host ::ng-deep .flex-fill{flex:1 1 auto!important}:host ::ng-deep table{text-align:left;border-radius:2px 2px 0 0;border-collapse:separate;border-spacing:0;width:100%}:host ::ng-deep table td,:host ::ng-deep table th{padding:16px;text-shadow:1px 1px 1px #fff;white-space:nowrap;border-collapse:separate;position:relative;overflow-wrap:break-word;border-bottom:1px solid #f0f0f0}:host ::ng-deep .text-right{text-align:right}:host ::ng-deep .text-center{text-align:center}:host ::ng-deep .text-left{text-align:left}:host ::ng-deep .disabled{color:#fff;background-color:grey}.ng-table-container{position:relative}.ng-table-container .table-loading{position:absolute;background:grey;z-index:1;top:50%;left:50%}.ng-table-container .main-container.loading{opacity:.7}"]
                }] }
    ];
    /** @nocollapse */
    NgTableComponent.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: HttpClient },
        { type: ChangeDetectorRef }
    ]; };
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
    return NgTableComponent;
}());
export { NgTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsY0FBYyxFQUNkLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFFVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLDBCQUEwQixFQUMxQixtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN2QixNQUFNLHdDQUF3QyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRTFDO0lBZ0VFLDBCQUNVLE9BQXVCLEVBQ3ZCLFdBQXVCLEVBQ3ZCLElBQXVCO1FBRnZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBekMxQixpQkFBWSxHQUEyQyxFQUFFLENBQUM7UUFDakUseUJBQW9CLEdBQUcsSUFBSSxPQUFPLENBQUM7UUF1QjFCLGlCQUFZLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZCx1QkFBa0Is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LGtDQUF3Qjs7SUFDeEIsc0NBQTBDOztJQUUxQyw4Q0FBOEY7O0lBQzlGLDJDQUFtRjs7SUFHbkYseUNBQWtEOztJQUNsRCxpQ0FBb0M7O0lBQ3BDLHVDQUFxQjs7SUFDckIscUNBQXVDOzs7OztJQUV2Qyx5Q0FBMkM7Ozs7O0lBRXpDLG1DQUErQjs7Ozs7SUFDL0IsdUNBQStCOzs7OztJQUMvQixnQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBRdWVyeUxpc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgVGFibGVBY3Rpb25CdXR0b25UZW1wbGF0ZSxcclxuICBUYWJsZUNvbHVtblRlbXBsYXRlLFxyXG4gIFRhYmxlSGVhZGVyVGVtcGxhdGUsXHJcbiAgVGFibGVIZWFkZXJDb250cm9sVGVtcGxhdGUsXHJcbiAgVGFibGVGb290ZXJUZW1wbGF0ZSxcclxuICBUYWJsZVJvd1RvdGFsVGVtcGxhdGUsXHJcbiAgVGFibGVSb3dFeHBhbmRUZW1wbGF0ZVxyXG59IGZyb20gXCIuLi9kaXJlY3RpdmUvdGFibGUtZGlyZWN0aXZlLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBUYWJsZVNldHRpbmcsIFBhZ2luZ1NldHRpbmcsIFRhYmxlUHJvcHMgfSBmcm9tIFwiLi4vbW9kZWxzL3NldHRpbmdzLm1vZGVsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFNvcnRTdGF0ZSB9IGZyb20gXCIuLi9tb2RlbHMvc29ydC1vcmRlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5nLXRhYmxlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90YWJsZS5jb21wb25lbnQuc2Fzc1wiXSxcclxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBAQ29udGVudENoaWxkKFRhYmxlQWN0aW9uQnV0dG9uVGVtcGxhdGUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHB1YmxpYyBhY3RCdG5UZW1wbGF0ZTogVGFibGVBY3Rpb25CdXR0b25UZW1wbGF0ZTtcclxuICBAQ29udGVudENoaWxkKFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlLCB7IHN0YXRpYzogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBoZWFkZXJDb250cm9sVGVtcGxhdGU6IFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlO1xyXG5cclxuICBAQ29udGVudENoaWxkKFRhYmxlSGVhZGVyVGVtcGxhdGUsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBUYWJsZUhlYWRlclRlbXBsYXRlO1xyXG5cclxuXHJcbiAgQENvbnRlbnRDaGlsZChUYWJsZUZvb3RlclRlbXBsYXRlLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IFRhYmxlRm9vdGVyVGVtcGxhdGU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGFibGVSb3dUb3RhbFRlbXBsYXRlLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBwdWJsaWMgcm93VG90YWxUZW1wbGF0ZTogVGFibGVSb3dUb3RhbFRlbXBsYXRlO1xyXG5cclxuICBAQ29udGVudENoaWxkKFRhYmxlUm93RXhwYW5kVGVtcGxhdGUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHB1YmxpYyByb3dFeHBhbmRUZW1wbGF0ZTogVGFibGVSb3dFeHBhbmRUZW1wbGF0ZTtcclxuXHJcbiAgcHVibGljIGNvbFRlbXBsYXRlczogeyBba2V5OiBzdHJpbmddOiBUYWJsZUNvbHVtblRlbXBsYXRlIH0gPSB7fTtcclxuICBjb2x1bW5UcmlnZ2VyRXhwYW5kJCA9IG5ldyBTdWJqZWN0O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFRhYmxlQ29sdW1uVGVtcGxhdGUpXHJcbiAgc2V0IHNldENvbHVtblRlbXBsYXRlcyhjb2x1bW5UZW1wbGF0ZXM6IEFycmF5PFRhYmxlQ29sdW1uVGVtcGxhdGU+KSB7XHJcbiAgICBpZiAoIWNvbHVtblRlbXBsYXRlcyB8fCBjb2x1bW5UZW1wbGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY29sVGVtcGxhdGVzID0ge307XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5UZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wID0+IHtcclxuICAgICAgdGhpcy5jb2xUZW1wbGF0ZXNbdGVtcC5mb3JdID0gdGVtcDtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgQFZpZXdDaGlsZChcInRib2R5RWxlbWVudFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSB0Ym9keUVsZW1lbnQ6IEVsZW1lbnRSZWY8XHJcbiAgICBIVE1MRWxlbWVudFxyXG4gID47XHJcblxyXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBUYWJsZVNldHRpbmc8YW55PjtcclxuICBASW5wdXQoKSB0b3RhbENvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZGF0YVNvdXJjZTogYW55W107XHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZpbHRlck1vZGVsJDogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgQElucHV0KCkgZGF0YVByb3BOYW1lID0gXCJkYXRhXCI7XHJcbiAgQElucHV0KCkgbWV0aG9kID0gXCJnZXRcIjtcclxuICBASW5wdXQoKSBzb3J0U3RhdGUkOiBPYnNlcnZhYmxlPFNvcnRTdGF0ZT5cclxuXHJcbiAgQE91dHB1dCgpIHBhZ2luZ09wdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFBhZ2luZ1NldHRpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdpbmdTZXR0aW5nPigpO1xyXG4gIEBPdXRwdXQoKSBzb3J0U3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTb3J0U3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0U3RhdGU+KCk7XHJcblxyXG5cclxuICBwYWdpbmdPcHRpb25zOiBQYWdpbmdTZXR0aW5nID0gbmV3IFBhZ2luZ1NldHRpbmcoKVxyXG4gIHByb3BzOiBUYWJsZVByb3BzID0gbmV3IFRhYmxlUHJvcHMoKVxyXG4gIGZpbHRlck1vZGVsOiBhbnkgPSB7fVxyXG4gIHNvcnRTdGF0ZTogU29ydFN0YXRlID0gbmV3IFNvcnRTdGF0ZSgpO1xyXG5cclxuICBwcml2YXRlIF91bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdFNldHRpbmdzKCk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2ZXIoKVxyXG4gIH1cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhU291cmNlICYmIGNoYW5nZXMuZGF0YVNvdXJjZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJPYnNlcnZlcigpIHtcclxuICAgIGlmKHRoaXMuZmlsdGVyTW9kZWwkKXtcclxuICAgICAgdGhpcy5maWx0ZXJNb2RlbCQucGlwZSh0YWtlVW50aWwodGhpcy5fdW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGZpbHRlciA9PiB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJNb2RlbCA9IGZpbHRlclxyXG4gICAgICAgIHRoaXMuc2hvdWxkRmV0Y2hEYXRhKCkgJiYgdGhpcy5mZXRjaERhdGEoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5zb3J0U3RhdGUkKXtcclxuICAgICAgdGhpcy5zb3J0U3RhdGUkLnBpcGUodGFrZVVudGlsKHRoaXMuX3Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShzb3J0U3RhdGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc29ydFN0YXRlID0gc29ydFN0YXRlXHJcbiAgICAgICAgdGhpcy5zaG91bGRGZXRjaERhdGEoKSAmJiB0aGlzLmZldGNoRGF0YSgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3VsZEZldGNoRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLnVybFxyXG4gIH1cclxuICBmZXRjaERhdGEoKSB7XHJcbiAgICBjb25zdCBtb2RlbCA9IHsgLi4udGhpcy5maWx0ZXJNb2RlbCwgLi4udGhpcy5wYWdpbmdPcHRpb25zLCAuLi50aGlzLnNvcnRTdGF0ZSB9XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcclxuICAgIHRoaXMuX2h0dHBDbGllbnQuZ2V0KHRoaXMudXJsLCB7IHBhcmFtczogbW9kZWwgfSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSByZXNbdGhpcy5kYXRhUHJvcE5hbWVdXHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxuICBpbml0U2V0dGluZ3MoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IFRhYmxlU2V0dGluZyh0aGlzLnNldHRpbmdzKVxyXG4gICAgdGhpcy5pbml0SW50ZXJuYWxQcm9wcygpXHJcbiAgICB0aGlzLnZhbGlkYXRlSW5pdENvbmZpZ3VyYXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSlcclxuICB9XHJcblxyXG4gIGluaXRJbnRlcm5hbFByb3BzKCkge1xyXG4gICAgdGhpcy5wcm9wcy5pc0hhdmVIZWFkZXIgPSB0aGlzLnNldHRpbmdzICYmIHRoaXMuc2V0dGluZ3MuaGVhZGVyXHJcbiAgICB0aGlzLnByb3BzLnNvcnRhYmxlID0gdGhpcy5zZXR0aW5ncyAmJiB0aGlzLnNldHRpbmdzLnNvcnRhYmxlXHJcbiAgICB0aGlzLnByb3BzLmlzSGF2ZUFjdGlvbkJ1dHRvbnMgPSB0aGlzLnNldHRpbmdzICYmIHRoaXMuc2V0dGluZ3MuYWN0aW9uQnV0dG9ucyAmJiB0aGlzLnNldHRpbmdzLmFjdGlvbkJ1dHRvbnMuYnV0dG9ucyAmJiB0aGlzLnNldHRpbmdzLmFjdGlvbkJ1dHRvbnMuYnV0dG9ucy5sZW5ndGggPiAwO1xyXG4gICAgdGhpcy5wcm9wcy50YWJsZUNvbFNwYW4gPSB0aGlzLnNldHRpbmdzLmNvbHVtbnMubGVuZ3RoICsgMVxyXG4gICAgdGhpcy5wcm9wcy5oYXZlUm93VG90YWwgPSB0aGlzLnJvd1RvdGFsVGVtcGxhdGUgPyB0cnVlIDogZmFsc2VcclxuICAgIC8vIGNvbnNvbGUudGFibGUodGhpcy5wcm9wcylcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlSW5pdENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJNb2RlbCQgJiYgdGhpcy5kYXRhU291cmNlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIkNvbnNpZGVyIHRvIHJlbW92ZSBmaWx0ZXJNb2RlbCAodW4tdXNhZ2UpIHdoaWxlIHVzaW5nIGRhdGFTb3VyY2VcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc29ydFN0YXRlICYmIHRoaXMuZGF0YVNvdXJjZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCJDb25zaWRlciB0byByZW1vdmUgc29ydFN0YXRlICh1bi11c2FnZSkgd2hpbGUgdXNpbmcgZGF0YVNvdXJjZVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZU9yZGVyU3RhdGVDaGFuZ2Uoc29ydFN0YXRlOiBTb3J0U3RhdGUpIHtcclxuICAgIC8vIHRoaXMucmVzZXRQYWdpbmdPcHRpb24oKVxyXG4gICAgdGhpcy5zb3J0U3RhdGUgPSBzb3J0U3RhdGVcclxuICAgIHRoaXMuc29ydFN0YXRlQ2hhbmdlLmVtaXQoc29ydFN0YXRlKVxyXG4gICAgdGhpcy5zaG91bGRGZXRjaERhdGEoKSAmJiB0aGlzLmZldGNoRGF0YSgpXHJcbiAgfVxyXG4gIG9uUGFnaW5nT3B0aW9uQ2hhbmdlKHBhZ2luZ09wdGlvbnM6IFBhZ2luZ1NldHRpbmcpIHtcclxuICAgIHRoaXMucGFnaW5nT3B0aW9ucyA9IHBhZ2luZ09wdGlvbnNcclxuICAgIHRoaXMucGFnaW5nT3B0aW9uQ2hhbmdlLmVtaXQocGFnaW5nT3B0aW9ucylcclxuICAgIHRoaXMuc2hvdWxkRmV0Y2hEYXRhKCkgJiYgdGhpcy5mZXRjaERhdGEoKVxyXG4gIH1cclxuICByZXNldE9yZGVyU3RhdGUoKSB7XHJcbiAgICB0aGlzLnNvcnRTdGF0ZSA9IG5ldyBTb3J0U3RhdGUoKVxyXG4gIH1cclxuICByZXNldFBhZ2luZ09wdGlvbigpIHtcclxuICAgIHRoaXMucGFnaW5nT3B0aW9ucyA9IG5ldyBQYWdpbmdTZXR0aW5nKClcclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbHVtblRyaWdnZXJFeHBhbmQoZWxlT2JqKXtcclxuICAgIHRoaXMuY29sdW1uVHJpZ2dlckV4cGFuZCQubmV4dChlbGVPYmopXHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLm5leHQoKVxyXG4gICAgdGhpcy5fdW5zdWJzY3JpYmUkLmNvbXBsZXRlKClcclxuICB9XHJcbn1cclxuIl19