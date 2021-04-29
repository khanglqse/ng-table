import { Injectable, ɵɵdefineInjectable, Directive, TemplateRef, Input, EventEmitter, Component, ApplicationRef, ChangeDetectorRef, ContentChild, ContentChildren, ViewChild, Output, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgTableService {
    constructor() { }
}
NgTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgTableService.ctorParameters = () => [];
/** @nocollapse */ NgTableService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgTableService_Factory() { return new NgTableService(); }, token: NgTableService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/table-directive.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableColumnTemplate {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TableColumnTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tableColumn]' },] }
];
/** @nocollapse */
TableColumnTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
TableColumnTemplate.propDecorators = {
    for: [{ type: Input }]
};
if (false) {
    /**
     * columnDef property
     * @type {?}
     */
    TableColumnTemplate.prototype.for;
    /** @type {?} */
    TableColumnTemplate.prototype.templateRef;
}
class TableActionButtonTemplate {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TableActionButtonTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tableActionButton]' },] }
];
/** @nocollapse */
TableActionButtonTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    TableActionButtonTemplate.prototype.templateRef;
}
class TableRowTotalTemplate {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TableRowTotalTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tableRowTotal]' },] }
];
/** @nocollapse */
TableRowTotalTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    TableRowTotalTemplate.prototype.templateRef;
}
class TableFooterTemplate {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TableFooterTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tableFooter]' },] }
];
/** @nocollapse */
TableFooterTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    TableFooterTemplate.prototype.templateRef;
}
class TableHeaderControlTemplate {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TableHeaderControlTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tableHeaderControl]' },] }
];
/** @nocollapse */
TableHeaderControlTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    TableHeaderControlTemplate.prototype.templateRef;
}
class TableHeaderTemplate {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TableHeaderTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tableHeader]' },] }
];
/** @nocollapse */
TableHeaderTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    TableHeaderTemplate.prototype.templateRef;
}
class TableRowExpandTemplate {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TableRowExpandTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tableRowExpand]' },] }
];
/** @nocollapse */
TableRowExpandTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    TableRowExpandTemplate.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/settings.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IBaseSetting() { }
if (false) {
    /**
     * Css class apply to TD
     * @type {?|undefined}
     */
    IBaseSetting.prototype.css;
    /** @type {?|undefined} */
    IBaseSetting.prototype.align;
    /** @type {?|undefined} */
    IBaseSetting.prototype.width;
    /** @type {?|undefined} */
    IBaseSetting.prototype.height;
}
/**
 * @template T
 */
class TableSetting {
    /**
     * @param {?} setting
     */
    constructor(setting) {
        this.align = 'text-left';
        this.columns = [];
        this.pagination = true;
        this.sortable = true;
        /**
         * Message display when table is empty
         */
        this.showLoading = true;
        Object.assign(this, setting);
        this.actionButtons = new ActionButtonSetting(this.actionButtons);
        this.rows = new RowSetting(this.rows);
        for (const k in this.columns) {
            if (this.columns[k]) {
                this.columns[k] = new ColumnSetting(this.columns[k]);
            }
        }
    }
}
if (false) {
    /** @type {?} */
    TableSetting.prototype.css;
    /** @type {?} */
    TableSetting.prototype.align;
    /** @type {?} */
    TableSetting.prototype.width;
    /** @type {?} */
    TableSetting.prototype.height;
    /** @type {?} */
    TableSetting.prototype.header;
    /** @type {?} */
    TableSetting.prototype.columns;
    /** @type {?} */
    TableSetting.prototype.rows;
    /** @type {?} */
    TableSetting.prototype.actionButtons;
    /** @type {?} */
    TableSetting.prototype.pagination;
    /** @type {?} */
    TableSetting.prototype.sortable;
    /**
     * Message display when table is empty
     * @type {?}
     */
    TableSetting.prototype.showLoading;
}
/**
 * @template T
 */
class ColumnSetting {
    /**
     * @param {?} setting
     */
    constructor(setting) {
        this.type = 'text';
        // public dateTimeFormat?: { input?: string; output: string; } = { input: 'YYYY-MM-DDTHH:mm:ss', output: 'ddd DD/MM/YYYY hh:mma' };
        this.dateTimeFormat = 'short';
        this.sortable = true;
        this.triggerExpandIcon = 'arrow';
        this.pinned = false;
        this.align = 'text-left';
        this.triggerCloseExpanded = true;
        this.colSpan = 1;
        this.rowSpan = 1;
        Object.assign(this, setting);
        if (this.pinned && !this.width) {
            this.width = '180px';
        }
    }
}
if (false) {
    /** @type {?} */
    ColumnSetting.prototype.columnDef;
    /** @type {?} */
    ColumnSetting.prototype.title;
    /** @type {?} */
    ColumnSetting.prototype.type;
    /** @type {?} */
    ColumnSetting.prototype.dateTimeFormat;
    /** @type {?} */
    ColumnSetting.prototype.numberFormat;
    /** @type {?} */
    ColumnSetting.prototype.sortable;
    /** @type {?} */
    ColumnSetting.prototype.triggerExpand;
    /** @type {?} */
    ColumnSetting.prototype.triggerExpandIcon;
    /** @type {?} */
    ColumnSetting.prototype.css;
    /** @type {?} */
    ColumnSetting.prototype.width;
    /** @type {?} */
    ColumnSetting.prototype.height;
    /** @type {?} */
    ColumnSetting.prototype.pinned;
    /** @type {?} */
    ColumnSetting.prototype.align;
    /** @type {?} */
    ColumnSetting.prototype.triggerExpandFunc;
    /** @type {?} */
    ColumnSetting.prototype.triggerCloseExpanded;
    /** @type {?} */
    ColumnSetting.prototype.triggerCloseExpandedFunc;
    /** @type {?} */
    ColumnSetting.prototype.colSpan;
    /** @type {?} */
    ColumnSetting.prototype.colSpanFunc;
    /** @type {?} */
    ColumnSetting.prototype.rowSpan;
    /** @type {?} */
    ColumnSetting.prototype.rowSpanFunc;
    /**
     * Return data that display in table
     * @type {?}
     */
    ColumnSetting.prototype.prop;
    /**
     * Func return sort field data
     * @type {?}
     */
    ColumnSetting.prototype.sortBy;
}
/**
 * @template T
 */
class RowSetting {
    /**
     * @param {?} setting
     */
    constructor(setting) {
        this.align = 'text-left';
        this.triggerExpand = false;
        this.triggerCloseExpanded = true;
        Object.assign(this, setting);
    }
}
if (false) {
    /** @type {?} */
    RowSetting.prototype.trCssFunc;
    /** @type {?} */
    RowSetting.prototype.css;
    /** @type {?} */
    RowSetting.prototype.width;
    /** @type {?} */
    RowSetting.prototype.height;
    /** @type {?} */
    RowSetting.prototype.align;
    /** @type {?} */
    RowSetting.prototype.triggerExpand;
    /** @type {?} */
    RowSetting.prototype.triggerExpandFunc;
    /** @type {?} */
    RowSetting.prototype.triggerCloseExpanded;
    /** @type {?} */
    RowSetting.prototype.triggerCloseExpandedFunc;
}
/**
 * @template T
 */
class ActionButtonSetting {
    /**
     * @param {?} setting
     */
    constructor(setting) {
        this.title = 'Actions';
        this.align = 'text-left';
        Object.assign(this, setting);
    }
}
if (false) {
    /** @type {?} */
    ActionButtonSetting.prototype.title;
    /** @type {?} */
    ActionButtonSetting.prototype.buttons;
    /** @type {?} */
    ActionButtonSetting.prototype.css;
    /** @type {?} */
    ActionButtonSetting.prototype.width;
    /** @type {?} */
    ActionButtonSetting.prototype.height;
    /** @type {?} */
    ActionButtonSetting.prototype.align;
}
/**
 * @record
 */
function IHeaderSetting() { }
if (false) {
    /** @type {?|undefined} */
    IHeaderSetting.prototype.title;
    /** @type {?|undefined} */
    IHeaderSetting.prototype.icon;
}
/**
 * @template T
 */
class ButtonSetting {
    /**
     * @param {?} setting
     */
    constructor(setting) {
        this.align = 'text-left';
        /**
         * Tooltip for disabled button when un-authorized
         */
        this.unAuthorizedMessage = 'You may ask your Manager to update the settings';
        Object.assign(this, setting);
    }
}
if (false) {
    /** @type {?} */
    ButtonSetting.prototype.tooltip;
    /** @type {?} */
    ButtonSetting.prototype.icon;
    /** @type {?} */
    ButtonSetting.prototype.actionLink;
    /** @type {?} */
    ButtonSetting.prototype.title;
    /** @type {?} */
    ButtonSetting.prototype.css;
    /** @type {?} */
    ButtonSetting.prototype.width;
    /** @type {?} */
    ButtonSetting.prototype.height;
    /** @type {?} */
    ButtonSetting.prototype.align;
    /**
     * Tooltip for disabled button when un-authorized
     * @type {?}
     */
    ButtonSetting.prototype.unAuthorizedMessage;
    /**
     * Action on click
     * @type {?}
     */
    ButtonSetting.prototype.action;
    /**
     * Action link array builder
     * @type {?}
     */
    ButtonSetting.prototype.actionLinkFunc;
    /**
     * Condition to disable button
     * @type {?}
     */
    ButtonSetting.prototype.disableOn;
}
/**
 * @record
 */
function ITableState() { }
if (false) {
    /** @type {?} */
    ITableState.prototype.sortState;
    /** @type {?} */
    ITableState.prototype.currentPage;
    /** @type {?} */
    ITableState.prototype.pageLength;
}
class PagingSetting {
    constructor() {
        this.pageIndex = 0;
        this.pageNumber = 1;
        this.pageSize = 10;
    }
}
if (false) {
    /** @type {?} */
    PagingSetting.prototype.pageIndex;
    /** @type {?} */
    PagingSetting.prototype.pageNumber;
    /** @type {?} */
    PagingSetting.prototype.pageSize;
    /** @type {?} */
    PagingSetting.prototype.totalCount;
    /** @type {?} */
    PagingSetting.prototype.sortState;
}
class TableProps {
}
if (false) {
    /** @type {?} */
    TableProps.prototype.isHaveHeader;
    /** @type {?} */
    TableProps.prototype.sortable;
    /** @type {?} */
    TableProps.prototype.isHaveActionButtons;
    /** @type {?} */
    TableProps.prototype.tableColSpan;
    /** @type {?} */
    TableProps.prototype.haveRowTotal;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/sort-order.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SortOrder = {
    Desc: -1,
    Asc: 1,
    None: 0,
};
SortOrder[SortOrder.Desc] = 'Desc';
SortOrder[SortOrder.Asc] = 'Asc';
SortOrder[SortOrder.None] = 'None';
class SortState {
}
if (false) {
    /** @type {?} */
    SortState.prototype.index;
    /** @type {?} */
    SortState.prototype.order;
    /** @type {?} */
    SortState.prototype.columnDef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgTableComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/action-button/action-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} btnSetting
     * @param {?} rowData
     * @return {?}
     */
    actionBtnOnClick(btnSetting, rowData) {
        if (btnSetting.disableOn && btnSetting.disableOn(rowData)) {
            return;
        }
        if (!btnSetting.actionLink && btnSetting.action) {
            btnSetting.action(rowData);
        }
    }
}
ActionButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-action-button',
                template: "<ng-template #_actionButtonTemplate=\"\" let-buttons=\"buttons\" let-rowData=\"\">\r\n  <ng-container\r\n    *ngTemplateOutlet=\"\r\n      actBtnTemplate\r\n        ? actBtnTemplate.templateRef\r\n        : _defaultActionButtonTemplate;\r\n      context: {\r\n        $implicit: rowData,\r\n        buttons: buttons\r\n      }\r\n    \"\r\n  ></ng-container>\r\n</ng-template>\r\n<ng-template\r\n  #_defaultActionButtonTemplate=\"\"\r\n  let-buttons=\"buttons\"\r\n  let-rowData=\"\"\r\n>\r\n  <td class=\"{{ actionButtonSettings.align }} {{ actionButtonSettings.css }}\">\r\n    <div class=\"btn-group\">\r\n      <ng-container *ngFor=\"let button of buttons\">\r\n        <a\r\n          [ngClass]=\"button.disableOn && button.disableOn(rowData) ? 'disabled' : ''\"\r\n          class=\"btn btn-icon {{ button.align }} {{ button.css }}\"\r\n          [routerLink]=\"button.actionLinkFunc ? button.actionLinkFunc(rowData) : button.actionLink ? button.actionLink : null\"\r\n          (click)=\"!button.actionLink && button.action && button.action(rowData)\"\r\n          ><span class=\"{{ button.icon }}\">{{ button.title }}</span></a\r\n        ></ng-container\r\n      >\r\n    </div>\r\n  </td>\r\n</ng-template>\r\n",
                styles: [".btn-group{display:flex;justify-content:space-between}"]
            }] }
];
/** @nocollapse */
ActionButtonComponent.ctorParameters = () => [];
ActionButtonComponent.propDecorators = {
    actBtnTemplate: [{ type: Input }],
    actionButtonSettings: [{ type: Input }],
    actionButtonTemplate: [{ type: ViewChild, args: ['_actionButtonTemplate', { static: true },] }]
};
if (false) {
    /** @type {?} */
    ActionButtonComponent.prototype.actBtnTemplate;
    /** @type {?} */
    ActionButtonComponent.prototype.actionButtonSettings;
    /** @type {?} */
    ActionButtonComponent.prototype.actionButtonTemplate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-header/table-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.headerControlTemplate);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        console.log(this.headerControlTemplate);
    }
}
TableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-table-header',
                template: "<ng-template #_headerTemplate>\r\n  <h3>\r\n    <ng-container\r\n      *ngTemplateOutlet=\"\r\n        headerTemplate ? headerTemplate.templateRef : _defaultHeaderTemplate;\r\n      \"\r\n    >\r\n    </ng-container>\r\n  </h3>\r\n</ng-template>\r\n\r\n<ng-template #_headerControlTemplate>\r\n  <div class=\"group-control\" *ngIf=\"headerControlTemplate\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"headerControlTemplate.templateRef\"\r\n    ></ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #_defaultHeaderTemplate>\r\n  <span>header icon</span>\r\n  <span>title</span>\r\n</ng-template>\r\n\r\n<ng-container>\r\n  <div class=\"table-header\">\r\n    <ng-container *ngTemplateOutlet=\"_headerTemplate\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"_headerControlTemplate\"></ng-container>\r\n  </div>\r\n</ng-container>\r\n",
                styles: [":host ::ng-deep .table-header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between}:host ::ng-deep .table-header .group-control{display:flex;align-items:center}:host ::ng-deep .table-header .group-control>:not(:last-child){margin-right:8px}:host ::ng-deep .table-header .group-control button{padding:8px 12px}"]
            }] }
];
/** @nocollapse */
TableHeaderComponent.ctorParameters = () => [];
TableHeaderComponent.propDecorators = {
    headerControlTemplate: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    settings: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableHeaderComponent.prototype.headerControlTemplate;
    /** @type {?} */
    TableHeaderComponent.prototype.headerTemplate;
    /** @type {?} */
    TableHeaderComponent.prototype.settings;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/column/table-column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableColumnComponent {
    constructor() {
        this.onTriggerExpand = new EventEmitter();
    }
    /**
     * @param {?} tdElement
     * @param {?} rowData
     * @return {?}
     */
    triggerExpand(tdElement, rowData) {
        this.onTriggerExpand.emit({ tRowEl: this._getTRowElement(tdElement), rowData });
    }
    /**
     * @private
     * @param {?} tdElement
     * @return {?}
     */
    _getTRowElement(tdElement) {
        return tdElement.parentElement;
    }
}
TableColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-table-column',
                template: "<ng-template\r\n  #_columnTemplate\r\n  let-colData=\"\"\r\n  let-rowData=\"rowData\"\r\n  let-colSetting=\"colSetting\"\r\n  let-colTemplate=\"colTemplate\"\r\n>\r\n  <ng-container #tRow\r\n    *ngTemplateOutlet=\"\r\n      colTemplate ? _customColumnTemplate : _defaultColumnTemplate;\r\n      context: {\r\n        $implicit: colData,\r\n        rowData: rowData,\r\n        colSetting: colSetting,\r\n        colTemplate: colTemplate\r\n      }\r\n    \"\r\n  ></ng-container>\r\n</ng-template>\r\n<ng-template\r\n  #_customColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n  let-colTemplate=\"colTemplate\"\r\n>\r\n  <td #td\r\n  \r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': colSetting.pinned}\"\r\n    class=\"{{ colSetting.css }}\">\r\n    <i class=\"expand-control mdi mdi-menu-right text-big\"></i>\r\n    <div class=\"{{ colSetting.align }}\">\r\n     <!-- hello {{colSetting.marginLeft}} -->\r\n      <ng-container\r\n        *ngTemplateOutlet=\"\r\n          colTemplate.templateRef;\r\n          context: {\r\n            $implicit: colData,\r\n            rowData: rowData,\r\n            colSetting: colSetting,\r\n            col: this,\r\n            triggerExpand: this.triggerExpand.bind(this,td, rowData)\r\n          }\r\n        \"\r\n      ></ng-container>\r\n    </div>\r\n  </td>\r\n</ng-template>\r\n<ng-template\r\n  #_defaultColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n>\r\n  <ng-container [ngSwitch]=\"colSetting.type\">\r\n    <!-- {{(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData))}} -->\r\n    <!-- {{colSetting.colSpan}} -->\r\n    <td class=\"{{ colSetting.css }}\"\r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': colSetting.pinned}\"\r\n    [attr.colSpan] =\"(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData)) || colSetting.colSpan\"\r\n    [attr.rowSpan] =\"(colSetting.rowSpanFunc && colSetting.rowSpanFunc(rowData)) || colSetting.rowSpan\" >\r\n      <div class=\"d-flex\">\r\n        <div class=\"flex-fill {{ colSetting.align }}\">\r\n          <i\r\n            class=\"expand-control flex-fill fa fa-plus\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'plus-minus'\"\r\n          ></i\r\n          ><i\r\n            class=\"expand-control flex-fill mdi mdi-menu-down text-big\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'arrow'\"\r\n          ></i>\r\n          <ng-template [ngSwitchCase]=\"'datetime'\">\r\n            <div class=\"text-xs text-muted {{ colSetting.align }}\">\r\n              {{ colData | date: colSetting.dateTimeFormat }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'number'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData | number }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'numberFormat'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngSwitchDefault=\"ngSwitchDefault\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n</ng-template>\r\n",
                styles: [".pinned-column{position:absolute;overflow:hidden}"]
            }] }
];
/** @nocollapse */
TableColumnComponent.ctorParameters = () => [];
TableColumnComponent.propDecorators = {
    _columnTemplate: [{ type: ViewChild, args: ["_columnTemplate", { static: true },] }],
    rowExpandTemplate: [{ type: Input }],
    onTriggerExpand: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableColumnComponent.prototype._columnTemplate;
    /** @type {?} */
    TableColumnComponent.prototype.rowExpandTemplate;
    /** @type {?} */
    TableColumnComponent.prototype.onTriggerExpand;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-content/table-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableContentComponent {
    /**
     * @param {?} _appRef
     */
    constructor(_appRef) {
        this._appRef = _appRef;
        this.changeOrderState = new EventEmitter();
        this._viewRefs = [];
        this.sortOrder = SortOrder;
        this._unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.registerEvent();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dataSource && changes.dataSource.currentValue) {
            this.clearExpandedRow();
        }
        if (changes.settings && changes.settings.currentValue) {
            this.initPinnedColumnsSetting();
        }
    }
    /**
     * @return {?}
     */
    initPinnedColumnsSetting() {
        this.pinnedColumns = this.settings.columns.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.pinned));
        this.normalColumns = this.settings.columns.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => !m.pinned));
        this.pinnedColumnsWidth = this.pinnedColumns.reduce((/**
         * @param {?} pre
         * @param {?} cur
         * @return {?}
         */
        (pre, cur) => pre + parseInt(cur.width)), 0);
        /** @type {?} */
        let left = 0;
        this.pinnedColumns.forEach((/**
         * @param {?} m
         * @param {?} index
         * @return {?}
         */
        (m, index) => {
            m.left = left;
            left += parseInt(m.width);
            // if(index !== 0){
            //   m.left = left
            // } else {
            //   m.left = 0
            // }
        }));
        this.tableWidth = `calc(100% - ${this.pinnedColumnsWidth}px)`;
        console.table(this.pinnedColumnsWidth);
    }
    /**
     * @return {?}
     */
    clearExpandedRow() {
        if (this.rowExpandTemplate && this.tbodyElement && this.tbodyElement.nativeElement) {
            if (this._viewRefs) {
                this._viewRefs.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this._appRef.detachView(item)));
            }
            /** @type {?} */
            const expandedRows = this.tbodyElement.nativeElement.querySelectorAll('row-expanded');
            if (expandedRows) {
                expandedRows.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.tbodyElement.nativeElement.removeChild(item)));
            }
        }
    }
    /**
     * @return {?}
     */
    registerEvent() {
        this.columnTriggerExpand$.pipe(takeUntil(this._unsubscribe$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ rowData, tRowEl }) => { this.tableRowClickHandler(rowData, tRowEl, true); }));
    }
    /**
     * @param {?} colIndex
     * @param {?} e
     * @return {?}
     */
    sort(colIndex, e) {
        if (((/** @type {?} */ (e.currentTarget))).classList.contains('sortable')) {
            this.sortState.index = colIndex;
            /** @type {?} */
            const currentSortColumn = this.sortState.columnDef;
            // update direction
            if (currentSortColumn === this.settings.columns[colIndex].columnDef) {
                this.sortState.order = this.sortState.order === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;
            }
            // update sort column name
            else {
                this.sortState.columnDef = this.settings.columns[colIndex].columnDef;
                this.sortState.order = this.sortOrder.Asc;
            }
            this.changeOrderState.emit(this.sortState);
        }
    }
    /**
     * @param {?} rowData
     * @param {?} rowEl
     * @param {?} ignoreSettings
     * @return {?}
     */
    tableRowClickHandler(rowData, rowEl, ignoreSettings) {
        if (!ignoreSettings) {
            if (!this.settings.rows.triggerExpand && !this.settings.rows.triggerExpandFunc)
                return;
        }
        /** @type {?} */
        const rowEmbeddedView = this.rowExpandTemplate.templateRef.createEmbeddedView({ rowData });
        this._appRef.attachView(rowEmbeddedView);
        this._viewRefs.push(rowEmbeddedView);
        /** @type {?} */
        const templateEl = (/** @type {?} */ (rowEmbeddedView.rootNodes[0]));
        if (templateEl.tagName !== 'TR') {
            console.error('Please use <tr> as root element for RowExpandTemplate');
        }
        else {
            templateEl.setAttribute(`row-expanded`, '');
            this.handleCollapseRow(rowEl, templateEl);
        }
        // event.stopPropagation()
    }
    /**
     * @param {?} tRow
     * @param {?} templateEl
     * @return {?}
     */
    handleCollapseRow(tRow, templateEl) {
        const { triggerCloseExpanded, triggerCloseExpandedFunc } = this.settings.rows;
        if (tRow.nextElementSibling && tRow.nextElementSibling.attributes.getNamedItem('row-expanded')) {
            if (triggerCloseExpanded || triggerCloseExpandedFunc) {
                tRow.nextElementSibling.remove();
            }
        }
        else {
            tRow.insertAdjacentElement('afterend', templateEl);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
TableContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-table-content',
                template: "<div class=\"table-wrapper\">\r\n  <div\r\n    class=\"table-responsive\"\r\n    [style.width]=\"tableWidth\"\r\n    [style.marginLeft.px]=\"pinnedColumnsWidth\"\r\n  >\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <ng-container *ngFor=\"let column of pinnedColumns; let i = index\">\r\n            <th\r\n              class=\"{{ column.align }} {{ column.css }} pinned-column\"\r\n              [attr.width]=\"column.width\"\r\n              [style.left.px]=\"column.left\"\r\n              (click)=\"sort(i, $event)\"\r\n              [ngClass]=\"{\r\n                sortable:\r\n                  column.sortable || (settings.sortable && column.sortable)\r\n              }\"\r\n            >\r\n              <div class=\"flex\">\r\n                <span class=\"flex-fill\">{{ column.title }}</span>\r\n                <span\r\n                  *ngIf=\"sortState && sortState.index === i\"\r\n                  class=\"sort-icon\"\r\n                  >{{ sortState.order }}</span\r\n                >\r\n              </div>\r\n            </th>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let column of normalColumns; let i = index\">\r\n            <th\r\n              class=\"{{ column.align }} {{ column.css }}\"\r\n              [attr.width]=\"column.width\"\r\n              (click)=\"sort(i, $event)\"\r\n              [ngClass]=\"{\r\n                sortable:\r\n                  column.sortable || (settings.sortable && column.sortable)\r\n              }\"\r\n            >\r\n              <div class=\"flex\">\r\n                <span class=\"flex-fill\">{{ column.title }}</span>\r\n                <span\r\n                  *ngIf=\"sortState && sortState.index === i\"\r\n                  class=\"sort-icon\"\r\n                  >{{ sortState.order }}</span\r\n                >\r\n              </div>\r\n            </th>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"props.isHaveActionButtons\">\r\n            <th>{{ settings.actionButtons.title || \"Actions\" }}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody #tbodyEl>\r\n        <ng-container *ngIf=\"!dataSource && settings.showLoading && !isLoading\">\r\n          <tr>\r\n            <td class={{settings.align}} [attr.colspan]=\"props.tableColSpan\">\r\n              No data available\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"dataSource && dataSource.length > 0\">\r\n          <ng-container *ngFor=\"let item of dataSource; let i = index\">\r\n            <tr\r\n              (click)=\"tableRowClickHandler(item, tr, false)\"\r\n              #tr\r\n              class=\"{{\r\n                settings.rows &&\r\n                  settings.rows.trCssFunc &&\r\n                  settings.rows.trCssFunc(item)\r\n              }}\"\r\n            >\r\n              <!-- column content -->\r\n              <ng-container *ngFor=\"let col of settings.columns\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbColumn._columnTemplate;\r\n                    context: {\r\n                      $implicit: col.prop ? col.prop(item) : null,\r\n                      rowData: item,\r\n                      colSetting: col,\r\n                      colTemplate: colTemplates[col.columnDef]\r\n                    }\r\n                  \"\r\n                >\r\n                </ng-container>\r\n              </ng-container>\r\n              <!-- action buttons -->\r\n              <ng-container *ngIf=\"props.isHaveActionButtons\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbActions.actionButtonTemplate;\r\n                    context: {\r\n                      $implicit: item,\r\n                      buttons: settings.actionButtons.buttons\r\n                    }\r\n                  \"\r\n                >\r\n                </ng-container>\r\n              </ng-container>\r\n            </tr>\r\n            <!-- row total -->\r\n            <tr *ngIf=\"props.haveRowTotal\">\r\n              <ng-container *ngTemplateOutlet=\"rowTotalTemplate.templateRef\">\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n      </tbody>\r\n\r\n      <!-- table footer -->\r\n    </table>\r\n  </div>\r\n</div>\r\n",
                styles: [".table-wrapper{position:relative;margin-bottom:10px}.table-wrapper .table-responsive{overflow-x:auto;width:100%;display:block;white-space:nowrap;border-collapse:collapse}.table-wrapper .table-responsive .table{border:none;border-spacing:0}.table-wrapper .table-responsive .table td{background:red}.table-wrapper .table-responsive .table th{color:rgba(0,0,0,.85);font-weight:500;text-align:left;background:#fafafa;border-bottom:1px solid #f0f0f0;transition:background .3s;position:relative;padding:16px;overflow-wrap:break-word}"]
            }] }
];
/** @nocollapse */
TableContentComponent.ctorParameters = () => [
    { type: ApplicationRef }
];
TableContentComponent.propDecorators = {
    rowTotalTemplate: [{ type: Input }],
    rowExpandTemplate: [{ type: Input }],
    settings: [{ type: Input }],
    sortState: [{ type: Input }],
    props: [{ type: Input }],
    dataSource: [{ type: Input }],
    tbColumn: [{ type: Input }],
    tbActions: [{ type: Input }],
    colTemplates: [{ type: Input }],
    isLoading: [{ type: Input }],
    columnTriggerExpand$: [{ type: Input }],
    changeOrderState: [{ type: Output }],
    tbodyElement: [{ type: ViewChild, args: ['tbodyEl', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TableContentComponent.prototype.rowTotalTemplate;
    /** @type {?} */
    TableContentComponent.prototype.rowExpandTemplate;
    /** @type {?} */
    TableContentComponent.prototype.settings;
    /** @type {?} */
    TableContentComponent.prototype.sortState;
    /** @type {?} */
    TableContentComponent.prototype.props;
    /** @type {?} */
    TableContentComponent.prototype.dataSource;
    /** @type {?} */
    TableContentComponent.prototype.tbColumn;
    /** @type {?} */
    TableContentComponent.prototype.tbActions;
    /** @type {?} */
    TableContentComponent.prototype.colTemplates;
    /** @type {?} */
    TableContentComponent.prototype.isLoading;
    /** @type {?} */
    TableContentComponent.prototype.columnTriggerExpand$;
    /** @type {?} */
    TableContentComponent.prototype.changeOrderState;
    /** @type {?} */
    TableContentComponent.prototype.tbodyElement;
    /** @type {?} */
    TableContentComponent.prototype._viewRefs;
    /** @type {?} */
    TableContentComponent.prototype.sortOrder;
    /**
     * @type {?}
     * @private
     */
    TableContentComponent.prototype._unsubscribe$;
    /** @type {?} */
    TableContentComponent.prototype.pinnedColumns;
    /** @type {?} */
    TableContentComponent.prototype.tableWidth;
    /** @type {?} */
    TableContentComponent.prototype.normalColumns;
    /** @type {?} */
    TableContentComponent.prototype.pinnedColumnsWidth;
    /**
     * @type {?}
     * @private
     */
    TableContentComponent.prototype._appRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/navigation/table-navigation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableNavigationComponent {
    constructor() {
        this.pagingOptions = new PagingSetting();
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.totalPage = Math.ceil(this.totalCount / this.pagingOptions.pageSize) + 1;
    }
    /**
     * @return {?}
     */
    ngOnChange() {
        this.totalPage = Math.ceil(this.totalCount / this.pagingOptions.pageSize) + 1;
    }
    /**
     * @return {?}
     */
    onPreviousClick() {
        if (this.pagingOptions.pageNumber === 1) {
            return;
        }
        this.pagingOptions.pageNumber -= 1;
        this.change.emit(this.pagingOptions);
    }
    /**
     * @return {?}
     */
    onNextClick() {
        this.pagingOptions.pageNumber += 1;
        this.change.emit(this.pagingOptions);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handlePageChange(event) {
        this.pagingOptions.pageNumber = event.target.value;
        this.pagingOptions.pageIndex = event.target.value - 1;
        this.change.emit(this.pagingOptions);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handlePageSizeChange(event) {
        this.pagingOptions.pageSize = event.target.value;
        this.change.emit(this.pagingOptions);
    }
}
TableNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: "ng-table-navigation",
                template: "<div class=\"container\">\r\n    <span>Show</span>\r\n    <select (change)=\"handlePageSizeChange($event)\" name=\"pageSize\">\r\n        <option value=\"5\">5 rows</option>\r\n        <option value=\"10\">10 rows</option>\r\n        <option value=\"20\">20 rows</option>\r\n        <option value=\"50\">50 rows</option>\r\n        <option value=\"100\">100 rows</option>\r\n    </select>\r\n    <button (click)=\"onPreviousClick()\">Previous</button>\r\n    <input type=\"number\" [(ngModel)]=\"pagingOptions.pageNumber\" (change)=\"handlePageChange($event)\" />\r\n    <span>of {{totalPage}}</span>\r\n    <button (click)=\"onNextClick()\">Next</button>\r\n</div>",
                styles: [":host{float:right}:host .container>*{margin-left:8px}:host select{height:22px;min-width:44px}:host input{height:15px;width:50px}"]
            }] }
];
/** @nocollapse */
TableNavigationComponent.ctorParameters = () => [];
TableNavigationComponent.propDecorators = {
    totalCount: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableNavigationComponent.prototype.totalPage;
    /** @type {?} */
    TableNavigationComponent.prototype.totalCount;
    /** @type {?} */
    TableNavigationComponent.prototype.pagingOptions;
    /** @type {?} */
    TableNavigationComponent.prototype.change;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgTableModule {
}
NgTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgTableComponent,
                    ActionButtonComponent,
                    TableHeaderComponent,
                    TableColumnComponent,
                    TableHeaderTemplate,
                    TableHeaderControlTemplate,
                    TableColumnTemplate,
                    TableRowExpandTemplate,
                    TableFooterTemplate,
                    TableActionButtonTemplate,
                    TableRowTotalTemplate,
                    TableContentComponent,
                    TableNavigationComponent,
                ],
                imports: [BrowserModule, RouterModule, HttpClientModule, FormsModule],
                exports: [
                    NgTableComponent,
                    TableHeaderTemplate,
                    TableHeaderControlTemplate,
                    TableColumnTemplate,
                    TableRowExpandTemplate,
                    TableFooterTemplate,
                    TableActionButtonTemplate,
                    TableRowTotalTemplate,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ActionButtonSetting, ButtonSetting, ColumnSetting, NgTableComponent, NgTableModule, NgTableService, PagingSetting, RowSetting, TableProps, TableSetting, TableColumnTemplate as ɵa, TableActionButtonTemplate as ɵb, TableRowTotalTemplate as ɵc, TableFooterTemplate as ɵd, TableHeaderControlTemplate as ɵe, TableHeaderTemplate as ɵf, TableRowExpandTemplate as ɵg, ActionButtonComponent as ɵh, TableHeaderComponent as ɵi, TableColumnComponent as ɵj, TableContentComponent as ɵk, TableNavigationComponent as ɵl };
//# sourceMappingURL=ng-table.js.map
