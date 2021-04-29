/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ActionButtonComponent } from "./table/action-button/action-button.component";
import { TableHeaderComponent } from "./table/table-header/table-header.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { TableColumnComponent } from "./table/column/table-column.component";
import { TableHeaderTemplate, TableHeaderControlTemplate, TableColumnTemplate, TableRowExpandTemplate, TableFooterTemplate, TableActionButtonTemplate, TableRowTotalTemplate, } from "./directive/table-directive.directive";
import { TableContentComponent } from "./table/table-content/table-content.component";
import { TableNavigationComponent } from "./table/navigation/table-navigation.component";
import { FormsModule } from "@angular/forms";
import { NgTableComponent } from "./table/table.component";
import { CommonModule } from "@angular/common";
var NgTableModule = /** @class */ (function () {
    function NgTableModule() {
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
                    imports: [BrowserModule, CommonModule, RouterModule, HttpClientModule, FormsModule],
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
    return NgTableModule;
}());
export { NgTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGFibGUvIiwic291cmNlcyI6WyJsaWIvbmctdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLHlCQUF5QixFQUN6QixxQkFBcUIsR0FDdEIsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBQUE7SUE0QjRCLENBQUM7O2dCQTVCNUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztvQkFDbkYsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIscUJBQXFCO3FCQUN0QjtpQkFDRjs7SUFDMkIsb0JBQUM7Q0FBQSxBQTVCN0IsSUE0QjZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvY29sdW1uL3RhYmxlLWNvbHVtbi5jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gIFRhYmxlSGVhZGVyVGVtcGxhdGUsXG4gIFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlLFxuICBUYWJsZUNvbHVtblRlbXBsYXRlLFxuICBUYWJsZVJvd0V4cGFuZFRlbXBsYXRlLFxuICBUYWJsZUZvb3RlclRlbXBsYXRlLFxuICBUYWJsZUFjdGlvbkJ1dHRvblRlbXBsYXRlLFxuICBUYWJsZVJvd1RvdGFsVGVtcGxhdGUsXG59IGZyb20gXCIuL2RpcmVjdGl2ZS90YWJsZS1kaXJlY3RpdmUuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBUYWJsZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS90YWJsZS1jb250ZW50L3RhYmxlLWNvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJsZU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS9uYXZpZ2F0aW9uL3RhYmxlLW5hdmlnYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ1RhYmxlQ29tcG9uZW50LFxuICAgIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCxcbiAgICBUYWJsZUhlYWRlckNvbXBvbmVudCxcbiAgICBUYWJsZUNvbHVtbkNvbXBvbmVudCxcbiAgICBUYWJsZUhlYWRlclRlbXBsYXRlLFxuICAgIFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlLFxuICAgIFRhYmxlQ29sdW1uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dFeHBhbmRUZW1wbGF0ZSxcbiAgICBUYWJsZUZvb3RlclRlbXBsYXRlLFxuICAgIFRhYmxlQWN0aW9uQnV0dG9uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dUb3RhbFRlbXBsYXRlLFxuICAgIFRhYmxlQ29udGVudENvbXBvbmVudCxcbiAgICBUYWJsZU5hdmlnYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgTmdUYWJsZUNvbXBvbmVudCxcbiAgICBUYWJsZUhlYWRlclRlbXBsYXRlLFxuICAgIFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlLFxuICAgIFRhYmxlQ29sdW1uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dFeHBhbmRUZW1wbGF0ZSxcbiAgICBUYWJsZUZvb3RlclRlbXBsYXRlLFxuICAgIFRhYmxlQWN0aW9uQnV0dG9uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dUb3RhbFRlbXBsYXRlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ1RhYmxlTW9kdWxlIHt9XG4iXX0=