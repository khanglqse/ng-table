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
export class NgTableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGFibGUvIiwic291cmNlcyI6WyJsaWIvbmctdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLHlCQUF5QixFQUN6QixxQkFBcUIsR0FDdEIsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBOEIvQyxNQUFNLE9BQU8sYUFBYTs7O1lBNUJ6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO2dCQUNuRixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLDBCQUEwQjtvQkFDMUIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6QixxQkFBcUI7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvY29sdW1uL3RhYmxlLWNvbHVtbi5jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gIFRhYmxlSGVhZGVyVGVtcGxhdGUsXG4gIFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlLFxuICBUYWJsZUNvbHVtblRlbXBsYXRlLFxuICBUYWJsZVJvd0V4cGFuZFRlbXBsYXRlLFxuICBUYWJsZUZvb3RlclRlbXBsYXRlLFxuICBUYWJsZUFjdGlvbkJ1dHRvblRlbXBsYXRlLFxuICBUYWJsZVJvd1RvdGFsVGVtcGxhdGUsXG59IGZyb20gXCIuL2RpcmVjdGl2ZS90YWJsZS1kaXJlY3RpdmUuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBUYWJsZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS90YWJsZS1jb250ZW50L3RhYmxlLWNvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJsZU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS9uYXZpZ2F0aW9uL3RhYmxlLW5hdmlnYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ1RhYmxlQ29tcG9uZW50LFxuICAgIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCxcbiAgICBUYWJsZUhlYWRlckNvbXBvbmVudCxcbiAgICBUYWJsZUNvbHVtbkNvbXBvbmVudCxcbiAgICBUYWJsZUhlYWRlclRlbXBsYXRlLFxuICAgIFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlLFxuICAgIFRhYmxlQ29sdW1uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dFeHBhbmRUZW1wbGF0ZSxcbiAgICBUYWJsZUZvb3RlclRlbXBsYXRlLFxuICAgIFRhYmxlQWN0aW9uQnV0dG9uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dUb3RhbFRlbXBsYXRlLFxuICAgIFRhYmxlQ29udGVudENvbXBvbmVudCxcbiAgICBUYWJsZU5hdmlnYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgTmdUYWJsZUNvbXBvbmVudCxcbiAgICBUYWJsZUhlYWRlclRlbXBsYXRlLFxuICAgIFRhYmxlSGVhZGVyQ29udHJvbFRlbXBsYXRlLFxuICAgIFRhYmxlQ29sdW1uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dFeHBhbmRUZW1wbGF0ZSxcbiAgICBUYWJsZUZvb3RlclRlbXBsYXRlLFxuICAgIFRhYmxlQWN0aW9uQnV0dG9uVGVtcGxhdGUsXG4gICAgVGFibGVSb3dUb3RhbFRlbXBsYXRlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ1RhYmxlTW9kdWxlIHt9XG4iXX0=