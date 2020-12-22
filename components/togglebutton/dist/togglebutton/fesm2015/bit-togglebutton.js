import { forwardRef, EventEmitter, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TOGGLEBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ToggleButton)),
    multi: true
};
class ToggleButton {
    constructor() {
        this.onLabel = 'Yes';
        this.offLabel = 'No';
        this.iconPos = 'left';
        this.onChange = new EventEmitter();
        this.checked = false;
        this.focus = false;
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.checkboxViewChild) {
            this.checkbox = (/** @type {?} */ (this.checkboxViewChild.nativeElement));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onModelChange(this.checked);
            this.onModelTouched();
            this.onChange.emit({
                originalEvent: event,
                checked: this.checked
            });
            if (this.checkbox) {
                this.checkbox.focus();
            }
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focus = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focus = false;
        this.onModelTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setDisabledState(val) {
        this.disabled = val;
    }
    /**
     * @return {?}
     */
    get hasOnLabel() {
        return this.onLabel && this.onLabel.length > 0;
    }
    /**
     * @return {?}
     */
    get hasOffLabel() {
        return this.onLabel && this.onLabel.length > 0;
    }
}
ToggleButton.decorators = [
    { type: Component, args: [{
                selector: 'p-toggleButton',
                template: `
        <div [ngClass]="{'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all': true, 'ui-button-text-only': (!onIcon && !offIcon), 
                'ui-button-text-icon-left': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === 'left'), 
                'ui-button-text-icon-right': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === 'right'),'ui-button-icon-only': (onIcon && offIcon && !hasOnLabel && !hasOffLabel),
                'ui-state-active': checked,'ui-state-focus':focus,'ui-state-disabled':disabled}" [ngStyle]="style" [class]="styleClass" 
                (click)="toggle($event)" (keydown.enter)="toggle($event)">
            <div class="ui-helper-hidden-accessible">
                <input #checkbox type="checkbox" [attr.id]="inputId" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [attr.tabindex]="tabindex">
            </div>
            <span *ngIf="onIcon||offIcon" class="ui-button-icon-left" [class]="checked ? this.onIcon : this.offIcon" [ngClass]="{'ui-button-icon-left': (iconPos === 'left'), 
            'ui-button-icon-right': (iconPos === 'right')}"></span>
            <span class="ui-button-text ui-unselectable-text">{{checked ? hasOnLabel ? onLabel : 'ui-btn' : hasOffLabel ? offLabel : 'ui-btn'}}</span>
        </div>
    `,
                providers: [TOGGLEBUTTON_VALUE_ACCESSOR]
            }] }
];
ToggleButton.propDecorators = {
    onLabel: [{ type: Input }],
    offLabel: [{ type: Input }],
    onIcon: [{ type: Input }],
    offIcon: [{ type: Input }],
    disabled: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    inputId: [{ type: Input }],
    tabindex: [{ type: Input }],
    iconPos: [{ type: Input }],
    onChange: [{ type: Output }],
    checkboxViewChild: [{ type: ViewChild, args: ['checkbox', { static: false },] }]
};
class ToggleButtonModule {
}
ToggleButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [ToggleButton],
                declarations: [ToggleButton]
            },] }
];

export { TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButton, ToggleButtonModule };
//# sourceMappingURL=bit-togglebutton.js.map
