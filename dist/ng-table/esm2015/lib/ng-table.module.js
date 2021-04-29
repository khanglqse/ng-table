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
                imports: [BrowserModule, RouterModule, HttpClientModule, FormsModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdGFibGUvIiwic291cmNlcyI6WyJsaWIvbmctdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLHlCQUF5QixFQUN6QixxQkFBcUIsR0FDdEIsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUE4QjNELE1BQU0sT0FBTyxhQUFhOzs7WUE1QnpCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLDBCQUEwQjtvQkFDMUIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztnQkFDckUsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIscUJBQXFCO2lCQUN0QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL3RhYmxlLWhlYWRlci90YWJsZS1oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL2NvbHVtbi90YWJsZS1jb2x1bW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICBUYWJsZUhlYWRlclRlbXBsYXRlLFxuICBUYWJsZUhlYWRlckNvbnRyb2xUZW1wbGF0ZSxcbiAgVGFibGVDb2x1bW5UZW1wbGF0ZSxcbiAgVGFibGVSb3dFeHBhbmRUZW1wbGF0ZSxcbiAgVGFibGVGb290ZXJUZW1wbGF0ZSxcbiAgVGFibGVBY3Rpb25CdXR0b25UZW1wbGF0ZSxcbiAgVGFibGVSb3dUb3RhbFRlbXBsYXRlLFxufSBmcm9tIFwiLi9kaXJlY3RpdmUvdGFibGUtZGlyZWN0aXZlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgVGFibGVDb250ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvdGFibGUtY29udGVudC90YWJsZS1jb250ZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFibGVOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvbmF2aWdhdGlvbi90YWJsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5nVGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdUYWJsZUNvbXBvbmVudCxcbiAgICBBY3Rpb25CdXR0b25Db21wb25lbnQsXG4gICAgVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgVGFibGVDb2x1bW5Db21wb25lbnQsXG4gICAgVGFibGVIZWFkZXJUZW1wbGF0ZSxcbiAgICBUYWJsZUhlYWRlckNvbnRyb2xUZW1wbGF0ZSxcbiAgICBUYWJsZUNvbHVtblRlbXBsYXRlLFxuICAgIFRhYmxlUm93RXhwYW5kVGVtcGxhdGUsXG4gICAgVGFibGVGb290ZXJUZW1wbGF0ZSxcbiAgICBUYWJsZUFjdGlvbkJ1dHRvblRlbXBsYXRlLFxuICAgIFRhYmxlUm93VG90YWxUZW1wbGF0ZSxcbiAgICBUYWJsZUNvbnRlbnRDb21wb25lbnQsXG4gICAgVGFibGVOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgUm91dGVyTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ1RhYmxlQ29tcG9uZW50LFxuICAgIFRhYmxlSGVhZGVyVGVtcGxhdGUsXG4gICAgVGFibGVIZWFkZXJDb250cm9sVGVtcGxhdGUsXG4gICAgVGFibGVDb2x1bW5UZW1wbGF0ZSxcbiAgICBUYWJsZVJvd0V4cGFuZFRlbXBsYXRlLFxuICAgIFRhYmxlRm9vdGVyVGVtcGxhdGUsXG4gICAgVGFibGVBY3Rpb25CdXR0b25UZW1wbGF0ZSxcbiAgICBUYWJsZVJvd1RvdGFsVGVtcGxhdGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nVGFibGVNb2R1bGUge31cbiJdfQ==