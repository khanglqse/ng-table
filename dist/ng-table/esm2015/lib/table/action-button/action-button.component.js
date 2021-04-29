/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/action-button/action-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { ActionButtonSetting } from '../..//models/settings.model';
import { TableActionButtonTemplate } from '../..//directive/table-directive.directive';
export class ActionButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBK0IsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQU92RixNQUFNLE9BQU8scUJBQXFCO0lBS2hDLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUE4QixFQUFFLE9BQVk7UUFDN0QsSUFBSSxVQUFVLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUQsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNoRCxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO0lBQ0YsQ0FBQzs7O1lBdkJELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixndENBQTZDOzthQUU5Qzs7Ozs7NkJBR0UsS0FBSzttQ0FDTCxLQUFLO21DQUNMLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUFGbEQsK0NBQWtEOztJQUNsRCxxREFBdUQ7O0lBQ3ZELHFEQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ1dHRvblNldHRpbmcsIFRhYmxlU2V0dGluZywgQWN0aW9uQnV0dG9uU2V0dGluZyB9IGZyb20gJy4uLy4uLy9tb2RlbHMvc2V0dGluZ3MubW9kZWwnO1xyXG5pbXBvcnQgeyBUYWJsZUFjdGlvbkJ1dHRvblRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vL2RpcmVjdGl2ZS90YWJsZS1kaXJlY3RpdmUuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctYWN0aW9uLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi1idXR0b24uY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgYWN0QnRuVGVtcGxhdGU6IFRhYmxlQWN0aW9uQnV0dG9uVGVtcGxhdGVcclxuICBASW5wdXQoKSBhY3Rpb25CdXR0b25TZXR0aW5nczogQWN0aW9uQnV0dG9uU2V0dGluZzxhbnk+XHJcbiAgQFZpZXdDaGlsZCgnX2FjdGlvbkJ1dHRvblRlbXBsYXRlJywge3N0YXRpYzogdHJ1ZX0pIHB1YmxpYyBhY3Rpb25CdXR0b25UZW1wbGF0ZTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgXHJcbiAgYWN0aW9uQnRuT25DbGljayhidG5TZXR0aW5nOiBCdXR0b25TZXR0aW5nPGFueT4sIHJvd0RhdGE6IGFueSkge1xyXG5cdFx0aWYgKGJ0blNldHRpbmcuZGlzYWJsZU9uICYmIGJ0blNldHRpbmcuZGlzYWJsZU9uKHJvd0RhdGEpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIWJ0blNldHRpbmcuYWN0aW9uTGluayAmJiBidG5TZXR0aW5nLmFjdGlvbikge1xyXG5cdFx0XHRidG5TZXR0aW5nLmFjdGlvbihyb3dEYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19