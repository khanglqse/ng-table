import { Component, OnInit, ViewChild, Input } from "@angular/core";
import {
  ButtonSetting,
  TableSetting,
  ActionButtonSetting,
} from "../..//models/settings.model";
import { TableActionButtonTemplate } from "../..//directive/table-directive.directive";

@Component({
  selector: "ng-action-button",
  templateUrl: "./action-button.component.html",
  styleUrls: ["./action-button.component.sass"],
})
export class ActionButtonComponent implements OnInit {
  @Input() actBtnTemplate: TableActionButtonTemplate;
  @Input() actionButtonSettings: ActionButtonSetting<any>;
  @ViewChild("_actionButtonTemplate", { static: true })
  public actionButtonTemplate;
  constructor() {}

  ngOnInit() {}

  actionBtnOnClick(btnSetting: ButtonSetting<any>, rowData: any) {
    if (btnSetting.disableOn && btnSetting.disableOn(rowData)) {
      return;
    }

    if (!btnSetting.actionLink && btnSetting.action) {
      btnSetting.action(rowData);
    }
  }
}
