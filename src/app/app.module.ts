import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { TableComponent } from './table/component/table/table.component';
import { ActionButtonComponent } from './table/component/table/action-button/action-button.component';
import { TableHeaderComponent } from './table/component/table/table-header/table-header.component';
import {HttpClientModule} from '@angular/common/http'
import { TableColumnComponent } from './table/component/table/column/table-column.component';
import { TableHeaderTemplate, TableHeaderControlTemplate, TableColumnTemplate, TableRowExpandTemplate, TableFooterTemplate, TableActionButtonTemplate, TableRowTotalTemplate } from './table/directive/table-directive.directive';
import { TableContentComponent } from './table/component/table/table-content/table-content.component';
import { TableNavigationComponent } from './table/component/table/navigation/table-navigation.component';
import { FormsModule} from '@angular/forms'

const routes: Routes  = [
  {
    path: '', component: AppComponent,
  
  },
  {
    path: 'view', component: TableComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
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
    TableNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
