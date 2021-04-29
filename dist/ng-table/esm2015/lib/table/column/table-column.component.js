/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/column/table-column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { TableRowExpandTemplate } from '../..//directive/table-directive.directive';
export class TableColumnComponent {
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
                template: "<ng-template\r\n  #_columnTemplate\r\n  let-colData=\"\"\r\n  let-rowData=\"rowData\"\r\n  let-colSetting=\"colSetting\"\r\n  let-colTemplate=\"colTemplate\"\r\n  let-isPinned=\"isPinned\"\r\n>\r\n  <ng-container #tRow\r\n    *ngTemplateOutlet=\"\r\n      colTemplate ? _customColumnTemplate : _defaultColumnTemplate;\r\n      context: {\r\n        $implicit: colData,\r\n        rowData: rowData,\r\n        colSetting: colSetting,\r\n        colTemplate: colTemplate,\r\n        isPinned: isPinned\r\n      }\r\n    \"\r\n  ></ng-container>\r\n</ng-template>\r\n<ng-template\r\n  #_customColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n  let-colTemplate=\"colTemplate\"\r\n  let-isPinned=\"isPinned\"\r\n>\r\n  <td #td\r\n  \r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': isPinned}\"\r\n    class=\"{{ colSetting.css }}\">\r\n    <i class=\"expand-control mdi mdi-menu-right text-big\"></i>\r\n    <div class=\"{{ colSetting.align }}\">\r\n     <!-- hello {{colSetting.marginLeft}} -->\r\n      <ng-container\r\n        *ngTemplateOutlet=\"\r\n          colTemplate.templateRef;\r\n          context: {\r\n            $implicit: colData,\r\n            rowData: rowData,\r\n            colSetting: colSetting,\r\n            col: this,\r\n            triggerExpand: this.triggerExpand.bind(this,td, rowData)\r\n          }\r\n        \"\r\n      ></ng-container>\r\n    </div>\r\n  </td>\r\n</ng-template>\r\n<ng-template\r\n  #_defaultColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n  let-isPinned=\"isPinned\"\r\n>\r\n  <ng-container [ngSwitch]=\"colSetting.type\">\r\n    <!-- {{(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData))}} -->\r\n    <!-- {{colSetting.colSpan}} -->\r\n    <td class=\"{{ colSetting.css }}\"\r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': isPinned}\"\r\n    [attr.colSpan] =\"(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData)) || colSetting.colSpan\"\r\n    [attr.rowSpan] =\"(colSetting.rowSpanFunc && colSetting.rowSpanFunc(rowData)) || colSetting.rowSpan\" >\r\n      <div class=\"d-flex\">\r\n        <div class=\"flex-fill {{ colSetting.align }}\">\r\n          <i\r\n            class=\"expand-control flex-fill fa fa-plus\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'plus-minus'\"\r\n          ></i\r\n          ><i\r\n            class=\"expand-control flex-fill mdi mdi-menu-down text-big\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'arrow'\"\r\n          ></i>\r\n          <ng-template [ngSwitchCase]=\"'datetime'\">\r\n            <div class=\"text-xs text-muted {{ colSetting.align }}\">\r\n              {{ colData | date: colSetting.dateTimeFormat }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'number'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData | number }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'numberFormat'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngSwitchDefault=\"ngSwitchDefault\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n</ng-template>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2NvbHVtbi90YWJsZS1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBMkIsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQXVCLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFVekcsTUFBTSxPQUFPLG9CQUFvQjtJQU8vQjtRQURVLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRWpCLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDN0UsQ0FBQzs7Ozs7O0lBQ0ssZUFBZSxDQUFDLFNBQXNCO1FBQzVDLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQTtJQUNoQyxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGkySEFBNEM7O2FBRTdDOzs7Ozs4QkFHRSxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO2dDQUczQyxLQUFLOzhCQUNMLE1BQU07Ozs7SUFKUCwrQ0FBcUU7O0lBR3JFLGlEQUFrRDs7SUFDbEQsK0NBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYmxlQ29sdW1uVGVtcGxhdGUsIFRhYmxlUm93RXhwYW5kVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8vZGlyZWN0aXZlL3RhYmxlLWRpcmVjdGl2ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJsZVNldHRpbmcgfSBmcm9tICcuLi8uLi8vbW9kZWxzL3NldHRpbmdzLm1vZGVsJztcclxuaW1wb3J0IHsgZmluZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy10YWJsZS1jb2x1bW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWNvbHVtbi5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbHVtbkNvbXBvbmVudCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJfY29sdW1uVGVtcGxhdGVcIiwge3N0YXRpYzogdHJ1ZX0pIHB1YmxpYyBfY29sdW1uVGVtcGxhdGU7XHJcblxyXG4gIFxyXG4gIEBJbnB1dCgpIHJvd0V4cGFuZFRlbXBsYXRlOiBUYWJsZVJvd0V4cGFuZFRlbXBsYXRlXHJcbiAgQE91dHB1dCgpIG9uVHJpZ2dlckV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXI8e3RSb3dFbCwgcm93RGF0YX0+KCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgdHJpZ2dlckV4cGFuZCh0ZEVsZW1lbnQsIHJvd0RhdGEpe1xyXG4gICAgdGhpcy5vblRyaWdnZXJFeHBhbmQuZW1pdCh7dFJvd0VsOiB0aGlzLl9nZXRUUm93RWxlbWVudCh0ZEVsZW1lbnQpLCByb3dEYXRhfSlcclxuICAgIH1cclxuICBwcml2YXRlIF9nZXRUUm93RWxlbWVudCh0ZEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gdGRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICB9XHJcblxyXG59XHJcbiJdfQ==