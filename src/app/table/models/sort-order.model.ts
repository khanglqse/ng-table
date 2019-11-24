export enum SortOrder {
	Desc = -1,
	Asc = 1,
	None = 0
}

export class SortState {
	index: number;
	order: SortOrder;
	columnDef: string;
}
