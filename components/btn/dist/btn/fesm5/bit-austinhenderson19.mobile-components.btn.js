import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        { type: Component, args: [{
                    selector: 'app-button',
                    template: "\n    <button\n      class=\"btn\"\n      [ngClass]=\"{ solid: variant == 'solid', outline: variant == 'outline' }\"\n    >\n      {{ label || 'Template Button' }}\n    </button>\n  ",
                    styles: [".btn{padding:.75rem 1.5rem;border-radius:5px;border:none;background-color:#293eff;color:#fff}.btn:hover{cursor:pointer}.outline{background-color:transparent;border:1px solid #293eff;color:#293eff}"]
                }] }
    ];
    /** @nocollapse */
    BtnComponent.ctorParameters = function () { return []; };
    BtnComponent.propDecorators = {
        variant: [{ type: Input }],
        label: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [BtnComponent],
                    imports: [CommonModule],
                    exports: [BtnComponent],
                },] }
    ];
    return BtnModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BtnModule, BtnComponent as ɵa };
//# sourceMappingURL=bit-austinhenderson19.mobile-components.btn.js.map
