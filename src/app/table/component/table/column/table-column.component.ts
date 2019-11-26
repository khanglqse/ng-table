import { Component, OnInit, ContentChildren, Input, ViewChild } from '@angular/core';
import { TableColumnTemplate } from 'src/app/table/directive/table-directive.directive';
import { TableSetting } from 'src/app/table/models/settings.model';

@Component({
  selector: 'ng-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.sass']
})
export class TableColumnComponent implements OnInit {

  

  @ViewChild("_columnTemplate", {static: false}) public _columnTemplate;

  @Input() settings: TableSetting<any>  
  constructor() { }

  ngOnInit() {
  }

}
