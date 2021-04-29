export declare enum SortOrder {
    Desc = -1,
    Asc = 1,
    None = 0
}
export declare class SortState {
    index: number;
    order: SortOrder;
    columnDef: string;
}
