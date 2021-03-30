import { SortState } from './sort-order.model';

export interface IBaseSetting {
	/** Css class apply to TD */
	css?: string;
	align?: 'text-left' | 'text-right' | 'text-center';
	width?: string
	height?: string
}

export class TableSetting<T> implements IBaseSetting {
	public css?: string;
	public align?: 'text-left' | 'text-right' | 'text-center' = 'text-left';
	public width?: string
	public height?: string
	public header?: IHeaderSetting;
	public columns: Array<ColumnSetting<T>> = [];
	public rows?: RowSetting<T>;
	public actionButtons?: ActionButtonSetting<T>;
	public pagination?= true;
	public sortable?= true;
	/**  Message display when table is empty */
	public showLoading?= true;


	constructor(setting: Partial<TableSetting<T>>) {
		Object.assign(this, setting);
		this.actionButtons = new ActionButtonSetting(this.actionButtons);
		this.rows = new RowSetting(this.rows)
		for (const k in this.columns) {
			if (this.columns[k]) {
				this.columns[k] = new ColumnSetting<T>(this.columns[k]);
			}
		}
	}
}

export class ColumnSetting<T> implements IBaseSetting {
	public columnDef: string;
	public title: string;
	public type?: 'text' | 'datetime' | 'number' | 'numberFormat' = 'text';
	// public dateTimeFormat?: { input?: string; output: string; } = { input: 'YYYY-MM-DDTHH:mm:ss', output: 'ddd DD/MM/YYYY hh:mma' };
	public dateTimeFormat?: string ='short'
	public numberFormat?: { decimal?: number; useProp?: string; };
	public sortable?= true;
	public triggerExpand?: boolean;
	public triggerExpandIcon?: 'arrow' | 'plus-minus' = 'arrow';

	public css?: string;
	public width?: string;
	public height?: string;
	public pinned? = false
	public align?: 'text-left' | 'text-right' | 'text-center' = 'text-left';
	public triggerExpandFunc?: (rowData: T) => boolean;
	public triggerCloseExpanded? = true
	public triggerCloseExpandedFunc?: (rowData: T) => boolean
	public colSpan?: number = 1
	public colSpanFunc?: (rowData) => number 
	public rowSpan?: number = 1
	public rowSpanFunc?: (rowData) => number 
	/** Return data that display in table */
	public prop?: (rowData: T) => any;
	/** Func return sort field data */
	public sortBy?: (rowData: T) => any;

	constructor(setting: Partial<ColumnSetting<T>>) {
		Object.assign(this, setting);
		if(this.pinned && !this.width){
			this.width = '180px'
		}
	}
}
export class RowSetting<T> implements IBaseSetting {
	public trCssFunc?: (rowData: T) => string;
	public css?: string;
	public width?: string;
	public height?: string;
	public align?: 'text-left' | 'text-right' | 'text-center' = 'text-left';

	public triggerExpand?: boolean = false
	public triggerExpandFunc?: (rowData: T) => boolean
	public triggerCloseExpanded? = true
	public triggerCloseExpandedFunc?: (rowData: T) => boolean
	constructor(setting: Partial<RowSetting<T>>){
		Object.assign(this, setting)
	}

}
export class ActionButtonSetting<T> implements IBaseSetting {
	public title?: string = 'Actions';
	public buttons: Array<ButtonSetting<T>>;
	public css?: string;
	public width?: string;
	public height?: string;
	public align?: 'text-left' | 'text-right' | 'text-center' = 'text-left';

	constructor(setting: Partial<ActionButtonSetting<T>>) {
		Object.assign(this, setting);
	}
}

export interface IHeaderSetting {
	title?: string;
	icon?: string
}

export class ButtonSetting<T> implements IBaseSetting{
	public tooltip: string;
	public icon: string;
	public actionLink?: any[];
	public title?: string
	public css?: string;
	public width?: string;
	public height?: string;

	public align?: 'text-left' | 'text-right' | 'text-center' = 'text-left';
	/** Tooltip for disabled button when un-authorized */
	public unAuthorizedMessage?= 'You may ask your Manager to update the settings';

	/** Action on click */
	public action?: (rowData: T) => void;
	/** Action link array builder */
	public actionLinkFunc?: (rowData: T) => any[];
	/** Condition to disable button */
	public disableOn?: (rowData: T) => boolean;

	constructor(setting: Partial<ButtonSetting<T>>) {
		Object.assign(this, setting);
	}
}

export interface ITableState {
	sortState: SortState;
	currentPage: number;
	pageLength: number;
}

export class PagingSetting {
	pageIndex = 0;
	pageNumber = 1;
	pageSize = 10;
	totalCount: number;
	currentIndex = 0;
	currentPage = 1;
	sortState: SortState;
}
export class TableProps {
  isHaveHeader: IHeaderSetting;
  sortable: boolean;
  isHaveActionButtons: boolean;
  tableColSpan: number;
  haveRowTotal: boolean;

}
