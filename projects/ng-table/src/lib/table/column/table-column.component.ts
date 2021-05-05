import {
  Component,
  OnInit,
  ContentChildren,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  HostListener,
  ContentChild,
} from "@angular/core";
import {
  TableColumnTemplate,
  TableRowExpandTemplate,
} from "../..//directive/table-directive.directive";
import { TableSetting } from "../..//models/settings.model";
import { find } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "ng-table-column",
  templateUrl: "./table-column.component.html",
  styleUrls: ["./table-column.component.sass"],
})
export class TableColumnComponent {
  @ViewChild("_columnTemplate", { static: true }) public _columnTemplate;

  @Input() rowExpandTemplate: TableRowExpandTemplate;
  @Output() onTriggerExpand = new EventEmitter<{ tRowEl; rowData }>();
  constructor() {}

  triggerExpand(tdElement, rowData) {
    this.onTriggerExpand.emit({
      tRowEl: this._getTRowElement(tdElement),
      rowData,
    });
  }
  private _getTRowElement(tdElement: HTMLElement) {
    return tdElement.parentElement;
  }
}
