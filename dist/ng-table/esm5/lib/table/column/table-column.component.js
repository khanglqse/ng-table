/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/column/table-column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { TableRowExpandTemplate } from '../..//directive/table-directive.directive';
var TableColumnComponent = /** @class */ (function () {
    function TableColumnComponent() {
        this.onTriggerExpand = new EventEmitter();
    }
    /**
     * @param {?} tdElement
     * @param {?} rowData
     * @return {?}
     */
    TableColumnComponent.prototype.triggerExpand = /**
     * @param {?} tdElement
     * @param {?} rowData
     * @return {?}
     */
    function (tdElement, rowData) {
        this.onTriggerExpand.emit({ tRowEl: this._getTRowElement(tdElement), rowData: rowData });
    };
    /**
     * @private
     * @param {?} tdElement
     * @return {?}
     */
    TableColumnComponent.prototype._getTRowElement = /**
     * @private
     * @param {?} tdElement
     * @return {?}
     */
    function (tdElement) {
        return tdElement.parentElement;
    };
    TableColumnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-table-column',
                    template: "<ng-template\r\n  #_columnTemplate\r\n  let-colData=\"\"\r\n  let-rowData=\"rowData\"\r\n  let-colSetting=\"colSetting\"\r\n  let-colTemplate=\"colTemplate\"\r\n>\r\n  <ng-container #tRow\r\n    *ngTemplateOutlet=\"\r\n      colTemplate ? _customColumnTemplate : _defaultColumnTemplate;\r\n      context: {\r\n        $implicit: colData,\r\n        rowData: rowData,\r\n        colSetting: colSetting,\r\n        colTemplate: colTemplate\r\n      }\r\n    \"\r\n  ></ng-container>\r\n</ng-template>\r\n<ng-template\r\n  #_customColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n  let-colTemplate=\"colTemplate\"\r\n>\r\n  <td #td\r\n  \r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': colSetting.pinned}\"\r\n    class=\"{{ colSetting.css }}\">\r\n    <i class=\"expand-control mdi mdi-menu-right text-big\"></i>\r\n    <div class=\"{{ colSetting.align }}\">\r\n     <!-- hello {{colSetting.marginLeft}} -->\r\n      <ng-container\r\n        *ngTemplateOutlet=\"\r\n          colTemplate.templateRef;\r\n          context: {\r\n            $implicit: colData,\r\n            rowData: rowData,\r\n            colSetting: colSetting,\r\n            col: this,\r\n            triggerExpand: this.triggerExpand.bind(this,td, rowData)\r\n          }\r\n        \"\r\n      ></ng-container>\r\n    </div>\r\n  </td>\r\n</ng-template>\r\n<ng-template\r\n  #_defaultColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n>\r\n  <ng-container [ngSwitch]=\"colSetting.type\">\r\n    <!-- {{(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData))}} -->\r\n    <!-- {{colSetting.colSpan}} -->\r\n    <td class=\"{{ colSetting.css }}\"\r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': colSetting.pinned}\"\r\n    [attr.colSpan] =\"(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData)) || colSetting.colSpan\"\r\n    [attr.rowSpan] =\"(colSetting.rowSpanFunc && colSetting.rowSpanFunc(rowData)) || colSetting.rowSpan\" >\r\n      <div class=\"d-flex\">\r\n        <div class=\"flex-fill {{ colSetting.align }}\">\r\n          <i\r\n            class=\"expand-control flex-fill fa fa-plus\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'plus-minus'\"\r\n          ></i\r\n          ><i\r\n            class=\"expand-control flex-fill mdi mdi-menu-down text-big\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'arrow'\"\r\n          ></i>\r\n          <ng-template [ngSwitchCase]=\"'datetime'\">\r\n            <div class=\"text-xs text-muted {{ colSetting.align }}\">\r\n              {{ colData | date: colSetting.dateTimeFormat }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'number'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData | number }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'numberFormat'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngSwitchDefault=\"ngSwitchDefault\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n</ng-template>\r\n",
                    styles: [".pinned-column{position:absolute;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    TableColumnComponent.ctorParameters = function () { return []; };
    TableColumnComponent.propDecorators = {
        _columnTemplate: [{ type: ViewChild, args: ["_columnTemplate", { static: true },] }],
        rowExpandTemplate: [{ type: Input }],
        onTriggerExpand: [{ type: Output }]
    };
    return TableColumnComponent;
}());
export { TableColumnComponent };
if (false) {
    /** @type {?} */
    TableColumnComponent.prototype._columnTemplate;
    /** @type {?} */
    TableColumnComponent.prototype.rowExpandTemplate;
    /** @type {?} */
    TableColumnComponent.prototype.onTriggerExpand;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2NvbHVtbi90YWJsZS1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBMkIsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQXVCLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFLekc7SUFZRTtRQURVLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRWpCLDRDQUFhOzs7OztJQUFiLFVBQWMsU0FBUyxFQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDLENBQUE7SUFDN0UsQ0FBQzs7Ozs7O0lBQ0ssOENBQWU7Ozs7O0lBQXZCLFVBQXdCLFNBQXNCO1FBQzVDLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQTtJQUNoQyxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHV2SEFBNEM7O2lCQUU3Qzs7Ozs7a0NBR0UsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztvQ0FHM0MsS0FBSztrQ0FDTCxNQUFNOztJQVVULDJCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksb0JBQW9COzs7SUFFL0IsK0NBQXFFOztJQUdyRSxpREFBa0Q7O0lBQ2xELCtDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbHVtblRlbXBsYXRlLCBUYWJsZVJvd0V4cGFuZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vL2RpcmVjdGl2ZS90YWJsZS1kaXJlY3RpdmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFibGVTZXR0aW5nIH0gZnJvbSAnLi4vLi4vL21vZGVscy9zZXR0aW5ncy5tb2RlbCc7XHJcbmltcG9ydCB7IGZpbmQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctdGFibGUtY29sdW1uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1jb2x1bW4uY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb2x1bW5Db21wb25lbnQge1xyXG5cclxuICBAVmlld0NoaWxkKFwiX2NvbHVtblRlbXBsYXRlXCIsIHtzdGF0aWM6IHRydWV9KSBwdWJsaWMgX2NvbHVtblRlbXBsYXRlO1xyXG5cclxuICBcclxuICBASW5wdXQoKSByb3dFeHBhbmRUZW1wbGF0ZTogVGFibGVSb3dFeHBhbmRUZW1wbGF0ZVxyXG4gIEBPdXRwdXQoKSBvblRyaWdnZXJFeHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHt0Um93RWwsIHJvd0RhdGF9PigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHRyaWdnZXJFeHBhbmQodGRFbGVtZW50LCByb3dEYXRhKXtcclxuICAgIHRoaXMub25UcmlnZ2VyRXhwYW5kLmVtaXQoe3RSb3dFbDogdGhpcy5fZ2V0VFJvd0VsZW1lbnQodGRFbGVtZW50KSwgcm93RGF0YX0pXHJcbiAgICB9XHJcbiAgcHJpdmF0ZSBfZ2V0VFJvd0VsZW1lbnQodGRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHRkRWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=