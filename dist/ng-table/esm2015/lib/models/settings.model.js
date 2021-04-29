/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/settings.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IBaseSetting() { }
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
export class TableSetting {
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
export class ColumnSetting {
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
export class RowSetting {
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
export class ActionButtonSetting {
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
export function IHeaderSetting() { }
if (false) {
    /** @type {?|undefined} */
    IHeaderSetting.prototype.title;
    /** @type {?|undefined} */
    IHeaderSetting.prototype.icon;
}
/**
 * @template T
 */
export class ButtonSetting {
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
export function ITableState() { }
if (false) {
    /** @type {?} */
    ITableState.prototype.sortState;
    /** @type {?} */
    ITableState.prototype.currentPage;
    /** @type {?} */
    ITableState.prototype.pageLength;
}
export class PagingSetting {
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
export class TableProps {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvc2V0dGluZ3MubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxrQ0FNQzs7Ozs7O0lBSkEsMkJBQWE7O0lBQ2IsNkJBQW1EOztJQUNuRCw2QkFBYzs7SUFDZCw4QkFBZTs7Ozs7QUFHaEIsTUFBTSxPQUFPLFlBQVk7Ozs7SUFleEIsWUFBWSxPQUFpQztRQWJ0QyxVQUFLLEdBQWdELFdBQVcsQ0FBQztRQUlqRSxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUd0QyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7UUFFaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFJekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RDtTQUNEO0lBQ0YsQ0FBQztDQUNEOzs7SUF4QkEsMkJBQW9COztJQUNwQiw2QkFBd0U7O0lBQ3hFLDZCQUFxQjs7SUFDckIsOEJBQXNCOztJQUN0Qiw4QkFBK0I7O0lBQy9CLCtCQUE2Qzs7SUFDN0MsNEJBQTRCOztJQUM1QixxQ0FB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QUhBLGdDQUFxQjs7SUFDckIsa0NBQW9COztJQUNwQixpQ0FBbUI7O0FBR3BCLE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ0MsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBR2YsQ0FBQztDQUFBOzs7SUFMQSxrQ0FBYzs7SUFDZCxtQ0FBZTs7SUFDZixpQ0FBYzs7SUFDZCxtQ0FBbUI7O0lBQ25CLGtDQUFxQjs7QUFFdEIsTUFBTSxPQUFPLFVBQVU7Q0FPdEI7OztJQU5DLGtDQUE2Qjs7SUFDN0IsOEJBQWtCOztJQUNsQix5Q0FBNkI7O0lBQzdCLGtDQUFxQjs7SUFDckIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydFN0YXRlIH0gZnJvbSAnLi9zb3J0LW9yZGVyLm1vZGVsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VTZXR0aW5nIHtcclxuXHQvKiogQ3NzIGNsYXNzIGFwcGx5IHRvIFREICovXHJcblx0Y3NzPzogc3RyaW5nO1xyXG5cdGFsaWduPzogJ3RleHQtbGVmdCcgfCAndGV4dC1yaWdodCcgfCAndGV4dC1jZW50ZXInO1xyXG5cdHdpZHRoPzogc3RyaW5nXHJcblx0aGVpZ2h0Pzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNldHRpbmc8VD4gaW1wbGVtZW50cyBJQmFzZVNldHRpbmcge1xyXG5cdHB1YmxpYyBjc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIGFsaWduPzogJ3RleHQtbGVmdCcgfCAndGV4dC1yaWdodCcgfCAndGV4dC1jZW50ZXInID0gJ3RleHQtbGVmdCc7XHJcblx0cHVibGljIHdpZHRoPzogc3RyaW5nXHJcblx0cHVibGljIGhlaWdodD86IHN0cmluZ1xyXG5cdHB1YmxpYyBoZWFkZXI/OiBJSGVhZGVyU2V0dGluZztcclxuXHRwdWJsaWMgY29sdW1uczogQXJyYXk8Q29sdW1uU2V0dGluZzxUPj4gPSBbXTtcclxuXHRwdWJsaWMgcm93cz86IFJvd1NldHRpbmc8VD47XHJcblx0cHVibGljIGFjdGlvbkJ1dHRvbnM/OiBBY3Rpb25CdXR0b25TZXR0aW5nPFQ+O1xyXG5cdHB1YmxpYyBwYWdpbmF0aW9uPz0gdHJ1ZTtcclxuXHRwdWJsaWMgc29ydGFibGU/PSB0cnVlO1xyXG5cdC8qKiAgTWVzc2FnZSBkaXNwbGF5IHdoZW4gdGFibGUgaXMgZW1wdHkgKi9cclxuXHRwdWJsaWMgc2hvd0xvYWRpbmc/PSB0cnVlO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3Ioc2V0dGluZzogUGFydGlhbDxUYWJsZVNldHRpbmc8VD4+KSB7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHNldHRpbmcpO1xyXG5cdFx0dGhpcy5hY3Rpb25CdXR0b25zID0gbmV3IEFjdGlvbkJ1dHRvblNldHRpbmcodGhpcy5hY3Rpb25CdXR0b25zKTtcclxuXHRcdHRoaXMucm93cyA9IG5ldyBSb3dTZXR0aW5nKHRoaXMucm93cylcclxuXHRcdGZvciAoY29uc3QgayBpbiB0aGlzLmNvbHVtbnMpIHtcclxuXHRcdFx0aWYgKHRoaXMuY29sdW1uc1trXSkge1xyXG5cdFx0XHRcdHRoaXMuY29sdW1uc1trXSA9IG5ldyBDb2x1bW5TZXR0aW5nPFQ+KHRoaXMuY29sdW1uc1trXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5TZXR0aW5nPFQ+IGltcGxlbWVudHMgSUJhc2VTZXR0aW5nIHtcclxuXHRwdWJsaWMgY29sdW1uRGVmOiBzdHJpbmc7XHJcblx0cHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblx0cHVibGljIHR5cGU/OiAndGV4dCcgfCAnZGF0ZXRpbWUnIHwgJ251bWJlcicgfCAnbnVtYmVyRm9ybWF0JyA9ICd0ZXh0JztcclxuXHQvLyBwdWJsaWMgZGF0ZVRpbWVGb3JtYXQ/OiB7IGlucHV0Pzogc3RyaW5nOyBvdXRwdXQ6IHN0cmluZzsgfSA9IHsgaW5wdXQ6ICdZWVlZLU1NLUREVEhIOm1tOnNzJywgb3V0cHV0OiAnZGRkIEREL01NL1lZWVkgaGg6bW1hJyB9O1xyXG5cdHB1YmxpYyBkYXRlVGltZUZvcm1hdD86IHN0cmluZyA9J3Nob3J0J1xyXG5cdHB1YmxpYyBudW1iZXJGb3JtYXQ/OiB7IGRlY2ltYWw/OiBudW1iZXI7IHVzZVByb3A/OiBzdHJpbmc7IH07XHJcblx0cHVibGljIHNvcnRhYmxlPz0gdHJ1ZTtcclxuXHRwdWJsaWMgdHJpZ2dlckV4cGFuZD86IGJvb2xlYW47XHJcblx0cHVibGljIHRyaWdnZXJFeHBhbmRJY29uPzogJ2Fycm93JyB8ICdwbHVzLW1pbnVzJyA9ICdhcnJvdyc7XHJcblxyXG5cdHB1YmxpYyBjc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIHdpZHRoPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBoZWlnaHQ/OiBzdHJpbmc7XHJcblx0cHVibGljIHBpbm5lZD8gPSBmYWxzZVxyXG5cdHB1YmxpYyBhbGlnbj86ICd0ZXh0LWxlZnQnIHwgJ3RleHQtcmlnaHQnIHwgJ3RleHQtY2VudGVyJyA9ICd0ZXh0LWxlZnQnO1xyXG5cdHB1YmxpYyB0cmlnZ2VyRXhwYW5kRnVuYz86IChyb3dEYXRhOiBUKSA9PiBib29sZWFuO1xyXG5cdHB1YmxpYyB0cmlnZ2VyQ2xvc2VFeHBhbmRlZD8gPSB0cnVlXHJcblx0cHVibGljIHRyaWdnZXJDbG9zZUV4cGFuZGVkRnVuYz86IChyb3dEYXRhOiBUKSA9PiBib29sZWFuXHJcblx0cHVibGljIGNvbFNwYW4/OiBudW1iZXIgPSAxXHJcblx0cHVibGljIGNvbFNwYW5GdW5jPzogKHJvd0RhdGEpID0+IG51bWJlciBcclxuXHRwdWJsaWMgcm93U3Bhbj86IG51bWJlciA9IDFcclxuXHRwdWJsaWMgcm93U3BhbkZ1bmM/OiAocm93RGF0YSkgPT4gbnVtYmVyIFxyXG5cdC8qKiBSZXR1cm4gZGF0YSB0aGF0IGRpc3BsYXkgaW4gdGFibGUgKi9cclxuXHRwdWJsaWMgcHJvcD86IChyb3dEYXRhOiBUKSA9PiBhbnk7XHJcblx0LyoqIEZ1bmMgcmV0dXJuIHNvcnQgZmllbGQgZGF0YSAqL1xyXG5cdHB1YmxpYyBzb3J0Qnk/OiAocm93RGF0YTogVCkgPT4gYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzZXR0aW5nOiBQYXJ0aWFsPENvbHVtblNldHRpbmc8VD4+KSB7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHNldHRpbmcpO1xyXG5cdFx0aWYodGhpcy5waW5uZWQgJiYgIXRoaXMud2lkdGgpe1xyXG5cdFx0XHR0aGlzLndpZHRoID0gJzE4MHB4J1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgUm93U2V0dGluZzxUPiBpbXBsZW1lbnRzIElCYXNlU2V0dGluZyB7XHJcblx0cHVibGljIHRyQ3NzRnVuYz86IChyb3dEYXRhOiBUKSA9PiBzdHJpbmc7XHJcblx0cHVibGljIGNzcz86IHN0cmluZztcclxuXHRwdWJsaWMgd2lkdGg/OiBzdHJpbmc7XHJcblx0cHVibGljIGhlaWdodD86IHN0cmluZztcclxuXHRwdWJsaWMgYWxpZ24/OiAndGV4dC1sZWZ0JyB8ICd0ZXh0LXJpZ2h0JyB8ICd0ZXh0LWNlbnRlcicgPSAndGV4dC1sZWZ0JztcclxuXHJcblx0cHVibGljIHRyaWdnZXJFeHBhbmQ/OiBib29sZWFuID0gZmFsc2VcclxuXHRwdWJsaWMgdHJpZ2dlckV4cGFuZEZ1bmM/OiAocm93RGF0YTogVCkgPT4gYm9vbGVhblxyXG5cdHB1YmxpYyB0cmlnZ2VyQ2xvc2VFeHBhbmRlZD8gPSB0cnVlXHJcblx0cHVibGljIHRyaWdnZXJDbG9zZUV4cGFuZGVkRnVuYz86IChyb3dEYXRhOiBUKSA9PiBib29sZWFuXHJcblx0Y29uc3RydWN0b3Ioc2V0dGluZzogUGFydGlhbDxSb3dTZXR0aW5nPFQ+Pil7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHNldHRpbmcpXHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uU2V0dGluZzxUPiBpbXBsZW1lbnRzIElCYXNlU2V0dGluZyB7XHJcblx0cHVibGljIHRpdGxlPzogc3RyaW5nID0gJ0FjdGlvbnMnO1xyXG5cdHB1YmxpYyBidXR0b25zOiBBcnJheTxCdXR0b25TZXR0aW5nPFQ+PjtcclxuXHRwdWJsaWMgY3NzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyB3aWR0aD86IHN0cmluZztcclxuXHRwdWJsaWMgaGVpZ2h0Pzogc3RyaW5nO1xyXG5cdHB1YmxpYyBhbGlnbj86ICd0ZXh0LWxlZnQnIHwgJ3RleHQtcmlnaHQnIHwgJ3RleHQtY2VudGVyJyA9ICd0ZXh0LWxlZnQnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzZXR0aW5nOiBQYXJ0aWFsPEFjdGlvbkJ1dHRvblNldHRpbmc8VD4+KSB7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHNldHRpbmcpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyU2V0dGluZyB7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0aWNvbj86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uU2V0dGluZzxUPiBpbXBsZW1lbnRzIElCYXNlU2V0dGluZ3tcclxuXHRwdWJsaWMgdG9vbHRpcDogc3RyaW5nO1xyXG5cdHB1YmxpYyBpY29uOiBzdHJpbmc7XHJcblx0cHVibGljIGFjdGlvbkxpbms/OiBhbnlbXTtcclxuXHRwdWJsaWMgdGl0bGU/OiBzdHJpbmdcclxuXHRwdWJsaWMgY3NzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyB3aWR0aD86IHN0cmluZztcclxuXHRwdWJsaWMgaGVpZ2h0Pzogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgYWxpZ24/OiAndGV4dC1sZWZ0JyB8ICd0ZXh0LXJpZ2h0JyB8ICd0ZXh0LWNlbnRlcicgPSAndGV4dC1sZWZ0JztcclxuXHQvKiogVG9vbHRpcCBmb3IgZGlzYWJsZWQgYnV0dG9uIHdoZW4gdW4tYXV0aG9yaXplZCAqL1xyXG5cdHB1YmxpYyB1bkF1dGhvcml6ZWRNZXNzYWdlPz0gJ1lvdSBtYXkgYXNrIHlvdXIgTWFuYWdlciB0byB1cGRhdGUgdGhlIHNldHRpbmdzJztcclxuXHJcblx0LyoqIEFjdGlvbiBvbiBjbGljayAqL1xyXG5cdHB1YmxpYyBhY3Rpb24/OiAocm93RGF0YTogVCkgPT4gdm9pZDtcclxuXHQvKiogQWN0aW9uIGxpbmsgYXJyYXkgYnVpbGRlciAqL1xyXG5cdHB1YmxpYyBhY3Rpb25MaW5rRnVuYz86IChyb3dEYXRhOiBUKSA9PiBhbnlbXTtcclxuXHQvKiogQ29uZGl0aW9uIHRvIGRpc2FibGUgYnV0dG9uICovXHJcblx0cHVibGljIGRpc2FibGVPbj86IChyb3dEYXRhOiBUKSA9PiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzZXR0aW5nOiBQYXJ0aWFsPEJ1dHRvblNldHRpbmc8VD4+KSB7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHNldHRpbmcpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTdGF0ZSB7XHJcblx0c29ydFN0YXRlOiBTb3J0U3RhdGU7XHJcblx0Y3VycmVudFBhZ2U6IG51bWJlcjtcclxuXHRwYWdlTGVuZ3RoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdTZXR0aW5nIHtcclxuXHRwYWdlSW5kZXggPSAwO1xyXG5cdHBhZ2VOdW1iZXIgPSAxO1xyXG5cdHBhZ2VTaXplID0gMTA7XHJcblx0dG90YWxDb3VudDogbnVtYmVyO1xyXG5cdHNvcnRTdGF0ZTogU29ydFN0YXRlO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUYWJsZVByb3BzIHtcclxuICBpc0hhdmVIZWFkZXI6IElIZWFkZXJTZXR0aW5nO1xyXG4gIHNvcnRhYmxlOiBib29sZWFuO1xyXG4gIGlzSGF2ZUFjdGlvbkJ1dHRvbnM6IGJvb2xlYW47XHJcbiAgdGFibGVDb2xTcGFuOiBudW1iZXI7XHJcbiAgaGF2ZVJvd1RvdGFsOiBib29sZWFuO1xyXG5cclxufVxyXG4iXX0=