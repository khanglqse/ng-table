import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ActionButtonComponent } from "./table/action-button/action-button.component";
import { TableHeaderComponent } from "./table/table-header/table-header.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { TableColumnComponent } from "./table/column/table-column.component";
import {
  TableHeaderTemplate,
  TableHeaderControlTemplate,
  TableColumnTemplate,
  TableRowExpandTemplate,
  TableFooterTemplate,
  TableActionButtonTemplate,
  TableRowTotalTemplate,
} from "./directive/table-directive.directive";
import { TableContentComponent } from "./table/table-content/table-content.component";
import { TableNavigationComponent } from "./table/navigation/table-navigation.component";
import { FormsModule } from "@angular/forms";
import { NgTableComponent } from "./table/table.component";

@NgModule({
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
})
export class NgTableModule {}
