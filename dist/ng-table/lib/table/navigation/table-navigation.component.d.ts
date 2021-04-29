import { OnInit, EventEmitter } from "@angular/core";
import { PagingSetting } from "../../models/settings.model";
export declare class TableNavigationComponent implements OnInit {
    totalPage: any;
    totalCount: number;
    pagingOptions: PagingSetting;
    change: EventEmitter<PagingSetting>;
    constructor();
    ngOnInit(): void;
    ngOnChange(): void;
    onPreviousClick(): void;
    onNextClick(): void;
    handlePageChange(event: any): void;
    handlePageSizeChange(event: any): void;
}
