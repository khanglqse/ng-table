import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { TableHeaderControlTemplate, TableHeaderTemplate } from 'src/app/table/directive/table-directive.directive';
import { TableSetting } from 'src/app/table/models/settings.model';

@Component({
  selector: 'ng-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.sass']
})
export class TableHeaderComponent implements OnInit {

  

  @Input() headerControlTemplate: TableHeaderControlTemplate
  @Input() headerTemplate: TableHeaderTemplate
  @Input() settings: TableSetting<any>
  constructor() { }

  ngOnInit() {
    console.log(this.headerControlTemplate)
  }
  ngAfterViewInit(): void {
    console.log(this.headerControlTemplate)
    
  }
}
