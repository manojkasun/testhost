import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0, a1) { return { solid: a0, outline: a1 }; };
class BtnComponent {
    constructor() {
        this.variant = 'solid';
        this.label = 'Button';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
BtnComponent.ɵfac = function BtnComponent_Factory(t) { return new (t || BtnComponent)(); };
BtnComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BtnComponent, selectors: [["app-button"]], inputs: { variant: "variant", label: "label" }, decls: 2, vars: 5, consts: [[1, "btn", 3, "ngClass"]], template: function BtnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c0, ctx.variant == "solid", ctx.variant == "outline"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label || "Template Button", " ");
    } }, directives: [ɵngcc1.NgClass], styles: [".btn[_ngcontent-%COMP%]{padding:.75rem 1.5rem;border-radius:5px;border:none;background-color:#293eff;color:#fff}.btn[_ngcontent-%COMP%]:hover{cursor:pointer}.outline[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #293eff;color:#293eff}"] });
/** @nocollapse */
BtnComponent.ctorParameters = () => [];
BtnComponent.propDecorators = {
    variant: [{ type: Input }],
    label: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BtnComponent, [{
        type: Component,
        args: [{
                selector: 'app-button',
                template: `
    <button
      class="btn"
      [ngClass]="{ solid: variant == 'solid', outline: variant == 'outline' }"
    >
      {{ label || 'Template Button' }}
    </button>
  `,
                styles: [".btn{padding:.75rem 1.5rem;border-radius:5px;border:none;background-color:#293eff;color:#fff}.btn:hover{cursor:pointer}.outline{background-color:transparent;border:1px solid #293eff;color:#293eff}"]
            }]
    }], function () { return []; }, { variant: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();
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
class BtnModule {
}
BtnModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BtnModule });
BtnModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BtnModule_Factory(t) { return new (t || BtnModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BtnModule, { declarations: function () { return [BtnComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BtnComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BtnModule, [{
        type: NgModule,
        args: [{
                declarations: [BtnComponent],
                imports: [CommonModule],
                exports: [BtnComponent]
            }]
    }], null, null); })();

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