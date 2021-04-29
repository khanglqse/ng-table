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
var /**
 * @template T
 */
TableSetting = /** @class */ (function () {
    function TableSetting(setting) {
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
        for (var k in this.columns) {
            if (this.columns[k]) {
                this.columns[k] = new ColumnSetting(this.columns[k]);
            }
        }
    }
    return TableSetting;
}());
/**
 * @template T
 */
export { TableSetting };
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
var /**
 * @template T
 */
ColumnSetting = /** @class */ (function () {
    function ColumnSetting(setting) {
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
            this.width = '220px';
        }
    }
    return ColumnSetting;
}());
/**
 * @template T
 */
export { ColumnSetting };
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
var /**
 * @template T
 */
RowSetting = /** @class */ (function () {
    function RowSetting(setting) {
        this.align = 'text-left';
        this.triggerExpand = false;
        this.triggerCloseExpanded = true;
        Object.assign(this, setting);
    }
    return RowSetting;
}());
/**
 * @template T
 */
export { RowSetting };
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
var /**
 * @template T
 */
ActionButtonSetting = /** @class */ (function () {
    function ActionButtonSetting(setting) {
        this.title = 'Actions';
        this.align = 'text-left';
        Object.assign(this, setting);
    }
    return ActionButtonSetting;
}());
/**
 * @template T
 */
export { ActionButtonSetting };
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
var /**
 * @template T
 */
ButtonSetting = /** @class */ (function () {
    function ButtonSetting(setting) {
        this.align = 'text-left';
        /**
         * Tooltip for disabled button when un-authorized
         */
        this.unAuthorizedMessage = 'You may ask your Manager to update the settings';
        Object.assign(this, setting);
    }
    return ButtonSetting;
}());
/**
 * @template T
 */
export { ButtonSetting };
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
var PagingSetting = /** @class */ (function () {
    function PagingSetting() {
        this.pageIndex = 0;
        this.pageNumber = 1;
        this.pageSize = 10;
    }
    return PagingSetting;
}());
export { PagingSetting };
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
var TableProps = /** @class */ (function () {
    function TableProps() {
    }
    return TableProps;
}());
export { TableProps };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvc2V0dGluZ3MubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxrQ0FNQzs7Ozs7O0lBSkEsMkJBQWE7O0lBQ2IsNkJBQW1EOztJQUNuRCw2QkFBYzs7SUFDZCw4QkFBZTs7Ozs7QUFHaEI7Ozs7SUFlQyxzQkFBWSxPQUFpQztRQWJ0QyxVQUFLLEdBQWdELFdBQVcsQ0FBQztRQUlqRSxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUd0QyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7UUFFaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFJekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyxLQUFLLElBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RDtTQUNEO0lBQ0YsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQzs7Ozs7OztJQXhCQSwyQkFBb0I7O0lBQ3BCLDZCQUF3RTs7SUFDeEUsNkJBQXFCOztJQUNyQiw4QkFBc0I7O0lBQ3RCLDhCQUErQjs7SUFDL0IsK0JBQTZDOztJQUM3Qyw0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RSw0Q0FBK0U7Ozs7O0lBRy9FLCtCQUFxQzs7Ozs7SUFFckMsdUNBQThDOzs7OztJQUU5QyxrQ0FBMkM7Ozs7O0FBTzVDLGlDQUlDOzs7SUFIQSxnQ0FBcUI7O0lBQ3JCLGtDQUFvQjs7SUFDcEIsaUNBQW1COztBQUdwQjtJQUFBO1FBQ0MsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBR2YsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQSxrQ0FBYzs7SUFDZCxtQ0FBZTs7SUFDZixpQ0FBYzs7SUFDZCxtQ0FBbUI7O0lBQ25CLGtDQUFxQjs7QUFFdEI7SUFBQTtJQU9BLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTkMsa0NBQTZCOztJQUM3Qiw4QkFBa0I7O0lBQ2xCLHlDQUE2Qjs7SUFDN0Isa0NBQXFCOztJQUNyQixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0U3RhdGUgfSBmcm9tICcuL3NvcnQtb3JkZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzZVNldHRpbmcge1xyXG5cdC8qKiBDc3MgY2xhc3MgYXBwbHkgdG8gVEQgKi9cclxuXHRjc3M/OiBzdHJpbmc7XHJcblx0YWxpZ24/OiAndGV4dC1sZWZ0JyB8ICd0ZXh0LXJpZ2h0JyB8ICd0ZXh0LWNlbnRlcic7XHJcblx0d2lkdGg/OiBzdHJpbmdcclxuXHRoZWlnaHQ/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlU2V0dGluZzxUPiBpbXBsZW1lbnRzIElCYXNlU2V0dGluZyB7XHJcblx0cHVibGljIGNzcz86IHN0cmluZztcclxuXHRwdWJsaWMgYWxpZ24/OiAndGV4dC1sZWZ0JyB8ICd0ZXh0LXJpZ2h0JyB8ICd0ZXh0LWNlbnRlcicgPSAndGV4dC1sZWZ0JztcclxuXHRwdWJsaWMgd2lkdGg/OiBzdHJpbmdcclxuXHRwdWJsaWMgaGVpZ2h0Pzogc3RyaW5nXHJcblx0cHVibGljIGhlYWRlcj86IElIZWFkZXJTZXR0aW5nO1xyXG5cdHB1YmxpYyBjb2x1bW5zOiBBcnJheTxDb2x1bW5TZXR0aW5nPFQ+PiA9IFtdO1xyXG5cdHB1YmxpYyByb3dzPzogUm93U2V0dGluZzxUPjtcclxuXHRwdWJsaWMgYWN0aW9uQnV0dG9ucz86IEFjdGlvbkJ1dHRvblNldHRpbmc8VD47XHJcblx0cHVibGljIHBhZ2luYXRpb24/PSB0cnVlO1xyXG5cdHB1YmxpYyBzb3J0YWJsZT89IHRydWU7XHJcblx0LyoqICBNZXNzYWdlIGRpc3BsYXkgd2hlbiB0YWJsZSBpcyBlbXB0eSAqL1xyXG5cdHB1YmxpYyBzaG93TG9hZGluZz89IHRydWU7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcihzZXR0aW5nOiBQYXJ0aWFsPFRhYmxlU2V0dGluZzxUPj4pIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgc2V0dGluZyk7XHJcblx0XHR0aGlzLmFjdGlvbkJ1dHRvbnMgPSBuZXcgQWN0aW9uQnV0dG9uU2V0dGluZyh0aGlzLmFjdGlvbkJ1dHRvbnMpO1xyXG5cdFx0dGhpcy5yb3dzID0gbmV3IFJvd1NldHRpbmcodGhpcy5yb3dzKVxyXG5cdFx0Zm9yIChjb25zdCBrIGluIHRoaXMuY29sdW1ucykge1xyXG5cdFx0XHRpZiAodGhpcy5jb2x1bW5zW2tdKSB7XHJcblx0XHRcdFx0dGhpcy5jb2x1bW5zW2tdID0gbmV3IENvbHVtblNldHRpbmc8VD4odGhpcy5jb2x1bW5zW2tdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbHVtblNldHRpbmc8VD4gaW1wbGVtZW50cyBJQmFzZVNldHRpbmcge1xyXG5cdHB1YmxpYyBjb2x1bW5EZWY6IHN0cmluZztcclxuXHRwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHRwdWJsaWMgdHlwZT86ICd0ZXh0JyB8ICdkYXRldGltZScgfCAnbnVtYmVyJyB8ICdudW1iZXJGb3JtYXQnID0gJ3RleHQnO1xyXG5cdC8vIHB1YmxpYyBkYXRlVGltZUZvcm1hdD86IHsgaW5wdXQ/OiBzdHJpbmc7IG91dHB1dDogc3RyaW5nOyB9ID0geyBpbnB1dDogJ1lZWVktTU0tRERUSEg6bW06c3MnLCBvdXRwdXQ6ICdkZGQgREQvTU0vWVlZWSBoaDptbWEnIH07XHJcblx0cHVibGljIGRhdGVUaW1lRm9ybWF0Pzogc3RyaW5nID0nc2hvcnQnXHJcblx0cHVibGljIG51bWJlckZvcm1hdD86IHsgZGVjaW1hbD86IG51bWJlcjsgdXNlUHJvcD86IHN0cmluZzsgfTtcclxuXHRwdWJsaWMgc29ydGFibGU/PSB0cnVlO1xyXG5cdHB1YmxpYyB0cmlnZ2VyRXhwYW5kPzogYm9vbGVhbjtcclxuXHRwdWJsaWMgdHJpZ2dlckV4cGFuZEljb24/OiAnYXJyb3cnIHwgJ3BsdXMtbWludXMnID0gJ2Fycm93JztcclxuXHJcblx0cHVibGljIGNzcz86IHN0cmluZztcclxuXHRwdWJsaWMgd2lkdGg/OiBzdHJpbmc7XHJcblx0cHVibGljIGhlaWdodD86IHN0cmluZztcclxuXHRwdWJsaWMgcGlubmVkPyA9IGZhbHNlXHJcblx0cHVibGljIGFsaWduPzogJ3RleHQtbGVmdCcgfCAndGV4dC1yaWdodCcgfCAndGV4dC1jZW50ZXInID0gJ3RleHQtbGVmdCc7XHJcblx0cHVibGljIHRyaWdnZXJFeHBhbmRGdW5jPzogKHJvd0RhdGE6IFQpID0+IGJvb2xlYW47XHJcblx0cHVibGljIHRyaWdnZXJDbG9zZUV4cGFuZGVkPyA9IHRydWVcclxuXHRwdWJsaWMgdHJpZ2dlckNsb3NlRXhwYW5kZWRGdW5jPzogKHJvd0RhdGE6IFQpID0+IGJvb2xlYW5cclxuXHRwdWJsaWMgY29sU3Bhbj86IG51bWJlciA9IDFcclxuXHRwdWJsaWMgY29sU3BhbkZ1bmM/OiAocm93RGF0YSkgPT4gbnVtYmVyIFxyXG5cdHB1YmxpYyByb3dTcGFuPzogbnVtYmVyID0gMVxyXG5cdHB1YmxpYyByb3dTcGFuRnVuYz86IChyb3dEYXRhKSA9PiBudW1iZXIgXHJcblx0LyoqIFJldHVybiBkYXRhIHRoYXQgZGlzcGxheSBpbiB0YWJsZSAqL1xyXG5cdHB1YmxpYyBwcm9wPzogKHJvd0RhdGE6IFQpID0+IGFueTtcclxuXHQvKiogRnVuYyByZXR1cm4gc29ydCBmaWVsZCBkYXRhICovXHJcblx0cHVibGljIHNvcnRCeT86IChyb3dEYXRhOiBUKSA9PiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmc6IFBhcnRpYWw8Q29sdW1uU2V0dGluZzxUPj4pIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgc2V0dGluZyk7XHJcblx0XHRpZih0aGlzLnBpbm5lZCAmJiAhdGhpcy53aWR0aCl7XHJcblx0XHRcdHRoaXMud2lkdGggPSAnMjIwcHgnXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSb3dTZXR0aW5nPFQ+IGltcGxlbWVudHMgSUJhc2VTZXR0aW5nIHtcclxuXHRwdWJsaWMgdHJDc3NGdW5jPzogKHJvd0RhdGE6IFQpID0+IHN0cmluZztcclxuXHRwdWJsaWMgY3NzPzogc3RyaW5nO1xyXG5cdHB1YmxpYyB3aWR0aD86IHN0cmluZztcclxuXHRwdWJsaWMgaGVpZ2h0Pzogc3RyaW5nO1xyXG5cdHB1YmxpYyBhbGlnbj86ICd0ZXh0LWxlZnQnIHwgJ3RleHQtcmlnaHQnIHwgJ3RleHQtY2VudGVyJyA9ICd0ZXh0LWxlZnQnO1xyXG5cclxuXHRwdWJsaWMgdHJpZ2dlckV4cGFuZD86IGJvb2xlYW4gPSBmYWxzZVxyXG5cdHB1YmxpYyB0cmlnZ2VyRXhwYW5kRnVuYz86IChyb3dEYXRhOiBUKSA9PiBib29sZWFuXHJcblx0cHVibGljIHRyaWdnZXJDbG9zZUV4cGFuZGVkPyA9IHRydWVcclxuXHRwdWJsaWMgdHJpZ2dlckNsb3NlRXhwYW5kZWRGdW5jPzogKHJvd0RhdGE6IFQpID0+IGJvb2xlYW5cclxuXHRjb25zdHJ1Y3RvcihzZXR0aW5nOiBQYXJ0aWFsPFJvd1NldHRpbmc8VD4+KXtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgc2V0dGluZylcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25TZXR0aW5nPFQ+IGltcGxlbWVudHMgSUJhc2VTZXR0aW5nIHtcclxuXHRwdWJsaWMgdGl0bGU/OiBzdHJpbmcgPSAnQWN0aW9ucyc7XHJcblx0cHVibGljIGJ1dHRvbnM6IEFycmF5PEJ1dHRvblNldHRpbmc8VD4+O1xyXG5cdHB1YmxpYyBjc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIHdpZHRoPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBoZWlnaHQ/OiBzdHJpbmc7XHJcblx0cHVibGljIGFsaWduPzogJ3RleHQtbGVmdCcgfCAndGV4dC1yaWdodCcgfCAndGV4dC1jZW50ZXInID0gJ3RleHQtbGVmdCc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmc6IFBhcnRpYWw8QWN0aW9uQnV0dG9uU2V0dGluZzxUPj4pIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgc2V0dGluZyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJTZXR0aW5nIHtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRpY29uPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25TZXR0aW5nPFQ+IGltcGxlbWVudHMgSUJhc2VTZXR0aW5ne1xyXG5cdHB1YmxpYyB0b29sdGlwOiBzdHJpbmc7XHJcblx0cHVibGljIGljb246IHN0cmluZztcclxuXHRwdWJsaWMgYWN0aW9uTGluaz86IGFueVtdO1xyXG5cdHB1YmxpYyB0aXRsZT86IHN0cmluZ1xyXG5cdHB1YmxpYyBjc3M/OiBzdHJpbmc7XHJcblx0cHVibGljIHdpZHRoPzogc3RyaW5nO1xyXG5cdHB1YmxpYyBoZWlnaHQ/OiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBhbGlnbj86ICd0ZXh0LWxlZnQnIHwgJ3RleHQtcmlnaHQnIHwgJ3RleHQtY2VudGVyJyA9ICd0ZXh0LWxlZnQnO1xyXG5cdC8qKiBUb29sdGlwIGZvciBkaXNhYmxlZCBidXR0b24gd2hlbiB1bi1hdXRob3JpemVkICovXHJcblx0cHVibGljIHVuQXV0aG9yaXplZE1lc3NhZ2U/PSAnWW91IG1heSBhc2sgeW91ciBNYW5hZ2VyIHRvIHVwZGF0ZSB0aGUgc2V0dGluZ3MnO1xyXG5cclxuXHQvKiogQWN0aW9uIG9uIGNsaWNrICovXHJcblx0cHVibGljIGFjdGlvbj86IChyb3dEYXRhOiBUKSA9PiB2b2lkO1xyXG5cdC8qKiBBY3Rpb24gbGluayBhcnJheSBidWlsZGVyICovXHJcblx0cHVibGljIGFjdGlvbkxpbmtGdW5jPzogKHJvd0RhdGE6IFQpID0+IGFueVtdO1xyXG5cdC8qKiBDb25kaXRpb24gdG8gZGlzYWJsZSBidXR0b24gKi9cclxuXHRwdWJsaWMgZGlzYWJsZU9uPzogKHJvd0RhdGE6IFQpID0+IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmc6IFBhcnRpYWw8QnV0dG9uU2V0dGluZzxUPj4pIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgc2V0dGluZyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcclxuXHRzb3J0U3RhdGU6IFNvcnRTdGF0ZTtcclxuXHRjdXJyZW50UGFnZTogbnVtYmVyO1xyXG5cdHBhZ2VMZW5ndGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luZ1NldHRpbmcge1xyXG5cdHBhZ2VJbmRleCA9IDA7XHJcblx0cGFnZU51bWJlciA9IDE7XHJcblx0cGFnZVNpemUgPSAxMDtcclxuXHR0b3RhbENvdW50OiBudW1iZXI7XHJcblx0c29ydFN0YXRlOiBTb3J0U3RhdGU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRhYmxlUHJvcHMge1xyXG4gIGlzSGF2ZUhlYWRlcjogSUhlYWRlclNldHRpbmc7XHJcbiAgc29ydGFibGU6IGJvb2xlYW47XHJcbiAgaXNIYXZlQWN0aW9uQnV0dG9uczogYm9vbGVhbjtcclxuICB0YWJsZUNvbFNwYW46IG51bWJlcjtcclxuICBoYXZlUm93VG90YWw6IGJvb2xlYW47XHJcblxyXG59XHJcbiJdfQ==