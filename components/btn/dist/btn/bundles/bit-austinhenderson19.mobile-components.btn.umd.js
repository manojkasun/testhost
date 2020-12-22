(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@bit/austinhenderson19.mobile-components.btn', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.austinhenderson19 = global.bit.austinhenderson19 || {}, global.bit.austinhenderson19['mobile-components'] = global.bit.austinhenderson19['mobile-components'] || {}, global.bit.austinhenderson19['mobile-components'].btn = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BtnComponent = /** @class */ (function () {
        function BtnComponent() {
            this.variant = 'solid';
            this.label = 'Button';
        }
        /**
         * @return {?}
         */
        BtnComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        BtnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-button',
                        template: "\n    <button\n      class=\"btn\"\n      [ngClass]=\"{ solid: variant == 'solid', outline: variant == 'outline' }\"\n    >\n      {{ label || 'Template Button' }}\n    </button>\n  ",
                        styles: [".btn{padding:.75rem 1.5rem;border-radius:5px;border:none;background-color:#293eff;color:#fff}.btn:hover{cursor:pointer}.outline{background-color:transparent;border:1px solid #293eff;color:#293eff}"]
                    }] }
        ];
        /** @nocollapse */
        BtnComponent.ctorParameters = function () { return []; };
        BtnComponent.propDecorators = {
            variant: [{ type: core.Input }],
            label: [{ type: core.Input }]
        };
        return BtnComponent;
    }());
    if (false) {
        /** @type {?} */
        BtnComponent.prototype.variant;
        /** @type {?} */
        BtnComponent.prototype.label;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BtnModule = /** @class */ (function () {
        function BtnModule() {
        }
        BtnModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BtnComponent],
                        imports: [common.CommonModule],
                        exports: [BtnComponent],
                    },] }
        ];
        return BtnModule;
    }());

    exports.BtnModule = BtnModule;
    exports.ɵa = BtnComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bit-austinhenderson19.mobile-components.btn.umd.js.map
