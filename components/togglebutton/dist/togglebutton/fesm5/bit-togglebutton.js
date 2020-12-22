import { forwardRef, Component, Input, Output, ViewChild, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TOGGLEBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ToggleButton; })),
    multi: true
};
var ToggleButton = /** @class */ (function () {
    function ToggleButton() {
        this.onLabel = 'Yes';
        this.offLabel = 'No';
        this.iconPos = 'left';
        this.onChange = new EventEmitter();
        this.checked = false;
        this.focus = false;
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    ToggleButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.checkboxViewChild) {
            this.checkbox = (/** @type {?} */ (this.checkboxViewChild.nativeElement));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToggleButton.prototype.toggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @return {?}
     */
    ToggleButton.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focus = true;
    };
    /**
     * @return {?}
     */
    ToggleButton.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.focus = false;
        this.onModelTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ToggleButton.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleButton.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleButton.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ToggleButton.prototype.setDisabledState = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.disabled = val;
    };
    Object.defineProperty(ToggleButton.prototype, "hasOnLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.onLabel && this.onLabel.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButton.prototype, "hasOffLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.onLabel && this.onLabel.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ToggleButton.decorators = [
        { type: Component, args: [{
                    selector: 'p-toggleButton',
                    template: "\n        <div [ngClass]=\"{'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all': true, 'ui-button-text-only': (!onIcon && !offIcon), \n                'ui-button-text-icon-left': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === 'left'), \n                'ui-button-text-icon-right': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === 'right'),'ui-button-icon-only': (onIcon && offIcon && !hasOnLabel && !hasOffLabel),\n                'ui-state-active': checked,'ui-state-focus':focus,'ui-state-disabled':disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\" \n                (click)=\"toggle($event)\" (keydown.enter)=\"toggle($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #checkbox type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [attr.tabindex]=\"tabindex\">\n            </div>\n            <span *ngIf=\"onIcon||offIcon\" class=\"ui-button-icon-left\" [class]=\"checked ? this.onIcon : this.offIcon\" [ngClass]=\"{'ui-button-icon-left': (iconPos === 'left'), \n            'ui-button-icon-right': (iconPos === 'right')}\"></span>\n            <span class=\"ui-button-text ui-unselectable-text\">{{checked ? hasOnLabel ? onLabel : 'ui-btn' : hasOffLabel ? offLabel : 'ui-btn'}}</span>\n        </div>\n    ",
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
    return ToggleButton;
}());
var ToggleButtonModule = /** @class */ (function () {
    function ToggleButtonModule() {
    }
    ToggleButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ToggleButton],
                    declarations: [ToggleButton]
                },] }
    ];
    return ToggleButtonModule;
}());

export { TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButton, ToggleButtonModule };
//# sourceMappingURL=bit-togglebutton.js.map
