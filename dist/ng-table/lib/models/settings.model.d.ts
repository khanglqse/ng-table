import { SortState } from './sort-order.model';
export interface IBaseSetting {
    /** Css class apply to TD */
    css?: string;
    align?: 'text-left' | 'text-right' | 'text-center';
    width?: string;
    height?: string;
}
export declare class TableSetting<T> implements IBaseSetting {
    css?: string;
    align?: 'text-left' | 'text-right' | 'text-center';
    width?: string;
    height?: string;
    header?: IHeaderSetting;
    columns: Array<ColumnSetting<T>>;
    rows?: RowSetting<T>;
    actionButtons?: ActionButtonSetting<T>;
    pagination?: boolean;
    sortable?: boolean;
    /**  Message display when table is empty */
    showLoading?: boolean;
    constructor(setting: Partial<TableSetting<T>>);
}
export declare class ColumnSetting<T> implements IBaseSetting {
    columnDef: string;
    title: string;
    type?: 'text' | 'datetime' | 'number' | 'numberFormat';
    dateTimeFormat?: string;
    numberFormat?: {
        decimal?: number;
        useProp?: string;
    };
    sortable?: boolean;
    triggerExpand?: boolean;
    triggerExpandIcon?: 'arrow' | 'plus-minus';
    css?: string;
    width?: string;
    height?: string;
    pinned?: boolean;
    align?: 'text-left' | 'text-right' | 'text-center';
    triggerExpandFunc?: (rowData: T) => boolean;
    triggerCloseExpanded?: boolean;
    triggerCloseExpandedFunc?: (rowData: T) => boolean;
    colSpan?: number;
    colSpanFunc?: (rowData: any) => number;
    rowSpan?: number;
    rowSpanFunc?: (rowData: any) => number;
    /** Return data that display in table */
    prop?: (rowData: T) => any;
    /** Func return sort field data */
    sortBy?: (rowData: T) => any;
    constructor(setting: Partial<ColumnSetting<T>>);
}
export declare class RowSetting<T> implements IBaseSetting {
    trCssFunc?: (rowData: T) => string;
    css?: string;
    width?: string;
    height?: string;
    align?: 'text-left' | 'text-right' | 'text-center';
    triggerExpand?: boolean;
    triggerExpandFunc?: (rowData: T) => boolean;
    triggerCloseExpanded?: boolean;
    triggerCloseExpandedFunc?: (rowData: T) => boolean;
    constructor(setting: Partial<RowSetting<T>>);
}
export declare class ActionButtonSetting<T> implements IBaseSetting {
    title?: string;
    buttons: Array<ButtonSetting<T>>;
    css?: string;
    width?: string;
    height?: string;
    align?: 'text-left' | 'text-right' | 'text-center';
    constructor(setting: Partial<ActionButtonSetting<T>>);
}
export interface IHeaderSetting {
    title?: string;
    icon?: string;
}
export declare class ButtonSetting<T> implements IBaseSetting {
    tooltip: string;
    icon: string;
    actionLink?: any[];
    title?: string;
    css?: string;
    width?: string;
    height?: string;
    align?: 'text-left' | 'text-right' | 'text-center';
    /** Tooltip for disabled button when un-authorized */
    unAuthorizedMessage?: string;
    /** Action on click */
    action?: (rowData: T) => void;
    /** Action link array builder */
    actionLinkFunc?: (rowData: T) => any[];
    /** Condition to disable button */
    disableOn?: (rowData: T) => boolean;
    constructor(setting: Partial<ButtonSetting<T>>);
}
export interface ITableState {
    sortState: SortState;
    currentPage: number;
    pageLength: number;
}
export declare class PagingSetting {
    pageIndex: number;
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    sortState: SortState;
}
export declare class TableProps {
    isHaveHeader: IHeaderSetting;
    sortable: boolean;
    isHaveActionButtons: boolean;
    tableColSpan: number;
    haveRowTotal: boolean;
}
