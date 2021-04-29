/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/action-button/action-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { ActionButtonSetting } from '../..//models/settings.model';
import { TableActionButtonTemplate } from '../..//directive/table-directive.directive';
var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent() {
    }
    /**
     * @return {?}
     */
    ActionButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} btnSetting
     * @param {?} rowData
     * @return {?}
     */
    ActionButtonComponent.prototype.actionBtnOnClick = /**
     * @param {?} btnSetting
     * @param {?} rowData
     * @return {?}
     */
    function (btnSetting, rowData) {
        if (btnSetting.disableOn && btnSetting.disableOn(rowData)) {
            return;
        }
        if (!btnSetting.actionLink && btnSetting.action) {
            btnSetting.action(rowData);
        }
    };
    ActionButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-action-button',
                    template: "<ng-template #_actionButtonTemplate=\"\" let-buttons=\"buttons\" let-rowData=\"\">\r\n  <ng-container\r\n    *ngTemplateOutlet=\"\r\n      actBtnTemplate\r\n        ? actBtnTemplate.templateRef\r\n        : _defaultActionButtonTemplate;\r\n      context: {\r\n        $implicit: rowData,\r\n        buttons: buttons\r\n      }\r\n    \"\r\n  ></ng-container>\r\n</ng-template>\r\n<ng-template\r\n  #_defaultActionButtonTemplate=\"\"\r\n  let-buttons=\"buttons\"\r\n  let-rowData=\"\"\r\n>\r\n  <td class=\"{{ actionButtonSettings.align }} {{ actionButtonSettings.css }}\">\r\n    <div class=\"btn-group\">\r\n      <ng-container *ngFor=\"let button of buttons\">\r\n        <a\r\n          [ngClass]=\"button.disableOn && button.disableOn(rowData) ? 'disabled' : ''\"\r\n          class=\"btn btn-icon {{ button.align }} {{ button.css }}\"\r\n          [routerLink]=\"button.actionLinkFunc ? button.actionLinkFunc(rowData) : button.actionLink ? button.actionLink : null\"\r\n          (click)=\"!button.actionLink && button.action && button.action(rowData)\"\r\n          ><span class=\"{{ button.icon }}\">{{ button.title }}</span></a\r\n        ></ng-container\r\n      >\r\n    </div>\r\n  </td>\r\n</ng-template>\r\n",
                    styles: [".btn-group{display:flex;justify-content:space-between}"]
                }] }
    ];
    /** @nocollapse */
    ActionButtonComponent.ctorParameters = function () { return []; };
    ActionButtonComponent.propDecorators = {
        actBtnTemplate: [{ type: Input }],
        actionButtonSettings: [{ type: Input }],
        actionButtonTemplate: [{ type: ViewChild, args: ['_actionButtonTemplate', { static: true },] }]
    };
    return ActionButtonComponent;
}());
export { ActionButtonComponent };
if (false) {
    /** @type {?} */
    ActionButtonComponent.prototype.actBtnTemplate;
    /** @type {?} */
    ActionButtonComponent.prototype.actionButtonSettings;
    /** @type {?} */
    ActionButtonComponent.prototype.actionButtonTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBK0IsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV2RjtJQVVFO0lBQWdCLENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7O0lBRUQsZ0RBQWdCOzs7OztJQUFoQixVQUFpQixVQUE4QixFQUFFLE9BQVk7UUFDN0QsSUFBSSxVQUFVLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUQsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNoRCxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO0lBQ0YsQ0FBQzs7Z0JBdkJELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixndENBQTZDOztpQkFFOUM7Ozs7O2lDQUdFLEtBQUs7dUNBQ0wsS0FBSzt1Q0FDTCxTQUFTLFNBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztJQWVwRCw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLHFCQUFxQjs7O0lBRWhDLCtDQUFrRDs7SUFDbEQscURBQXVEOztJQUN2RCxxREFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCdXR0b25TZXR0aW5nLCBUYWJsZVNldHRpbmcsIEFjdGlvbkJ1dHRvblNldHRpbmcgfSBmcm9tICcuLi8uLi8vbW9kZWxzL3NldHRpbmdzLm1vZGVsJztcclxuaW1wb3J0IHsgVGFibGVBY3Rpb25CdXR0b25UZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy9kaXJlY3RpdmUvdGFibGUtZGlyZWN0aXZlLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFjdGlvbi1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGFjdEJ0blRlbXBsYXRlOiBUYWJsZUFjdGlvbkJ1dHRvblRlbXBsYXRlXHJcbiAgQElucHV0KCkgYWN0aW9uQnV0dG9uU2V0dGluZ3M6IEFjdGlvbkJ1dHRvblNldHRpbmc8YW55PlxyXG4gIEBWaWV3Q2hpbGQoJ19hY3Rpb25CdXR0b25UZW1wbGF0ZScsIHtzdGF0aWM6IHRydWV9KSBwdWJsaWMgYWN0aW9uQnV0dG9uVGVtcGxhdGU7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG4gIFxyXG4gIGFjdGlvbkJ0bk9uQ2xpY2soYnRuU2V0dGluZzogQnV0dG9uU2V0dGluZzxhbnk+LCByb3dEYXRhOiBhbnkpIHtcclxuXHRcdGlmIChidG5TZXR0aW5nLmRpc2FibGVPbiAmJiBidG5TZXR0aW5nLmRpc2FibGVPbihyb3dEYXRhKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFidG5TZXR0aW5nLmFjdGlvbkxpbmsgJiYgYnRuU2V0dGluZy5hY3Rpb24pIHtcclxuXHRcdFx0YnRuU2V0dGluZy5hY3Rpb24ocm93RGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==