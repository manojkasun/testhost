/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { BtnComponent };
if (false) {
    /** @type {?} */
    BtnComponent.prototype.variant;
    /** @type {?} */
    BtnComponent.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvYXVzdGluaGVuZGVyc29uMTkubW9iaWxlLWNvbXBvbmVudHMuYnRuLyIsInNvdXJjZXMiOlsiYnRuL2J0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBZ0JFO1FBSFMsWUFBTyxHQUFXLE9BQU8sQ0FBQztRQUMxQixVQUFLLEdBQVcsUUFBUSxDQUFDO0lBRW5CLENBQUM7Ozs7SUFFaEIsK0JBQVE7OztJQUFSLGNBQWtCLENBQUM7O2dCQWxCcEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsd0xBT1Q7O2lCQUVGOzs7OzswQkFFRSxLQUFLO3dCQUNMLEtBQUs7O0lBS1IsbUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQVBZLFlBQVk7OztJQUN2QiwrQkFBbUM7O0lBQ25DLDZCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImJ0blwiXG4gICAgICBbbmdDbGFzc109XCJ7IHNvbGlkOiB2YXJpYW50ID09ICdzb2xpZCcsIG91dGxpbmU6IHZhcmlhbnQgPT0gJ291dGxpbmUnIH1cIlxuICAgID5cbiAgICAgIHt7IGxhYmVsIHx8ICdUZW1wbGF0ZSBCdXR0b24nIH19XG4gICAgPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2J0bi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2YXJpYW50OiBzdHJpbmcgPSAnc29saWQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0J1dHRvbic7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiJdfQ==