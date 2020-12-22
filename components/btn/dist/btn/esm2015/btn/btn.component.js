/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class BtnComponent {
    constructor() {
        this.variant = 'solid';
        this.label = 'Button';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
BtnComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
BtnComponent.ctorParameters = () => [];
BtnComponent.propDecorators = {
    variant: [{ type: Input }],
    label: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BtnComponent.prototype.variant;
    /** @type {?} */
    BtnComponent.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvYXVzdGluaGVuZGVyc29uMTkubW9iaWxlLWNvbXBvbmVudHMuYnRuLyIsInNvdXJjZXMiOlsiYnRuL2J0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBY3pELE1BQU0sT0FBTyxZQUFZO0lBSXZCO1FBSFMsWUFBTyxHQUFXLE9BQU8sQ0FBQztRQUMxQixVQUFLLEdBQVcsUUFBUSxDQUFDO0lBRW5CLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFVLENBQUM7OztZQWxCcEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDs7YUFFRjs7Ozs7c0JBRUUsS0FBSztvQkFDTCxLQUFLOzs7O0lBRE4sK0JBQW1DOztJQUNuQyw2QkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJidG5cIlxuICAgICAgW25nQ2xhc3NdPVwieyBzb2xpZDogdmFyaWFudCA9PSAnc29saWQnLCBvdXRsaW5lOiB2YXJpYW50ID09ICdvdXRsaW5lJyB9XCJcbiAgICA+XG4gICAgICB7eyBsYWJlbCB8fCAnVGVtcGxhdGUgQnV0dG9uJyB9fVxuICAgIDwvYnV0dG9uPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9idG4uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdmFyaWFudDogc3RyaW5nID0gJ3NvbGlkJztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdCdXR0b24nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iXX0=