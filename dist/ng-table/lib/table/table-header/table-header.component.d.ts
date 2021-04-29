import { OnInit } from '@angular/core';
import { TableHeaderControlTemplate, TableHeaderTemplate } from '../..//directive/table-directive.directive';
import { TableSetting } from '../..//models/settings.model';
export declare class TableHeaderComponent implements OnInit {
    headerControlTemplate: TableHeaderControlTemplate;
    headerTemplate: TableHeaderTemplate;
    settings: TableSetting<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
