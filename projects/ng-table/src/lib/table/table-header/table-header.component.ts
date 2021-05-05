import { Component, OnInit, Input, ContentChild } from "@angular/core";
import {
  TableHeaderControlTemplate,
  TableHeaderTemplate,
} from "../..//directive/table-directive.directive";
import { TableSetting } from "../..//models/settings.model";

@Component({
  selector: "ng-table-header",
  templateUrl: "./table-header.component.html",
  styleUrls: ["./table-header.component.sass"],
})
export class TableHeaderComponent implements OnInit {
  @Input() headerControlTemplate: TableHeaderControlTemplate;
  @Input() headerTemplate: TableHeaderTemplate;
  @Input() settings: TableSetting<any>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}
}
