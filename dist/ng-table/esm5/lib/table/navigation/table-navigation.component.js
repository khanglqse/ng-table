/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/navigation/table-navigation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { PagingSetting } from "../../models/settings.model";
var TableNavigationComponent = /** @class */ (function () {
    function TableNavigationComponent() {
        this.pagingOptions = new PagingSetting();
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TableNavigationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.totalPage = Math.ceil(this.totalCount / this.pagingOptions.pageSize) + 1;
    };
    /**
     * @return {?}
     */
    TableNavigationComponent.prototype.ngOnChange = /**
     * @return {?}
     */
    function () {
        this.totalPage = Math.ceil(this.totalCount / this.pagingOptions.pageSize) + 1;
    };
    /**
     * @return {?}
     */
    TableNavigationComponent.prototype.onPreviousClick = /**
     * @return {?}
     */
    function () {
        if (this.pagingOptions.pageNumber === 1) {
            return;
        }
        this.pagingOptions.pageNumber -= 1;
        this.change.emit(this.pagingOptions);
    };
    /**
     * @return {?}
     */
    TableNavigationComponent.prototype.onNextClick = /**
     * @return {?}
     */
    function () {
        this.pagingOptions.pageNumber += 1;
        this.change.emit(this.pagingOptions);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableNavigationComponent.prototype.handlePageChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.pagingOptions.pageNumber = event.target.value;
        this.pagingOptions.pageIndex = event.target.value - 1;
        this.change.emit(this.pagingOptions);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableNavigationComponent.prototype.handlePageSizeChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.pagingOptions.pageSize = event.target.value;
        this.change.emit(this.pagingOptions);
    };
    TableNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: "ng-table-navigation",
                    template: "<div class=\"container\">\r\n    <span>Show</span>\r\n    <select (change)=\"handlePageSizeChange($event)\" name=\"pageSize\">\r\n        <option value=\"5\">5 rows</option>\r\n        <option value=\"10\">10 rows</option>\r\n        <option value=\"20\">20 rows</option>\r\n        <option value=\"50\">50 rows</option>\r\n        <option value=\"100\">100 rows</option>\r\n    </select>\r\n    <button (click)=\"onPreviousClick()\">Previous</button>\r\n    <input type=\"number\" [(ngModel)]=\"pagingOptions.pageNumber\" (change)=\"handlePageChange($event)\" />\r\n    <span>of {{totalPage}}</span>\r\n    <button (click)=\"onNextClick()\">Next</button>\r\n</div>",
                    styles: [":host{float:right}:host .container>*{margin-left:8px}:host select{height:22px;min-width:44px}:host input{height:15px;width:50px}"]
                }] }
    ];
    /** @nocollapse */
    TableNavigationComponent.ctorParameters = function () { return []; };
    TableNavigationComponent.propDecorators = {
        totalCount: [{ type: Input }],
        change: [{ type: Output }]
    };
    return TableNavigationComponent;
}());
export { TableNavigationComponent };
if (false) {
    /** @type {?} */
    TableNavigationComponent.prototype.totalPage;
    /** @type {?} */
    TableNavigationComponent.prototype.totalCount;
    /** @type {?} */
    TableNavigationComponent.prototype.pagingOptions;
    /** @type {?} */
    TableNavigationComponent.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9uYXZpZ2F0aW9uL3RhYmxlLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUQ7SUFXRTtRQUhBLGtCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUVwQyxXQUFNLEdBQWdDLElBQUksWUFBWSxFQUFpQixDQUFDO0lBQ3pELENBQUM7Ozs7SUFFaEIsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDN0UsQ0FBQzs7OztJQUVELDZDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdFLENBQUM7Ozs7SUFDRCxrREFBZTs7O0lBQWY7UUFDRSxJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBQztZQUNyQyxPQUFNO1NBQ1A7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBRyxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBRyxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsbURBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQUs7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN0QyxDQUFDOzs7OztJQUVELHVEQUFvQjs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN0QyxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHFxQkFBZ0Q7O2lCQUVqRDs7Ozs7NkJBR0UsS0FBSzt5QkFFTCxNQUFNOztJQWtDVCwrQkFBQztDQUFBLEFBM0NELElBMkNDO1NBdENZLHdCQUF3Qjs7O0lBQ25DLDZDQUFTOztJQUNULDhDQUE0Qjs7SUFDNUIsaURBQW9DOztJQUNwQywwQ0FDd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnaW5nU2V0dGluZyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc2V0dGluZ3MubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5nLXRhYmxlLW5hdmlnYXRpb25cIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYmxlLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdGFibGUtbmF2aWdhdGlvbi5jb21wb25lbnQuc2Fzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdG90YWxQYWdlXHJcbiAgQElucHV0KCkgdG90YWxDb3VudDogbnVtYmVyO1xyXG4gIHBhZ2luZ09wdGlvbnMgPSBuZXcgUGFnaW5nU2V0dGluZygpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPFBhZ2luZ1NldHRpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdpbmdTZXR0aW5nPigpO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRvdGFsUGFnZSA9IE1hdGguY2VpbCh0aGlzLnRvdGFsQ291bnQvdGhpcy5wYWdpbmdPcHRpb25zLnBhZ2VTaXplKSArIDFcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnRvdGFsUGFnZSA9IE1hdGguY2VpbCh0aGlzLnRvdGFsQ291bnQvdGhpcy5wYWdpbmdPcHRpb25zLnBhZ2VTaXplKSArIDFcclxuICB9XHJcbiAgb25QcmV2aW91c0NsaWNrKCkge1xyXG4gICAgaWYodGhpcy5wYWdpbmdPcHRpb25zLnBhZ2VOdW1iZXIgPT09IDEpe1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMucGFnaW5nT3B0aW9ucy5wYWdlTnVtYmVyIC09MVxyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnBhZ2luZ09wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgb25OZXh0Q2xpY2soKSB7XHJcbiAgICB0aGlzLnBhZ2luZ09wdGlvbnMucGFnZU51bWJlciArPTFcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5wYWdpbmdPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBhZ2VDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMucGFnaW5nT3B0aW9ucy5wYWdlTnVtYmVyID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB0aGlzLnBhZ2luZ09wdGlvbnMucGFnZUluZGV4ID0gZXZlbnQudGFyZ2V0LnZhbHVlIC0xXHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMucGFnaW5nT3B0aW9ucylcclxuICB9XHJcblxyXG4gIGhhbmRsZVBhZ2VTaXplQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnBhZ2luZ09wdGlvbnMucGFnZVNpemUgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5wYWdpbmdPcHRpb25zKVxyXG4gIH1cclxufVxyXG4iXX0=