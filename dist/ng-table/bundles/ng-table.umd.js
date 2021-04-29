(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/router'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-table', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', '@angular/platform-browser', '@angular/router', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-table'] = {}, global.ng.core, global.rxjs, global.ng.common.http, global.rxjs.operators, global.ng.platformBrowser, global.ng.router, global.ng.forms, global.ng.common));
}(this, (function (exports, core, rxjs, http, operators, platformBrowser, router, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-table.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgTableService = /** @class */ (function () {
        function NgTableService() {
        }
        NgTableService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgTableService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgTableService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgTableService_Factory() { return new NgTableService(); }, token: NgTableService, providedIn: "root" });
        return NgTableService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directive/table-directive.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableColumnTemplate = /** @class */ (function () {
        function TableColumnTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        TableColumnTemplate.decorators = [
            { type: core.Directive, args: [{ selector: '[tableColumn]' },] }
        ];
        /** @nocollapse */
        TableColumnTemplate.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        TableColumnTemplate.propDecorators = {
            for: [{ type: core.Input }]
        };
        return TableColumnTemplate;
    }());
    if (false) {
        /**
         * columnDef property
         * @type {?}
         */
        TableColumnTemplate.prototype.for;
        /** @type {?} */
        TableColumnTemplate.prototype.templateRef;
    }
    var TableActionButtonTemplate = /** @class */ (function () {
        function TableActionButtonTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        TableActionButtonTemplate.decorators = [
            { type: core.Directive, args: [{ selector: '[tableActionButton]' },] }
        ];
        /** @nocollapse */
        TableActionButtonTemplate.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return TableActionButtonTemplate;
    }());
    if (false) {
        /** @type {?} */
        TableActionButtonTemplate.prototype.templateRef;
    }
    var TableRowTotalTemplate = /** @class */ (function () {
        function TableRowTotalTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        TableRowTotalTemplate.decorators = [
            { type: core.Directive, args: [{ selector: '[tableRowTotal]' },] }
        ];
        /** @nocollapse */
        TableRowTotalTemplate.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return TableRowTotalTemplate;
    }());
    if (false) {
        /** @type {?} */
        TableRowTotalTemplate.prototype.templateRef;
    }
    var TableFooterTemplate = /** @class */ (function () {
        function TableFooterTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        TableFooterTemplate.decorators = [
            { type: core.Directive, args: [{ selector: '[tableFooter]' },] }
        ];
        /** @nocollapse */
        TableFooterTemplate.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return TableFooterTemplate;
    }());
    if (false) {
        /** @type {?} */
        TableFooterTemplate.prototype.templateRef;
    }
    var TableHeaderControlTemplate = /** @class */ (function () {
        function TableHeaderControlTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        TableHeaderControlTemplate.decorators = [
            { type: core.Directive, args: [{ selector: '[tableHeaderControl]' },] }
        ];
        /** @nocollapse */
        TableHeaderControlTemplate.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return TableHeaderControlTemplate;
    }());
    if (false) {
        /** @type {?} */
        TableHeaderControlTemplate.prototype.templateRef;
    }
    var TableHeaderTemplate = /** @class */ (function () {
        function TableHeaderTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        TableHeaderTemplate.decorators = [
            { type: core.Directive, args: [{ selector: '[tableHeader]' },] }
        ];
        /** @nocollapse */
        TableHeaderTemplate.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return TableHeaderTemplate;
    }());
    if (false) {
        /** @type {?} */
        TableHeaderTemplate.prototype.templateRef;
    }
    var TableRowExpandTemplate = /** @class */ (function () {
        function TableRowExpandTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        TableRowExpandTemplate.decorators = [
            { type: core.Directive, args: [{ selector: '[tableRowExpand]' },] }
        ];
        /** @nocollapse */
        TableRowExpandTemplate.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return TableRowExpandTemplate;
    }());
    if (false) {
        /** @type {?} */
        TableRowExpandTemplate.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/settings.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IBaseSetting() { }
    if (false) {
        /**
         * Css class apply to TD
         * @type {?|undefined}
         */
        IBaseSetting.prototype.css;
        /** @type {?|undefined} */
        IBaseSetting.prototype.align;
        /** @type {?|undefined} */
        IBaseSetting.prototype.width;
        /** @type {?|undefined} */
        IBaseSetting.prototype.height;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    TableSetting = /** @class */ (function () {
        function TableSetting(setting) {
            this.align = 'text-left';
            this.columns = [];
            this.pagination = true;
            this.sortable = true;
            /**
             * Message display when table is empty
             */
            this.showLoading = true;
            Object.assign(this, setting);
            this.actionButtons = new ActionButtonSetting(this.actionButtons);
            this.rows = new RowSetting(this.rows);
            for (var k in this.columns) {
                if (this.columns[k]) {
                    this.columns[k] = new ColumnSetting(this.columns[k]);
                }
            }
        }
        return TableSetting;
    }());
    if (false) {
        /** @type {?} */
        TableSetting.prototype.css;
        /** @type {?} */
        TableSetting.prototype.align;
        /** @type {?} */
        TableSetting.prototype.width;
        /** @type {?} */
        TableSetting.prototype.height;
        /** @type {?} */
        TableSetting.prototype.header;
        /** @type {?} */
        TableSetting.prototype.columns;
        /** @type {?} */
        TableSetting.prototype.rows;
        /** @type {?} */
        TableSetting.prototype.actionButtons;
        /** @type {?} */
        TableSetting.prototype.pagination;
        /** @type {?} */
        TableSetting.prototype.sortable;
        /**
         * Message display when table is empty
         * @type {?}
         */
        TableSetting.prototype.showLoading;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    ColumnSetting = /** @class */ (function () {
        function ColumnSetting(setting) {
            this.type = 'text';
            // public dateTimeFormat?: { input?: string; output: string; } = { input: 'YYYY-MM-DDTHH:mm:ss', output: 'ddd DD/MM/YYYY hh:mma' };
            this.dateTimeFormat = 'short';
            this.sortable = true;
            this.triggerExpandIcon = 'arrow';
            this.pinned = false;
            this.align = 'text-left';
            this.triggerCloseExpanded = true;
            this.colSpan = 1;
            this.rowSpan = 1;
            Object.assign(this, setting);
            if (this.pinned && !this.width) {
                this.width = '220px';
            }
        }
        return ColumnSetting;
    }());
    if (false) {
        /** @type {?} */
        ColumnSetting.prototype.columnDef;
        /** @type {?} */
        ColumnSetting.prototype.title;
        /** @type {?} */
        ColumnSetting.prototype.type;
        /** @type {?} */
        ColumnSetting.prototype.dateTimeFormat;
        /** @type {?} */
        ColumnSetting.prototype.numberFormat;
        /** @type {?} */
        ColumnSetting.prototype.sortable;
        /** @type {?} */
        ColumnSetting.prototype.triggerExpand;
        /** @type {?} */
        ColumnSetting.prototype.triggerExpandIcon;
        /** @type {?} */
        ColumnSetting.prototype.css;
        /** @type {?} */
        ColumnSetting.prototype.width;
        /** @type {?} */
        ColumnSetting.prototype.height;
        /** @type {?} */
        ColumnSetting.prototype.pinned;
        /** @type {?} */
        ColumnSetting.prototype.align;
        /** @type {?} */
        ColumnSetting.prototype.triggerExpandFunc;
        /** @type {?} */
        ColumnSetting.prototype.triggerCloseExpanded;
        /** @type {?} */
        ColumnSetting.prototype.triggerCloseExpandedFunc;
        /** @type {?} */
        ColumnSetting.prototype.colSpan;
        /** @type {?} */
        ColumnSetting.prototype.colSpanFunc;
        /** @type {?} */
        ColumnSetting.prototype.rowSpan;
        /** @type {?} */
        ColumnSetting.prototype.rowSpanFunc;
        /**
         * Return data that display in table
         * @type {?}
         */
        ColumnSetting.prototype.prop;
        /**
         * Func return sort field data
         * @type {?}
         */
        ColumnSetting.prototype.sortBy;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    RowSetting = /** @class */ (function () {
        function RowSetting(setting) {
            this.align = 'text-left';
            this.triggerExpand = false;
            this.triggerCloseExpanded = true;
            Object.assign(this, setting);
        }
        return RowSetting;
    }());
    if (false) {
        /** @type {?} */
        RowSetting.prototype.trCssFunc;
        /** @type {?} */
        RowSetting.prototype.css;
        /** @type {?} */
        RowSetting.prototype.width;
        /** @type {?} */
        RowSetting.prototype.height;
        /** @type {?} */
        RowSetting.prototype.align;
        /** @type {?} */
        RowSetting.prototype.triggerExpand;
        /** @type {?} */
        RowSetting.prototype.triggerExpandFunc;
        /** @type {?} */
        RowSetting.prototype.triggerCloseExpanded;
        /** @type {?} */
        RowSetting.prototype.triggerCloseExpandedFunc;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    ActionButtonSetting = /** @class */ (function () {
        function ActionButtonSetting(setting) {
            this.title = 'Actions';
            this.align = 'text-left';
            Object.assign(this, setting);
        }
        return ActionButtonSetting;
    }());
    if (false) {
        /** @type {?} */
        ActionButtonSetting.prototype.title;
        /** @type {?} */
        ActionButtonSetting.prototype.buttons;
        /** @type {?} */
        ActionButtonSetting.prototype.css;
        /** @type {?} */
        ActionButtonSetting.prototype.width;
        /** @type {?} */
        ActionButtonSetting.prototype.height;
        /** @type {?} */
        ActionButtonSetting.prototype.align;
    }
    /**
     * @record
     */
    function IHeaderSetting() { }
    if (false) {
        /** @type {?|undefined} */
        IHeaderSetting.prototype.title;
        /** @type {?|undefined} */
        IHeaderSetting.prototype.icon;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    ButtonSetting = /** @class */ (function () {
        function ButtonSetting(setting) {
            this.align = 'text-left';
            /**
             * Tooltip for disabled button when un-authorized
             */
            this.unAuthorizedMessage = 'You may ask your Manager to update the settings';
            Object.assign(this, setting);
        }
        return ButtonSetting;
    }());
    if (false) {
        /** @type {?} */
        ButtonSetting.prototype.tooltip;
        /** @type {?} */
        ButtonSetting.prototype.icon;
        /** @type {?} */
        ButtonSetting.prototype.actionLink;
        /** @type {?} */
        ButtonSetting.prototype.title;
        /** @type {?} */
        ButtonSetting.prototype.css;
        /** @type {?} */
        ButtonSetting.prototype.width;
        /** @type {?} */
        ButtonSetting.prototype.height;
        /** @type {?} */
        ButtonSetting.prototype.align;
        /**
         * Tooltip for disabled button when un-authorized
         * @type {?}
         */
        ButtonSetting.prototype.unAuthorizedMessage;
        /**
         * Action on click
         * @type {?}
         */
        ButtonSetting.prototype.action;
        /**
         * Action link array builder
         * @type {?}
         */
        ButtonSetting.prototype.actionLinkFunc;
        /**
         * Condition to disable button
         * @type {?}
         */
        ButtonSetting.prototype.disableOn;
    }
    /**
     * @record
     */
    function ITableState() { }
    if (false) {
        /** @type {?} */
        ITableState.prototype.sortState;
        /** @type {?} */
        ITableState.prototype.currentPage;
        /** @type {?} */
        ITableState.prototype.pageLength;
    }
    var PagingSetting = /** @class */ (function () {
        function PagingSetting() {
            this.pageIndex = 0;
            this.pageNumber = 1;
            this.pageSize = 10;
        }
        return PagingSetting;
    }());
    if (false) {
        /** @type {?} */
        PagingSetting.prototype.pageIndex;
        /** @type {?} */
        PagingSetting.prototype.pageNumber;
        /** @type {?} */
        PagingSetting.prototype.pageSize;
        /** @type {?} */
        PagingSetting.prototype.totalCount;
        /** @type {?} */
        PagingSetting.prototype.sortState;
    }
    var TableProps = /** @class */ (function () {
        function TableProps() {
        }
        return TableProps;
    }());
    if (false) {
        /** @type {?} */
        TableProps.prototype.isHaveHeader;
        /** @type {?} */
        TableProps.prototype.sortable;
        /** @type {?} */
        TableProps.prototype.isHaveActionButtons;
        /** @type {?} */
        TableProps.prototype.tableColSpan;
        /** @type {?} */
        TableProps.prototype.haveRowTotal;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/sort-order.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var SortOrder = {
        Desc: -1,
        Asc: 1,
        None: 0,
    };
    SortOrder[SortOrder.Desc] = 'Desc';
    SortOrder[SortOrder.Asc] = 'Asc';
    SortOrder[SortOrder.None] = 'None';
    var SortState = /** @class */ (function () {
        function SortState() {
        }
        return SortState;
    }());
    if (false) {
        /** @type {?} */
        SortState.prototype.index;
        /** @type {?} */
        SortState.prototype.order;
        /** @type {?} */
        SortState.prototype.columnDef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgTableComponent = /** @class */ (function () {
        function NgTableComponent(_appRef, _httpClient, _cdr) {
            this._appRef = _appRef;
            this._httpClient = _httpClient;
            this._cdr = _cdr;
            this.colTemplates = {};
            this.columnTriggerExpand$ = new rxjs.Subject;
            this.dataPropName = "data";
            this.method = "get";
            this.pagingOptionChange = new core.EventEmitter();
            this.sortStateChange = new core.EventEmitter();
            this.pagingOptions = new PagingSetting();
            this.props = new TableProps();
            this.filterModel = {};
            this.sortState = new SortState();
            this._unsubscribe$ = new rxjs.Subject();
        }
        Object.defineProperty(NgTableComponent.prototype, "setColumnTemplates", {
            set: /**
             * @param {?} columnTemplates
             * @return {?}
             */
            function (columnTemplates) {
                var _this = this;
                if (!columnTemplates || columnTemplates.length === 0) {
                    this.colTemplates = {};
                    return;
                }
                columnTemplates.forEach((/**
                 * @param {?} temp
                 * @return {?}
                 */
                function (temp) {
                    _this.colTemplates[temp.for] = temp;
                }));
            },
            enumerable: true,
            configurable: true
        });
        ;
        /**
         * @return {?}
         */
        NgTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.initSettings();
            this.registerObserver();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.dataSource && changes.dataSource.currentValue) {
                this._cdr.detectChanges();
            }
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.registerObserver = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.filterModel$) {
                this.filterModel$.pipe(operators.takeUntil(this._unsubscribe$)).subscribe((/**
                 * @param {?} filter
                 * @return {?}
                 */
                function (filter) {
                    _this.filterModel = filter;
                    _this.shouldFetchData() && _this.fetchData();
                }));
            }
            if (this.sortState$) {
                this.sortState$.pipe(operators.takeUntil(this._unsubscribe$)).subscribe((/**
                 * @param {?} sortState
                 * @return {?}
                 */
                function (sortState) {
                    _this.sortState = sortState;
                    _this.shouldFetchData() && _this.fetchData();
                }));
            }
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.shouldFetchData = /**
         * @return {?}
         */
        function () {
            return this.url;
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.fetchData = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var model = __assign({}, this.filterModel, this.pagingOptions, this.sortState);
            this.isLoading = true;
            this._httpClient.get(this.url, { params: model }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.dataSource = res[_this.dataPropName];
                _this.isLoading = false;
            }));
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.initSettings = /**
         * @return {?}
         */
        function () {
            this.settings = new TableSetting(this.settings);
            this.initInternalProps();
            this.validateInitConfiguration();
            console.log(this.dataSource);
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.initInternalProps = /**
         * @return {?}
         */
        function () {
            this.props.isHaveHeader = this.settings && this.settings.header;
            this.props.sortable = this.settings && this.settings.sortable;
            this.props.isHaveActionButtons = this.settings && this.settings.actionButtons && this.settings.actionButtons.buttons && this.settings.actionButtons.buttons.length > 0;
            this.props.tableColSpan = this.settings.columns.length + 1;
            this.props.haveRowTotal = this.rowTotalTemplate ? true : false;
            // console.table(this.props)
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.validateInitConfiguration = /**
         * @return {?}
         */
        function () {
            if (this.filterModel$ && this.dataSource) {
                console.warn("Consider to remove filterModel (un-usage) while using dataSource");
            }
            if (this.sortState && this.dataSource) {
                console.warn("Consider to remove sortState (un-usage) while using dataSource");
            }
        };
        /**
         * @param {?} sortState
         * @return {?}
         */
        NgTableComponent.prototype.handleOrderStateChange = /**
         * @param {?} sortState
         * @return {?}
         */
        function (sortState) {
            // this.resetPagingOption()
            this.sortState = sortState;
            this.sortStateChange.emit(sortState);
            this.shouldFetchData() && this.fetchData();
        };
        /**
         * @param {?} pagingOptions
         * @return {?}
         */
        NgTableComponent.prototype.onPagingOptionChange = /**
         * @param {?} pagingOptions
         * @return {?}
         */
        function (pagingOptions) {
            this.pagingOptions = pagingOptions;
            this.pagingOptionChange.emit(pagingOptions);
            this.shouldFetchData() && this.fetchData();
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.resetOrderState = /**
         * @return {?}
         */
        function () {
            this.sortState = new SortState();
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.resetPagingOption = /**
         * @return {?}
         */
        function () {
            this.pagingOptions = new PagingSetting();
        };
        /**
         * @param {?} eleObj
         * @return {?}
         */
        NgTableComponent.prototype.handleColumnTriggerExpand = /**
         * @param {?} eleObj
         * @return {?}
         */
        function (eleObj) {
            this.columnTriggerExpand$.next(eleObj);
        };
        /**
         * @return {?}
         */
        NgTableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        NgTableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ng-table",
                        template: "<!-- <ng-table-column [settings]=\"settings\"></ng-table-column> -->\r\n\r\n<div class=\"ng-table-container\">\r\n    <div *ngIf=\"isLoading\" class=\"table-loading\">\r\n        <div class=\"loading-spinner\">\r\n            <i>Refresh icon go here</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-container\" [ngClass]=\"{'loading': isLoading}\">\r\n        <!-- injected template  -->\r\n        <ng-table-header *ngIf=\"props.isHaveHeader\" [headerControlTemplate]=\"headerControlTemplate\" [headerTemplate]=\"headerTemplate\" [settings]=\"settings\"></ng-table-header>\r\n        <ng-table-column (onTriggerExpand)=\"handleColumnTriggerExpand($event)\" #tbColumn></ng-table-column>\r\n        <!-- table header -->\r\n        <ng-action-button [actionButtonSettings]=\"settings.actionButtons\" #tbActionButtons [actBtnTemplate]=\"actBtnTemplate\"></ng-action-button>\r\n        <ng-table-content \r\n            [columnTriggerExpand$] = \"columnTriggerExpand$\"\r\n            [settings]=\"settings\" [sortState]=\"sortState\" [props]=\"props\" [dataSource]=\"dataSource\" [colTemplates]=\"colTemplates\"\r\n            [tbColumn]=\"tbColumn\" [tbActions]=\"tbActionButtons\" [rowTotalTemplate]=\"rowTotalTemplate\" [isLoading]=\"isLoading\"\r\n            (changeOrderState)=\"handleOrderStateChange($event)\" [rowExpandTemplate]=\"rowExpandTemplate\"\r\n            > \r\n        </ng-table-content>\r\n        <!-- table footeer -->\r\n        <div class=\"table-footer\" *ngIf=\"footerTemplate && footerTemplate.templateRef\">\r\n            <ng-container *ngTemplateOutlet=\"footerTemplate.templateRef\"></ng-container>\r\n        </div>\r\n        <ng-table-navigation *ngIf=\"settings.pagination\" [totalCount]=\"totalCount\" (change)=\"onPagingOptionChange($event)\"></ng-table-navigation>\r\n    </div>\r\n\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
                        styles: [":host ::ng-deep .flex{display:flex!important}:host ::ng-deep .flex-fill{flex:1 1 auto!important}:host ::ng-deep table{text-align:left;border-radius:2px 2px 0 0;border-collapse:separate;border-spacing:0;width:100%}:host ::ng-deep table td,:host ::ng-deep table th{padding:16px;text-shadow:1px 1px 1px #fff;white-space:nowrap;border-collapse:separate;position:relative;overflow-wrap:break-word;border-bottom:1px solid #f0f0f0}:host ::ng-deep .text-right{text-align:right}:host ::ng-deep .text-center{text-align:center}:host ::ng-deep .text-left{text-align:left}:host ::ng-deep .disabled{color:#fff;background-color:grey}.ng-table-container{position:relative}.ng-table-container .table-loading{position:absolute;background:grey;z-index:1;top:50%;left:50%}.ng-table-container .main-container.loading{opacity:.7}"]
                    }] }
        ];
        /** @nocollapse */
        NgTableComponent.ctorParameters = function () { return [
            { type: core.ApplicationRef },
            { type: http.HttpClient },
            { type: core.ChangeDetectorRef }
        ]; };
        NgTableComponent.propDecorators = {
            actBtnTemplate: [{ type: core.ContentChild, args: [TableActionButtonTemplate, { static: false },] }],
            headerControlTemplate: [{ type: core.ContentChild, args: [TableHeaderControlTemplate, { static: true },] }],
            headerTemplate: [{ type: core.ContentChild, args: [TableHeaderTemplate, { static: true },] }],
            footerTemplate: [{ type: core.ContentChild, args: [TableFooterTemplate, { static: false },] }],
            rowTotalTemplate: [{ type: core.ContentChild, args: [TableRowTotalTemplate, { static: false },] }],
            rowExpandTemplate: [{ type: core.ContentChild, args: [TableRowExpandTemplate, { static: false },] }],
            setColumnTemplates: [{ type: core.ContentChildren, args: [TableColumnTemplate,] }],
            tbodyElement: [{ type: core.ViewChild, args: ["tbodyElement", { static: true },] }],
            settings: [{ type: core.Input }],
            totalCount: [{ type: core.Input }],
            dataSource: [{ type: core.Input }],
            url: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            filterModel$: [{ type: core.Input }],
            dataPropName: [{ type: core.Input }],
            method: [{ type: core.Input }],
            sortState$: [{ type: core.Input }],
            pagingOptionChange: [{ type: core.Output }],
            sortStateChange: [{ type: core.Output }]
        };
        return NgTableComponent;
    }());
    if (false) {
        /** @type {?} */
        NgTableComponent.prototype.actBtnTemplate;
        /** @type {?} */
        NgTableComponent.prototype.headerControlTemplate;
        /** @type {?} */
        NgTableComponent.prototype.headerTemplate;
        /** @type {?} */
        NgTableComponent.prototype.footerTemplate;
        /** @type {?} */
        NgTableComponent.prototype.rowTotalTemplate;
        /** @type {?} */
        NgTableComponent.prototype.rowExpandTemplate;
        /** @type {?} */
        NgTableComponent.prototype.colTemplates;
        /** @type {?} */
        NgTableComponent.prototype.columnTriggerExpand$;
        /** @type {?} */
        NgTableComponent.prototype.tbodyElement;
        /** @type {?} */
        NgTableComponent.prototype.settings;
        /** @type {?} */
        NgTableComponent.prototype.totalCount;
        /** @type {?} */
        NgTableComponent.prototype.dataSource;
        /** @type {?} */
        NgTableComponent.prototype.url;
        /** @type {?} */
        NgTableComponent.prototype.isLoading;
        /** @type {?} */
        NgTableComponent.prototype.filterModel$;
        /** @type {?} */
        NgTableComponent.prototype.dataPropName;
        /** @type {?} */
        NgTableComponent.prototype.method;
        /** @type {?} */
        NgTableComponent.prototype.sortState$;
        /** @type {?} */
        NgTableComponent.prototype.pagingOptionChange;
        /** @type {?} */
        NgTableComponent.prototype.sortStateChange;
        /** @type {?} */
        NgTableComponent.prototype.pagingOptions;
        /** @type {?} */
        NgTableComponent.prototype.props;
        /** @type {?} */
        NgTableComponent.prototype.filterModel;
        /** @type {?} */
        NgTableComponent.prototype.sortState;
        /**
         * @type {?}
         * @private
         */
        NgTableComponent.prototype._unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        NgTableComponent.prototype._appRef;
        /**
         * @type {?}
         * @private
         */
        NgTableComponent.prototype._httpClient;
        /**
         * @type {?}
         * @private
         */
        NgTableComponent.prototype._cdr;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/action-button/action-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActionButtonComponent = /** @class */ (function () {
        function ActionButtonComponent() {
        }
        /**
         * @return {?}
         */
        ActionButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} btnSetting
         * @param {?} rowData
         * @return {?}
         */
        ActionButtonComponent.prototype.actionBtnOnClick = /**
         * @param {?} btnSetting
         * @param {?} rowData
         * @return {?}
         */
        function (btnSetting, rowData) {
            if (btnSetting.disableOn && btnSetting.disableOn(rowData)) {
                return;
            }
            if (!btnSetting.actionLink && btnSetting.action) {
                btnSetting.action(rowData);
            }
        };
        ActionButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-action-button',
                        template: "<ng-template #_actionButtonTemplate=\"\" let-buttons=\"buttons\" let-rowData=\"\">\r\n  <ng-container\r\n    *ngTemplateOutlet=\"\r\n      actBtnTemplate\r\n        ? actBtnTemplate.templateRef\r\n        : _defaultActionButtonTemplate;\r\n      context: {\r\n        $implicit: rowData,\r\n        buttons: buttons\r\n      }\r\n    \"\r\n  ></ng-container>\r\n</ng-template>\r\n<ng-template\r\n  #_defaultActionButtonTemplate=\"\"\r\n  let-buttons=\"buttons\"\r\n  let-rowData=\"\"\r\n>\r\n  <td class=\"{{ actionButtonSettings.align }} {{ actionButtonSettings.css }}\">\r\n    <div class=\"btn-group\">\r\n      <ng-container *ngFor=\"let button of buttons\">\r\n        <a\r\n          [ngClass]=\"button.disableOn && button.disableOn(rowData) ? 'disabled' : ''\"\r\n          class=\"btn btn-icon {{ button.align }} {{ button.css }}\"\r\n          [routerLink]=\"button.actionLinkFunc ? button.actionLinkFunc(rowData) : button.actionLink ? button.actionLink : null\"\r\n          (click)=\"!button.actionLink && button.action && button.action(rowData)\"\r\n          ><span class=\"{{ button.icon }}\">{{ button.title }}</span></a\r\n        ></ng-container\r\n      >\r\n    </div>\r\n  </td>\r\n</ng-template>\r\n",
                        styles: [".btn-group{display:flex;justify-content:space-between}"]
                    }] }
        ];
        /** @nocollapse */
        ActionButtonComponent.ctorParameters = function () { return []; };
        ActionButtonComponent.propDecorators = {
            actBtnTemplate: [{ type: core.Input }],
            actionButtonSettings: [{ type: core.Input }],
            actionButtonTemplate: [{ type: core.ViewChild, args: ['_actionButtonTemplate', { static: true },] }]
        };
        return ActionButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        ActionButtonComponent.prototype.actBtnTemplate;
        /** @type {?} */
        ActionButtonComponent.prototype.actionButtonSettings;
        /** @type {?} */
        ActionButtonComponent.prototype.actionButtonTemplate;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/table-header/table-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableHeaderComponent = /** @class */ (function () {
        function TableHeaderComponent() {
        }
        /**
         * @return {?}
         */
        TableHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            console.log(this.headerControlTemplate);
        };
        /**
         * @return {?}
         */
        TableHeaderComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            console.log(this.headerControlTemplate);
        };
        TableHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-table-header',
                        template: "<ng-template #_headerTemplate>\r\n  <h3>\r\n    <ng-container\r\n      *ngTemplateOutlet=\"\r\n        headerTemplate ? headerTemplate.templateRef : _defaultHeaderTemplate;\r\n      \"\r\n    >\r\n    </ng-container>\r\n  </h3>\r\n</ng-template>\r\n\r\n<ng-template #_headerControlTemplate>\r\n  <div class=\"group-control\" *ngIf=\"headerControlTemplate\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"headerControlTemplate.templateRef\"\r\n    ></ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #_defaultHeaderTemplate>\r\n  <span>header icon</span>\r\n  <span>title</span>\r\n</ng-template>\r\n\r\n<ng-container>\r\n  <div class=\"table-header\">\r\n    <ng-container *ngTemplateOutlet=\"_headerTemplate\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"_headerControlTemplate\"></ng-container>\r\n  </div>\r\n</ng-container>\r\n",
                        styles: [":host ::ng-deep .table-header{margin-bottom:16px;display:flex;align-items:center;justify-content:space-between}:host ::ng-deep .table-header .group-control{display:flex;align-items:center}:host ::ng-deep .table-header .group-control>:not(:last-child){margin-right:8px}:host ::ng-deep .table-header .group-control button{padding:8px 12px}"]
                    }] }
        ];
        /** @nocollapse */
        TableHeaderComponent.ctorParameters = function () { return []; };
        TableHeaderComponent.propDecorators = {
            headerControlTemplate: [{ type: core.Input }],
            headerTemplate: [{ type: core.Input }],
            settings: [{ type: core.Input }]
        };
        return TableHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        TableHeaderComponent.prototype.headerControlTemplate;
        /** @type {?} */
        TableHeaderComponent.prototype.headerTemplate;
        /** @type {?} */
        TableHeaderComponent.prototype.settings;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/column/table-column.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableColumnComponent = /** @class */ (function () {
        function TableColumnComponent() {
            this.onTriggerExpand = new core.EventEmitter();
        }
        /**
         * @param {?} tdElement
         * @param {?} rowData
         * @return {?}
         */
        TableColumnComponent.prototype.triggerExpand = /**
         * @param {?} tdElement
         * @param {?} rowData
         * @return {?}
         */
        function (tdElement, rowData) {
            this.onTriggerExpand.emit({ tRowEl: this._getTRowElement(tdElement), rowData: rowData });
        };
        /**
         * @private
         * @param {?} tdElement
         * @return {?}
         */
        TableColumnComponent.prototype._getTRowElement = /**
         * @private
         * @param {?} tdElement
         * @return {?}
         */
        function (tdElement) {
            return tdElement.parentElement;
        };
        TableColumnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-table-column',
                        template: "<ng-template\r\n  #_columnTemplate\r\n  let-colData=\"\"\r\n  let-rowData=\"rowData\"\r\n  let-colSetting=\"colSetting\"\r\n  let-colTemplate=\"colTemplate\"\r\n  let-isPinned=\"isPinned\"\r\n>\r\n  <ng-container #tRow\r\n    *ngTemplateOutlet=\"\r\n      colTemplate ? _customColumnTemplate : _defaultColumnTemplate;\r\n      context: {\r\n        $implicit: colData,\r\n        rowData: rowData,\r\n        colSetting: colSetting,\r\n        colTemplate: colTemplate,\r\n        isPinned: isPinned\r\n      }\r\n    \"\r\n  ></ng-container>\r\n</ng-template>\r\n<ng-template\r\n  #_customColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n  let-colTemplate=\"colTemplate\"\r\n  let-isPinned=\"isPinned\"\r\n>\r\n  <td #td\r\n  \r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': isPinned}\"\r\n    class=\"{{ colSetting.css }}\">\r\n    <i class=\"expand-control mdi mdi-menu-right text-big\"></i>\r\n    <div class=\"{{ colSetting.align }}\">\r\n     <!-- hello {{colSetting.marginLeft}} -->\r\n      <ng-container\r\n        *ngTemplateOutlet=\"\r\n          colTemplate.templateRef;\r\n          context: {\r\n            $implicit: colData,\r\n            rowData: rowData,\r\n            colSetting: colSetting,\r\n            col: this,\r\n            triggerExpand: this.triggerExpand.bind(this,td, rowData)\r\n          }\r\n        \"\r\n      ></ng-container>\r\n    </div>\r\n  </td>\r\n</ng-template>\r\n<ng-template\r\n  #_defaultColumnTemplate\r\n  let-colData=\"\"\r\n  let-colSetting=\"colSetting\"\r\n  let-rowData=\"rowData\"\r\n  let-isPinned=\"isPinned\"\r\n>\r\n  <ng-container [ngSwitch]=\"colSetting.type\">\r\n    <!-- {{(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData))}} -->\r\n    <!-- {{colSetting.colSpan}} -->\r\n    <td class=\"{{ colSetting.css }}\"\r\n    [attr.width]=\"colSetting.width\"\r\n    [style.left.px]=\"colSetting.left\"\r\n    [ngClass]=\"{'pinned-column': isPinned}\"\r\n    [attr.colSpan] =\"(colSetting.colSpanFunc && colSetting.colSpanFunc(rowData)) || colSetting.colSpan\"\r\n    [attr.rowSpan] =\"(colSetting.rowSpanFunc && colSetting.rowSpanFunc(rowData)) || colSetting.rowSpan\" >\r\n      <div class=\"d-flex\">\r\n        <div class=\"flex-fill {{ colSetting.align }}\">\r\n          <i\r\n            class=\"expand-control flex-fill fa fa-plus\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'plus-minus'\"\r\n          ></i\r\n          ><i\r\n            class=\"expand-control flex-fill mdi mdi-menu-down text-big\"\r\n            *ngIf=\"(colSetting.triggerExpandFunc && colSetting.triggerExpandFunc(rowData)) || colSetting.triggerExpand && colSetting.triggerExpandIcon == 'arrow'\"\r\n          ></i>\r\n          <ng-template [ngSwitchCase]=\"'datetime'\">\r\n            <div class=\"text-xs text-muted {{ colSetting.align }}\">\r\n              {{ colData | date: colSetting.dateTimeFormat }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'number'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData | number }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngSwitchCase]=\"'numberFormat'\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngSwitchDefault=\"ngSwitchDefault\">\r\n            <div class=\"{{ colSetting.align }}\" [ngClass]=\"colSetting.css\">\r\n              {{ colData }}\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n</ng-template>\r\n",
                        styles: [".pinned-column{position:absolute;overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        TableColumnComponent.ctorParameters = function () { return []; };
        TableColumnComponent.propDecorators = {
            _columnTemplate: [{ type: core.ViewChild, args: ["_columnTemplate", { static: true },] }],
            rowExpandTemplate: [{ type: core.Input }],
            onTriggerExpand: [{ type: core.Output }]
        };
        return TableColumnComponent;
    }());
    if (false) {
        /** @type {?} */
        TableColumnComponent.prototype._columnTemplate;
        /** @type {?} */
        TableColumnComponent.prototype.rowExpandTemplate;
        /** @type {?} */
        TableColumnComponent.prototype.onTriggerExpand;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/table-content/table-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableContentComponent = /** @class */ (function () {
        function TableContentComponent(_appRef) {
            this._appRef = _appRef;
            this.changeOrderState = new core.EventEmitter();
            this._viewRefs = [];
            this.sortOrder = SortOrder;
            this._unsubscribe$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        TableContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.registerEvent();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        TableContentComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.dataSource && changes.dataSource.currentValue) {
                this.clearExpandedRow();
            }
            if (changes.settings && changes.settings.currentValue) {
                this.initPinnedColumnsSetting();
            }
        };
        /**
         * @return {?}
         */
        TableContentComponent.prototype.initPinnedColumnsSetting = /**
         * @return {?}
         */
        function () {
            this.pinnedColumns = this.settings.columns.filter((/**
             * @param {?} m
             * @return {?}
             */
            function (m) { return m.pinned; }));
            this.normalColumns = this.settings.columns.filter((/**
             * @param {?} m
             * @return {?}
             */
            function (m) { return !m.pinned; }));
            this.pinnedColumnsWidth = this.pinnedColumns.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return pre + parseInt(cur.width); }), 0);
            /** @type {?} */
            var left = 0;
            this.pinnedColumns.forEach((/**
             * @param {?} m
             * @param {?} index
             * @return {?}
             */
            function (m, index) {
                m.left = left;
                left += parseInt(m.width);
                // if(index !== 0){
                //   m.left = left
                // } else {
                //   m.left = 0
                // }
            }));
            this.tableWidth = "calc(100% - " + this.pinnedColumnsWidth + "px)";
            console.table(this.pinnedColumnsWidth);
        };
        /**
         * @return {?}
         */
        TableContentComponent.prototype.clearExpandedRow = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.rowExpandTemplate && this.tbodyElement && this.tbodyElement.nativeElement) {
                if (this._viewRefs) {
                    this._viewRefs.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this._appRef.detachView(item); }));
                }
                /** @type {?} */
                var expandedRows = this.tbodyElement.nativeElement.querySelectorAll('row-expanded');
                if (expandedRows) {
                    expandedRows.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this.tbodyElement.nativeElement.removeChild(item); }));
                }
            }
        };
        /**
         * @return {?}
         */
        TableContentComponent.prototype.registerEvent = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.columnTriggerExpand$.pipe(operators.takeUntil(this._unsubscribe$))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var rowData = _a.rowData, tRowEl = _a.tRowEl;
                _this.tableRowClickHandler(rowData, tRowEl, true);
            }));
        };
        /**
         * @param {?} colIndex
         * @param {?} e
         * @return {?}
         */
        TableContentComponent.prototype.sort = /**
         * @param {?} colIndex
         * @param {?} e
         * @return {?}
         */
        function (colIndex, e) {
            if (((/** @type {?} */ (e.currentTarget))).classList.contains('sortable')) {
                this.sortState.index = colIndex;
                /** @type {?} */
                var currentSortColumn = this.sortState.columnDef;
                // update direction
                if (currentSortColumn === this.settings.columns[colIndex].columnDef) {
                    this.sortState.order = this.sortState.order === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;
                }
                // update sort column name
                else {
                    this.sortState.columnDef = this.settings.columns[colIndex].columnDef;
                    this.sortState.order = this.sortOrder.Asc;
                }
                this.changeOrderState.emit(this.sortState);
            }
        };
        /**
         * @param {?} rowData
         * @param {?} rowEl
         * @param {?} ignoreSettings
         * @return {?}
         */
        TableContentComponent.prototype.tableRowClickHandler = /**
         * @param {?} rowData
         * @param {?} rowEl
         * @param {?} ignoreSettings
         * @return {?}
         */
        function (rowData, rowEl, ignoreSettings) {
            if (!ignoreSettings) {
                if (!this.settings.rows.triggerExpand && !this.settings.rows.triggerExpandFunc)
                    return;
            }
            /** @type {?} */
            var rowEmbeddedView = this.rowExpandTemplate.templateRef.createEmbeddedView({ rowData: rowData });
            this._appRef.attachView(rowEmbeddedView);
            this._viewRefs.push(rowEmbeddedView);
            /** @type {?} */
            var templateEl = (/** @type {?} */ (rowEmbeddedView.rootNodes[0]));
            if (templateEl.tagName !== 'TR') {
                console.error('Please use <tr> as root element for RowExpandTemplate');
            }
            else {
                templateEl.setAttribute("row-expanded", '');
                this.handleCollapseRow(rowEl, templateEl);
            }
            // event.stopPropagation()
        };
        /**
         * @param {?} tRow
         * @param {?} templateEl
         * @return {?}
         */
        TableContentComponent.prototype.handleCollapseRow = /**
         * @param {?} tRow
         * @param {?} templateEl
         * @return {?}
         */
        function (tRow, templateEl) {
            var _a = this.settings.rows, triggerCloseExpanded = _a.triggerCloseExpanded, triggerCloseExpandedFunc = _a.triggerCloseExpandedFunc;
            if (tRow.nextElementSibling && tRow.nextElementSibling.attributes.getNamedItem('row-expanded')) {
                if (triggerCloseExpanded || triggerCloseExpandedFunc) {
                    tRow.nextElementSibling.remove();
                }
            }
            else {
                tRow.insertAdjacentElement('afterend', templateEl);
            }
        };
        /**
         * @return {?}
         */
        TableContentComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        };
        TableContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-table-content',
                        template: "<div class=\"table-wrapper\">\r\n  <div\r\n    class=\"table-responsive\"\r\n    [style.width]=\"tableWidth\"\r\n    [style.marginLeft.px]=\"pinnedColumnsWidth\"\r\n  >\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <ng-container *ngFor=\"let column of pinnedColumns; let i = index\">\r\n            <th\r\n              class=\"{{ column.align }} {{ column.css }} pinned-column\"\r\n              [attr.width]=\"column.width\"\r\n              [style.left.px]=\"column.left\"\r\n              (click)=\"sort(i, $event)\"\r\n              [ngClass]=\"{\r\n                sortable:\r\n                  column.sortable || (settings.sortable && column.sortable)\r\n              }\"\r\n            >\r\n              <div class=\"flex\">\r\n                <span class=\"flex-fill\">{{ column.title }}</span>\r\n                <span\r\n                  *ngIf=\"sortState && sortState.index === i\"\r\n                  class=\"sort-icon\"\r\n                  >{{ sortState.order }}</span\r\n                >\r\n              </div>\r\n            </th>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let column of normalColumns; let i = index\">\r\n            <th\r\n              class=\"{{ column.align }} {{ column.css }}\"\r\n              [attr.width]=\"column.width\"\r\n              (click)=\"sort(i, $event)\"\r\n              [ngClass]=\"{\r\n                sortable:\r\n                  column.sortable || (settings.sortable && column.sortable)\r\n              }\"\r\n            >\r\n              <div class=\"flex\">\r\n                <span class=\"flex-fill\">{{ column.title }}</span>\r\n                <span\r\n                  *ngIf=\"sortState && sortState.index === i\"\r\n                  class=\"sort-icon\"\r\n                  >{{ sortState.order }}</span\r\n                >\r\n              </div>\r\n            </th>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"props.isHaveActionButtons\">\r\n            <th>{{ settings.actionButtons.title || \"Actions\" }}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody #tbodyEl>\r\n        <ng-container *ngIf=\"!dataSource && settings.showLoading && !isLoading\">\r\n          <tr>\r\n            <td class={{settings.align}} [attr.colspan]=\"props.tableColSpan\">\r\n              No data available\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"dataSource && dataSource.length > 0\">\r\n          <ng-container *ngFor=\"let item of dataSource; let i = index\">\r\n            <tr\r\n              (click)=\"tableRowClickHandler(item, tr, false)\"\r\n              #tr\r\n              class=\"{{\r\n                settings.rows &&\r\n                  settings.rows.trCssFunc &&\r\n                  settings.rows.trCssFunc(item)\r\n              }}\"\r\n            >\r\n              <!-- column content -->\r\n              <ng-container *ngFor=\"let col of pinnedColumns\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbColumn._columnTemplate;\r\n                    context: {\r\n                      $implicit: col.prop ? col.prop(item) : null,\r\n                      rowData: item,\r\n                      colSetting: col,\r\n                      colTemplate: colTemplates[col.columnDef],\r\n                      isPinned: true\r\n                    }\r\n                  \"\r\n                  >\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-container *ngFor=\"let col of normalColumns\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbColumn._columnTemplate;\r\n                    context: {\r\n                      $implicit: col.prop ? col.prop(item) : null,\r\n                      rowData: item,\r\n                      colSetting: col,\r\n                      colTemplate: colTemplates[col.columnDef],\r\n                      isPinned: false\r\n                    }\r\n                  \"\r\n                >\r\n                </ng-container>\r\n              </ng-container>\r\n              <!-- action buttons -->\r\n              <ng-container *ngIf=\"props.isHaveActionButtons\">\r\n                <ng-container\r\n                  *ngTemplateOutlet=\"\r\n                    tbActions.actionButtonTemplate;\r\n                    context: {\r\n                      $implicit: item,\r\n                      buttons: settings.actionButtons.buttons\r\n                    }\r\n                  \"\r\n                >\r\n                </ng-container>\r\n              </ng-container>\r\n            </tr>\r\n            <!-- row total -->\r\n            <tr *ngIf=\"props.haveRowTotal\">\r\n              <ng-container *ngTemplateOutlet=\"rowTotalTemplate.templateRef\">\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n      </tbody>\r\n\r\n      <!-- table footer -->\r\n    </table>\r\n  </div>\r\n</div>\r\n",
                        styles: [".table-wrapper{position:relative;margin-bottom:10px}.table-wrapper .table-responsive{overflow-x:auto;width:100%;display:block;white-space:nowrap;border-collapse:collapse}.table-wrapper .table-responsive .table{border:none;border-spacing:0}.table-wrapper .table-responsive .table td{background:red}.table-wrapper .table-responsive .table th{color:rgba(0,0,0,.85);font-weight:500;text-align:left;background:#fafafa;border-bottom:1px solid #f0f0f0;transition:background .3s;position:relative;padding:16px;overflow-wrap:break-word}.table-wrapper .table-responsive .pinned-column{position:absolute!important}"]
                    }] }
        ];
        /** @nocollapse */
        TableContentComponent.ctorParameters = function () { return [
            { type: core.ApplicationRef }
        ]; };
        TableContentComponent.propDecorators = {
            rowTotalTemplate: [{ type: core.Input }],
            rowExpandTemplate: [{ type: core.Input }],
            settings: [{ type: core.Input }],
            sortState: [{ type: core.Input }],
            props: [{ type: core.Input }],
            dataSource: [{ type: core.Input }],
            tbColumn: [{ type: core.Input }],
            tbActions: [{ type: core.Input }],
            colTemplates: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            columnTriggerExpand$: [{ type: core.Input }],
            changeOrderState: [{ type: core.Output }],
            tbodyElement: [{ type: core.ViewChild, args: ['tbodyEl', { static: true },] }]
        };
        return TableContentComponent;
    }());
    if (false) {
        /** @type {?} */
        TableContentComponent.prototype.rowTotalTemplate;
        /** @type {?} */
        TableContentComponent.prototype.rowExpandTemplate;
        /** @type {?} */
        TableContentComponent.prototype.settings;
        /** @type {?} */
        TableContentComponent.prototype.sortState;
        /** @type {?} */
        TableContentComponent.prototype.props;
        /** @type {?} */
        TableContentComponent.prototype.dataSource;
        /** @type {?} */
        TableContentComponent.prototype.tbColumn;
        /** @type {?} */
        TableContentComponent.prototype.tbActions;
        /** @type {?} */
        TableContentComponent.prototype.colTemplates;
        /** @type {?} */
        TableContentComponent.prototype.isLoading;
        /** @type {?} */
        TableContentComponent.prototype.columnTriggerExpand$;
        /** @type {?} */
        TableContentComponent.prototype.changeOrderState;
        /** @type {?} */
        TableContentComponent.prototype.tbodyElement;
        /** @type {?} */
        TableContentComponent.prototype._viewRefs;
        /** @type {?} */
        TableContentComponent.prototype.sortOrder;
        /**
         * @type {?}
         * @private
         */
        TableContentComponent.prototype._unsubscribe$;
        /** @type {?} */
        TableContentComponent.prototype.pinnedColumns;
        /** @type {?} */
        TableContentComponent.prototype.tableWidth;
        /** @type {?} */
        TableContentComponent.prototype.normalColumns;
        /** @type {?} */
        TableContentComponent.prototype.pinnedColumnsWidth;
        /**
         * @type {?}
         * @private
         */
        TableContentComponent.prototype._appRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/navigation/table-navigation.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableNavigationComponent = /** @class */ (function () {
        function TableNavigationComponent() {
            this.pagingOptions = new PagingSetting();
            this.change = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: "ng-table-navigation",
                        template: "<div class=\"container\">\r\n    <span>Show</span>\r\n    <select (change)=\"handlePageSizeChange($event)\" name=\"pageSize\">\r\n        <option value=\"5\">5 rows</option>\r\n        <option value=\"10\">10 rows</option>\r\n        <option value=\"20\">20 rows</option>\r\n        <option value=\"50\">50 rows</option>\r\n        <option value=\"100\">100 rows</option>\r\n    </select>\r\n    <button (click)=\"onPreviousClick()\">Previous</button>\r\n    <input type=\"number\" [(ngModel)]=\"pagingOptions.pageNumber\" (change)=\"handlePageChange($event)\" />\r\n    <span>of {{totalPage}}</span>\r\n    <button (click)=\"onNextClick()\">Next</button>\r\n</div>",
                        styles: [":host{float:right}:host .container>*{margin-left:8px}:host select{height:22px;min-width:44px}:host input{height:15px;width:50px}"]
                    }] }
        ];
        /** @nocollapse */
        TableNavigationComponent.ctorParameters = function () { return []; };
        TableNavigationComponent.propDecorators = {
            totalCount: [{ type: core.Input }],
            change: [{ type: core.Output }]
        };
        return TableNavigationComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-table.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgTableModule = /** @class */ (function () {
        function NgTableModule() {
        }
        NgTableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NgTableComponent,
                            ActionButtonComponent,
                            TableHeaderComponent,
                            TableColumnComponent,
                            TableHeaderTemplate,
                            TableHeaderControlTemplate,
                            TableColumnTemplate,
                            TableRowExpandTemplate,
                            TableFooterTemplate,
                            TableActionButtonTemplate,
                            TableRowTotalTemplate,
                            TableContentComponent,
                            TableNavigationComponent,
                        ],
                        imports: [platformBrowser.BrowserModule, common.CommonModule, router.RouterModule, http.HttpClientModule, forms.FormsModule],
                        exports: [
                            NgTableComponent,
                            TableHeaderTemplate,
                            TableHeaderControlTemplate,
                            TableColumnTemplate,
                            TableRowExpandTemplate,
                            TableFooterTemplate,
                            TableActionButtonTemplate,
                            TableRowTotalTemplate,
                        ],
                    },] }
        ];
        return NgTableModule;
    }());

    exports.ActionButtonSetting = ActionButtonSetting;
    exports.ButtonSetting = ButtonSetting;
    exports.ColumnSetting = ColumnSetting;
    exports.NgTableComponent = NgTableComponent;
    exports.NgTableModule = NgTableModule;
    exports.NgTableService = NgTableService;
    exports.PagingSetting = PagingSetting;
    exports.RowSetting = RowSetting;
    exports.TableProps = TableProps;
    exports.TableSetting = TableSetting;
    exports.ɵa = TableColumnTemplate;
    exports.ɵb = TableActionButtonTemplate;
    exports.ɵc = TableRowTotalTemplate;
    exports.ɵd = TableFooterTemplate;
    exports.ɵe = TableHeaderControlTemplate;
    exports.ɵf = TableHeaderTemplate;
    exports.ɵg = TableRowExpandTemplate;
    exports.ɵh = ActionButtonComponent;
    exports.ɵi = TableHeaderComponent;
    exports.ɵj = TableColumnComponent;
    exports.ɵk = TableContentComponent;
    exports.ɵl = TableNavigationComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-table.umd.js.map
