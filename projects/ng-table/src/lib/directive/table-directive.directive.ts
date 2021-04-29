import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({ selector: '[tableColumn]' })
export class TableColumnTemplate {
	/** columnDef property */
	@Input() for: string;
	constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: '[tableActionButton]' })
export class TableActionButtonTemplate {
	constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: '[tableRowTotal]' })
export class TableRowTotalTemplate {
	constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: '[tableFooter]' })
export class TableFooterTemplate {
	constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: '[tableHeaderControl]' })
export class TableHeaderControlTemplate {
	constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: '[tableHeader]' })
export class TableHeaderTemplate {
	constructor(public templateRef: TemplateRef<any>) { }
}

@Directive(
{ selector: '[tableRowExpand]' }
)
export class TableRowExpandTemplate {
	constructor(public templateRef: TemplateRef<any>) { }
}
