import { Component, OnInit, ContentChildren, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { TableColumnTemplate, TableRowExpandTemplate } from 'src/app/table/directive/table-directive.directive';
import { TableSetting } from 'src/app/table/models/settings.model';
import { find } from 'rxjs/operators';

@Component({
  selector: 'ng-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.sass']
})
export class TableColumnComponent implements OnInit {

  

  @ViewChild("_columnTemplate", {static: true}) public _columnTemplate;

  @Input() rowExpandTemplate: TableRowExpandTemplate
  @Input() settings: TableSetting<any>  
  @Output() onTriggerExpand = new EventEmitter<null>();
  constructor() { }

  ngOnInit() {
  }
  triggerExpand(){
    this.onTriggerExpand.emit();
  }
  
}
