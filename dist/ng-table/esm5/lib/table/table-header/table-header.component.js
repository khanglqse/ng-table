/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-header/table-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TableHeaderControlTemplate, TableHeaderTemplate } from '../..//directive/table-directive.directive';
import { TableSetting } from '../..//models/settings.model';
var TableHeaderComponent = /** @class */ (function () {
    function TableHeaderComponent() {
    }
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.headerControlTemplate);
    };
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log(this.headerControlTemplate);
    };
    TableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-table-header',
                    template: "<ng-template #_headerTemplate>\r\n  <h3>\r\n    <ng-container\r\n      *ngTemplateOutlet=\"\r\n        headerTemplate ? headerTemplate.templateRef : _defaultHeaderTemplate;\r\n      \"\r\n    >\r\n    </ng-container>\r\n  </h3>\r\n</ng-template>\r\n\r\n<ng-template #_headerControlTemplate>\r\n  <div class=\"group-control\" *ngIf=\"headerControlTemplate\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"headerControlTemplate.templateRef\"\r\n    ></ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #_defaultHeaderTemplate>\r\n  <span>header icon</span>\r\n  <span>title</span>\r\n</ng-template>\r\n\r\n<ng-container>\r\n  <div class=\"table-header\">\r\n    <ng-container *ngTemplateOutlet=\"_headerTemplate\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"_headerControlTemplate\"></ng-container>\r\n  </div>\r\n</ng-container>\r\n",
                    styles: [":host ::ng-deep .table-header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between}:host ::ng-deep .table-header .group-control{display:flex;align-items:center}:host ::ng-deep .table-header .group-control>:not(:last-child){margin-right:8px}:host ::ng-deep .table-header .group-control button{padding:8px 12px}"]
                }] }
    ];
    /** @nocollapse */
    TableHeaderComponent.ctorParameters = function () { return []; };
    TableHeaderComponent.propDecorators = {
        headerControlTemplate: [{ type: Input }],
        headerTemplate: [{ type: Input }],
        settings: [{ type: Input }]
    };
    return TableHeaderComponent;
}());
export { TableHeaderComponent };
if (false) {
    /** @type {?} */
    TableHeaderComponent.prototype.headerControlTemplate;
    /** @type {?} */
    TableHeaderComponent.prototype.headerTemplate;
    /** @type {?} */
    TableHeaderComponent.prototype.settings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL3RhYmxlLWhlYWRlci90YWJsZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU1RDtJQVlFO0lBQWdCLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN6QyxDQUFDOzs7O0lBQ0QsOENBQWU7OztJQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUV6QyxDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDAyQkFBNEM7O2lCQUU3Qzs7Ozs7d0NBS0UsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7O0lBVVIsMkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSxvQkFBb0I7OztJQUkvQixxREFBMEQ7O0lBQzFELDhDQUE0Qzs7SUFDNUMsd0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFibGVIZWFkZXJDb250cm9sVGVtcGxhdGUsIFRhYmxlSGVhZGVyVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8vZGlyZWN0aXZlL3RhYmxlLWRpcmVjdGl2ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJsZVNldHRpbmcgfSBmcm9tICcuLi8uLi8vbW9kZWxzL3NldHRpbmdzLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctdGFibGUtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1oZWFkZXIuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBcclxuXHJcbiAgQElucHV0KCkgaGVhZGVyQ29udHJvbFRlbXBsYXRlOiBUYWJsZUhlYWRlckNvbnRyb2xUZW1wbGF0ZVxyXG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUYWJsZUhlYWRlclRlbXBsYXRlXHJcbiAgQElucHV0KCkgc2V0dGluZ3M6IFRhYmxlU2V0dGluZzxhbnk+XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRlckNvbnRyb2xUZW1wbGF0ZSlcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5oZWFkZXJDb250cm9sVGVtcGxhdGUpXHJcbiAgICBcclxuICB9XHJcbn1cclxuIl19