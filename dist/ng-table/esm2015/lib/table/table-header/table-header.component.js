/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-header/table-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TableHeaderControlTemplate, TableHeaderTemplate } from '../..//directive/table-directive.directive';
import { TableSetting } from '../..//models/settings.model';
export class TableHeaderComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL3RhYmxlLWhlYWRlci90YWJsZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU81RCxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7SUFDRCxlQUFlO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUV6QyxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDAyQkFBNEM7O2FBRTdDOzs7OztvQ0FLRSxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUZOLHFEQUEwRDs7SUFDMUQsOENBQTRDOztJQUM1Qyx3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJsZUhlYWRlckNvbnRyb2xUZW1wbGF0ZSwgVGFibGVIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy9kaXJlY3RpdmUvdGFibGUtZGlyZWN0aXZlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRhYmxlU2V0dGluZyB9IGZyb20gJy4uLy4uLy9tb2RlbHMvc2V0dGluZ3MubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy10YWJsZS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlYWRlci5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIFxyXG5cclxuICBASW5wdXQoKSBoZWFkZXJDb250cm9sVGVtcGxhdGU6IFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlXHJcbiAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRhYmxlSGVhZGVyVGVtcGxhdGVcclxuICBASW5wdXQoKSBzZXR0aW5nczogVGFibGVTZXR0aW5nPGFueT5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZGVyQ29udHJvbFRlbXBsYXRlKVxyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRlckNvbnRyb2xUZW1wbGF0ZSlcclxuICAgIFxyXG4gIH1cclxufVxyXG4iXX0=