/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-content/table-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ApplicationRef, ViewChild, ElementRef } from '@angular/core';
import { TableSetting, TableProps } from '../../models/settings.model';
import { SortState, SortOrder } from '../../models/sort-order.model';
import { TableColumnComponent } from '../column/table-column.component';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { TableRowTotalTemplate, TableRowExpandTemplate } from '../../directive/table-directive.directive';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class TableContentComponent {
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
                template: "<div class=\"table-wrapper\">\r\n  <div\r\n    class=\"table-responsive\"\r\n    [style.width]=\"tableWidth\"\r\n    [style.marginLeft.px]=\"pinnedColumnsWidth\"\r\n  >\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <ng-container *ngFor=\"let column of pinnedColumns; let i = index\">\r\n            <th\r\n              class=\"{{ column.align }} {{ column.css }} pinned-column\"\r\n              [attr.width]=\"column.width\"\r\n              [style.left.px]=\"column.left\"\r\n              (click)=\"sort(i, $event)\"\r\n              [ngClass]=\"{\r\n                sortable:\r\n                  column.sortable || (settings.sortable && column.sortable)\r\n              }\"\r\n            >\r\n              <div class=\"flex\">\r\n                <span class=\"flex-fill\">{{ column.title }}</span>\r\n                <span\r\n                  *ngIf=\"sortState && sortState.index === i\"\r\n                  class=\"sort-icon\"\r\n                  >{{ sortState.order }}</span\r\n                >\r\n              </div>\r\n            </th>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let column of normalColumns; let i = index\">\r\n            <th\r\n              class=\"{{ column.align }} {{ column.css }}\"\r\n              [attr.width]=\"column.width\"\r\n              (click)=\"sort(i, $event)\"\r\n              [ngClass]=\"{\r\n                sortable:\r\n                  column.sortable || (settings.sortable && column.sortable)\r\n              }\"\r\n            >\r\n              <div class=\"flex\">\r\n                <span class=\"flex-fill\">{{ column.title }}</span>\r\n                <span\r\n                  *ngIf=\"sortState && sortState.index === i\"\r\n                  class=\"sort-icon\"\r\n                  >{{ sortState.order }}</span\r\n                >\r\n              </div>\r\n            </th>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"props.isHaveActionButtons\">\r\n            <th>{{ settings.actionButtons.title || \"Actions\" }}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody #tbodyEl>\r\n        <ng-container *ngIf=\"!dataSource && settings.showLoading && !isLoading\">\r\n          <tr>\r\n            <td class={{settings.align}} [attr.colspan]=\"props.tableColSpan\">\r\n              No data available\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"dataSource && dataSource.length > 0\">\r\n          <ng-container *ngFor=\"let item of dataSource; let i = index\">\r\n            <tr\r\n              (click)=\"tableRowClickHandler(item, tr, false)\"\r\n              #tr\r\n              class=\"{{\r\n                settings.rows &&\r\n                  settings.rows.trCssFunc &&\r\n                  settings.rows.trCssFunc(item)\r\n              }}\"\r\n            >\r\n              <!-- column content -->\r\n              <ng-container *ngFor=\"let col of pinnedColumns\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbColumn._columnTemplate;\r\n                    context: {\r\n                      $implicit: col.prop ? col.prop(item) : null,\r\n                      rowData: item,\r\n                      colSetting: col,\r\n                      colTemplate: colTemplates[col.columnDef],\r\n                      isPinned: true\r\n                    }\r\n                  \"\r\n                  >\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-container *ngFor=\"let col of normalColumns\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbColumn._columnTemplate;\r\n                    context: {\r\n                      $implicit: col.prop ? col.prop(item) : null,\r\n                      rowData: item,\r\n                      colSetting: col,\r\n                      colTemplate: colTemplates[col.columnDef],\r\n                      isPinned: false\r\n                    }\r\n                  \"\r\n                >\r\n                </ng-container>\r\n              </ng-container>\r\n              <!-- action buttons -->\r\n              <ng-container *ngIf=\"props.isHaveActionButtons\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbActions.actionButtonTemplate;\r\n                    context: {\r\n                      $implicit: item,\r\n                      buttons: settings.actionButtons.buttons\r\n                    }\r\n                  \"\r\n                >\r\n                </ng-container>\r\n              </ng-container>\r\n            </tr>\r\n            <!-- row total -->\r\n            <tr *ngIf=\"props.haveRowTotal\">\r\n              <ng-container *ngTemplateOutlet=\"rowTotalTemplate.templateRef\">\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n      </tbody>\r\n\r\n      <!-- table footer -->\r\n    </table>\r\n  </div>\r\n</div>\r\n",
                styles: [".table-wrapper{position:relative;margin-bottom:10px}.table-wrapper .table-responsive{overflow-x:auto;width:100%;display:block;white-space:nowrap;border-collapse:collapse}.table-wrapper .table-responsive .table{border:none;border-spacing:0}.table-wrapper .table-responsive .table td{background:red}.table-wrapper .table-responsive .table th{color:rgba(0,0,0,.85);font-weight:500;text-align:left;background:#fafafa;border-bottom:1px solid #f0f0f0;transition:background .3s;position:relative;padding:16px;overflow-wrap:break-word}.table-wrapper .table-responsive .pinned-column{position:absolute!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS1jb250ZW50L3RhYmxlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBZ0QsTUFBTSxlQUFlLENBQUM7QUFDcEssT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQWlCLE1BQU0sNkJBQTZCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBMkJoQyxZQUNVLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBZHZCLHFCQUFnQixHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFBO1FBS25GLGNBQVMsR0FBYyxFQUFFLENBQUE7UUFDekIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQTtJQU92QyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDOzs7OztJQUNELFdBQVcsQ0FBQyxPQUFzQjtR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RCxjQUFjOzs7K0JBZ0JwRSxLQUFLO2dDQUNMLEtBQUs7dUJBRUwsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO21DQUNMLEtBQUs7K0JBQ0wsTUFBTTsyQkFJTixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7OztJQWhCcEMsaURBQWdEOztJQUNoRCxrREFBa0Q7O0lBRWxELHlDQUFvQzs7SUFDcEMsMENBQTZCOztJQUM3QixzQ0FBMkI7O0lBQzNCLDJDQUEwQjs7SUFDMUIseUNBQXVDOztJQUN2QywwQ0FBeUM7O0lBQ3pDLDZDQUFxQjs7SUFDckIsMENBQTJCOztJQUMzQixxREFBMEQ7O0lBQzFELGlEQUFtRjs7SUFJbkYsNkNBQTJFOztJQUMzRSwwQ0FBeUI7O0lBQ3pCLDBDQUFzQjs7Ozs7SUFFdEIsOENBQTJDOztJQUMzQyw4Q0FBcUI7O0lBQ3JCLDJDQUFtQjs7SUFDbkIsOENBQW9DOztJQUNwQyxtREFBd0I7Ozs7O0lBRXRCLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEFwcGxpY2F0aW9uUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYmxlU2V0dGluZywgVGFibGVQcm9wcywgQ29sdW1uU2V0dGluZyB9IGZyb20gJy4uLy4uL21vZGVscy9zZXR0aW5ncy5tb2RlbCc7XHJcbmltcG9ydCB7IFNvcnRTdGF0ZSwgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NvcnQtb3JkZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbHVtbi90YWJsZS1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlUm93VG90YWxUZW1wbGF0ZSwgVGFibGVSb3dFeHBhbmRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZS90YWJsZS1kaXJlY3RpdmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLXRhYmxlLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1jb250ZW50LmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSByb3dUb3RhbFRlbXBsYXRlOiBUYWJsZVJvd1RvdGFsVGVtcGxhdGVcclxuICBASW5wdXQoKSByb3dFeHBhbmRUZW1wbGF0ZTogVGFibGVSb3dFeHBhbmRUZW1wbGF0ZVxyXG5cclxuICBASW5wdXQoKSBzZXR0aW5nczogVGFibGVTZXR0aW5nPGFueT5cclxuICBASW5wdXQoKSBzb3J0U3RhdGU6IFNvcnRTdGF0ZVxyXG4gIEBJbnB1dCgpIHByb3BzIDogVGFibGVQcm9wc1xyXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IGFueVtdXHJcbiAgQElucHV0KCkgdGJDb2x1bW46IFRhYmxlQ29sdW1uQ29tcG9uZW50XHJcbiAgQElucHV0KCkgdGJBY3Rpb25zOiBBY3Rpb25CdXR0b25Db21wb25lbnRcclxuICBASW5wdXQoKSBjb2xUZW1wbGF0ZXNcclxuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW5cclxuICBASW5wdXQoKSBjb2x1bW5UcmlnZ2VyRXhwYW5kJCA6IFN1YmplY3Q8e3Jvd0RhdGEsIHRSb3dFbH0+XHJcbiAgQE91dHB1dCgpIGNoYW5nZU9yZGVyU3RhdGU6IEV2ZW50RW1pdHRlcjxTb3J0U3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0U3RhdGU+KClcclxuXHJcblxyXG5cclxuICBAVmlld0NoaWxkKCd0Ym9keUVsJywge3N0YXRpYzogdHJ1ZX0pIHRib2R5RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICBfdmlld1JlZnM6IFZpZXdSZWZbXSA9IFtdXHJcbiAgc29ydE9yZGVyID0gU29ydE9yZGVyO1xyXG5cclxuICBwcml2YXRlIF91bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpXHJcbiAgcGlubmVkQ29sdW1uczogYW55W107XHJcbiAgdGFibGVXaWR0aDogc3RyaW5nO1xyXG4gIG5vcm1hbENvbHVtbnM6IENvbHVtblNldHRpbmc8YW55PltdO1xyXG4gIHBpbm5lZENvbHVtbnNXaWR0aDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KClcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XHJcbiAgICBpZihjaGFuZ2VzLmRhdGFTb3VyY2UgJiYgY2hhbmdlcy5kYXRhU291cmNlLmN1cnJlbnRWYWx1ZSl7XHJcbiAgICAgIHRoaXMuY2xlYXJFeHBhbmRlZFJvdygpXHJcbiAgICB9XHJcbiAgICBpZihjaGFuZ2VzLnNldHRpbmdzICYmIGNoYW5nZXMuc2V0dGluZ3MuY3VycmVudFZhbHVlKXtcclxuICAgICAgdGhpcy5pbml0UGlubmVkQ29sdW1uc1NldHRpbmcoKVxyXG4gICAgfVxyXG4gIH1cclxuICBpbml0UGlubmVkQ29sdW1uc1NldHRpbmcoKXtcclxuICAgIHRoaXMucGlubmVkQ29sdW1ucyA9IHRoaXMuc2V0dGluZ3MuY29sdW1ucy5maWx0ZXIobSA9PiBtLnBpbm5lZClcclxuICAgIHRoaXMubm9ybWFsQ29sdW1ucyA9IHRoaXMuc2V0dGluZ3MuY29sdW1ucy5maWx0ZXIobSA9PiAhbS5waW5uZWQpXHJcbiAgICB0aGlzLnBpbm5lZENvbHVtbnNXaWR0aCA9IHRoaXMucGlubmVkQ29sdW1ucy5yZWR1Y2UoKHByZSwgY3VyKTpudW1iZXIgPT4gcHJlICsgcGFyc2VJbnQoY3VyLndpZHRoKSwgMClcclxuICAgIGxldCBsZWZ0ID0gMFxyXG4gICAgdGhpcy5waW5uZWRDb2x1bW5zLmZvckVhY2goKG0sIGluZGV4KSA9PiB7XHJcbiAgICAgIG0ubGVmdCA9IGxlZnRcclxuICAgICAgbGVmdCArPSBwYXJzZUludChtLndpZHRoKVxyXG5cclxuICAgICAgLy8gaWYoaW5kZXggIT09IDApe1xyXG4gICAgICAvLyAgIG0ubGVmdCA9IGxlZnRcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gICBtLmxlZnQgPSAwXHJcbiAgICAgIC8vIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLnRhYmxlV2lkdGggPSBgY2FsYygxMDAlIC0gJHt0aGlzLnBpbm5lZENvbHVtbnNXaWR0aH1weClgXHJcbiAgICBjb25zb2xlLnRhYmxlKHRoaXMucGlubmVkQ29sdW1uc1dpZHRoKVxyXG4gIH1cclxuICBjbGVhckV4cGFuZGVkUm93KCl7XHJcbiAgICBpZih0aGlzLnJvd0V4cGFuZFRlbXBsYXRlICYmIHRoaXMudGJvZHlFbGVtZW50ICYmIHRoaXMudGJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpe1xyXG4gICAgICBpZih0aGlzLl92aWV3UmVmcyl7XHJcbiAgICAgICAgdGhpcy5fdmlld1JlZnMuZm9yRWFjaChpdGVtID0+IHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KGl0ZW0pKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV4cGFuZGVkUm93cyA9IHRoaXMudGJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgncm93LWV4cGFuZGVkJylcclxuICAgICAgaWYoZXhwYW5kZWRSb3dzKXtcclxuICAgICAgICBleHBhbmRlZFJvd3MuZm9yRWFjaChpdGVtID0+IHRoaXMudGJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJFdmVudCgpe1xyXG4gICAgdGhpcy5jb2x1bW5UcmlnZ2VyRXhwYW5kJC5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YnNjcmliZSQpKVxyXG4gICAgLnN1YnNjcmliZSgoe3Jvd0RhdGEsIHRSb3dFbH0pID0+IHt0aGlzLnRhYmxlUm93Q2xpY2tIYW5kbGVyKHJvd0RhdGEsIHRSb3dFbCwgdHJ1ZSl9KVxyXG4gIH1cclxuICBzb3J0KGNvbEluZGV4OiBudW1iZXIsIGU6IEV2ZW50KXtcclxuICAgIGlmKChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnc29ydGFibGUnKSl7XHJcbiAgICAgIHRoaXMuc29ydFN0YXRlLmluZGV4ID0gY29sSW5kZXhcclxuICAgICAgY29uc3QgY3VycmVudFNvcnRDb2x1bW4gPSB0aGlzLnNvcnRTdGF0ZS5jb2x1bW5EZWY7XHJcbiAgICAgIC8vIHVwZGF0ZSBkaXJlY3Rpb25cclxuICAgICAgaWYoY3VycmVudFNvcnRDb2x1bW4gPT09IHRoaXMuc2V0dGluZ3MuY29sdW1uc1tjb2xJbmRleF0uY29sdW1uRGVmKXtcclxuICAgICAgICB0aGlzLnNvcnRTdGF0ZS5vcmRlciA9IHRoaXMuc29ydFN0YXRlLm9yZGVyID09PSBTb3J0T3JkZXIuQXNjID8gU29ydE9yZGVyLkRlc2MgOiBTb3J0T3JkZXIuQXNjXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vIHVwZGF0ZSBzb3J0IGNvbHVtbiBuYW1lXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc29ydFN0YXRlLmNvbHVtbkRlZiA9IHRoaXMuc2V0dGluZ3MuY29sdW1uc1tjb2xJbmRleF0uY29sdW1uRGVmXHJcbiAgICAgICAgdGhpcy5zb3J0U3RhdGUub3JkZXIgPSB0aGlzLnNvcnRPcmRlci5Bc2NcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoYW5nZU9yZGVyU3RhdGUuZW1pdCh0aGlzLnNvcnRTdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0YWJsZVJvd0NsaWNrSGFuZGxlcihyb3dEYXRhOiBhbnksIHJvd0VsOiBIVE1MRWxlbWVudCwgaWdub3JlU2V0dGluZ3M6IGJvb2xlYW4pe1xyXG4gICAgaWYoIWlnbm9yZVNldHRpbmdzKXtcclxuICAgICAgaWYoIXRoaXMuc2V0dGluZ3Mucm93cy50cmlnZ2VyRXhwYW5kICYmICF0aGlzLnNldHRpbmdzLnJvd3MudHJpZ2dlckV4cGFuZEZ1bmMgKSByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHJvd0VtYmVkZGVkVmlldyA9IHRoaXMucm93RXhwYW5kVGVtcGxhdGUudGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHtyb3dEYXRhfSlcclxuICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHJvd0VtYmVkZGVkVmlldylcclxuICAgIHRoaXMuX3ZpZXdSZWZzLnB1c2gocm93RW1iZWRkZWRWaWV3KVxyXG4gICAgY29uc3QgdGVtcGxhdGVFbCA9IHJvd0VtYmVkZGVkVmlldy5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnRcclxuICAgIGlmKHRlbXBsYXRlRWwudGFnTmFtZSAhPT0gJ1RSJyl7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSB1c2UgPHRyPiBhcyByb290IGVsZW1lbnQgZm9yIFJvd0V4cGFuZFRlbXBsYXRlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBsYXRlRWwuc2V0QXR0cmlidXRlKGByb3ctZXhwYW5kZWRgLCAnJylcclxuICAgICAgdGhpcy5oYW5kbGVDb2xsYXBzZVJvdyhyb3dFbCwgdGVtcGxhdGVFbCk7XHJcbiAgICB9XHJcbiAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ29sbGFwc2VSb3codFJvdzogSFRNTEVsZW1lbnQsIHRlbXBsYXRlRWw6IEhUTUxFbGVtZW50KXtcclxuICAgIGNvbnN0IHt0cmlnZ2VyQ2xvc2VFeHBhbmRlZCwgdHJpZ2dlckNsb3NlRXhwYW5kZWRGdW5jfSA9IHRoaXMuc2V0dGluZ3Mucm93c1xyXG4gICAgaWYodFJvdy5uZXh0RWxlbWVudFNpYmxpbmcgJiYgdFJvdy5uZXh0RWxlbWVudFNpYmxpbmcuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ3Jvdy1leHBhbmRlZCcpKXtcclxuICAgICAgaWYodHJpZ2dlckNsb3NlRXhwYW5kZWQgfHwgIHRyaWdnZXJDbG9zZUV4cGFuZGVkRnVuYyl7XHJcbiAgICAgICAgdFJvdy5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdFJvdy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgdGVtcGxhdGVFbClcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl91bnN1YnNjcmliZSQubmV4dCgpXHJcbiAgICB0aGlzLl91bnN1YnNjcmliZSQuY29tcGxldGUoKVxyXG4gIH1cclxufVxyXG4iXX0=