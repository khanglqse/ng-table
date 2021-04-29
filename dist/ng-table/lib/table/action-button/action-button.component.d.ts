import { OnInit } from '@angular/core';
import { ButtonSetting, ActionButtonSetting } from '../..//models/settings.model';
import { TableActionButtonTemplate } from '../..//directive/table-directive.directive';
export declare class ActionButtonComponent implements OnInit {
    actBtnTemplate: TableActionButtonTemplate;
    actionButtonSettings: ActionButtonSetting<any>;
    actionButtonTemplate: any;
    constructor();
    ngOnInit(): void;
    actionBtnOnClick(btnSetting: ButtonSetting<any>, rowData: any): void;
}
