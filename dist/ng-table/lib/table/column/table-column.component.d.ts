import { EventEmitter } from '@angular/core';
import { TableRowExpandTemplate } from '../..//directive/table-directive.directive';
export declare class TableColumnComponent {
    _columnTemplate: any;
    rowExpandTemplate: TableRowExpandTemplate;
    onTriggerExpand: EventEmitter<{
        tRowEl: any;
        rowData: any;
    }>;
    constructor();
    triggerExpand(tdElement: any, rowData: any): void;
    private _getTRowElement;
}
