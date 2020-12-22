/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var TOGGLEBUTTON_VALUE_ACCESSOR = {
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
export { ToggleButton };
if (false) {
    /** @type {?} */
    ToggleButton.prototype.onLabel;
    /** @type {?} */
    ToggleButton.prototype.offLabel;
    /** @type {?} */
    ToggleButton.prototype.onIcon;
    /** @type {?} */
    ToggleButton.prototype.offIcon;
    /** @type {?} */
    ToggleButton.prototype.disabled;
    /** @type {?} */
    ToggleButton.prototype.style;
    /** @type {?} */
    ToggleButton.prototype.styleClass;
    /** @type {?} */
    ToggleButton.prototype.inputId;
    /** @type {?} */
    ToggleButton.prototype.tabindex;
    /** @type {?} */
    ToggleButton.prototype.iconPos;
    /** @type {?} */
    ToggleButton.prototype.onChange;
    /** @type {?} */
    ToggleButton.prototype.checkboxViewChild;
    /** @type {?} */
    ToggleButton.prototype.checkbox;
    /** @type {?} */
    ToggleButton.prototype.checked;
    /** @type {?} */
    ToggleButton.prototype.focus;
    /** @type {?} */
    ToggleButton.prototype.onModelChange;
    /** @type {?} */
    ToggleButton.prototype.onModelTouched;
}
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
export { ToggleButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC90b2dnbGVidXR0b24vIiwic291cmNlcyI6WyJ0b2dnbGVidXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBZSxTQUFTLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQXVCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXZFLE1BQU0sS0FBTywyQkFBMkIsR0FBUTtJQUM5QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsWUFBWSxFQUFaLENBQVksRUFBQztJQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFBQTtRQW9CYSxZQUFPLEdBQVcsS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFnQnhCLFlBQU8sR0FBVyxNQUFNLENBQUM7UUFFeEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTNELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixrQkFBYTs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7UUFFbkMsbUJBQWM7OztRQUFhLGNBQU8sQ0FBQyxFQUFDO0lBdUR4QyxDQUFDOzs7O0lBckRHLHNDQUFlOzs7SUFBZjtRQUNJLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUEsQ0FBQztTQUMzRTtJQUNMLENBQUM7Ozs7O0lBRUQsNkJBQU07Ozs7SUFBTixVQUFPLEtBQVk7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O0NBQUEsQUFMbkMsSUFLbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixmb3J3YXJkUmVmLEFmdGVyVmlld0luaXQsVmlld0NoaWxkLEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgVE9HR0xFQlVUVE9OX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUb2dnbGVCdXR0b24pLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRvZ2dsZUJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J3VpLWJ1dHRvbiB1aS10b2dnbGVidXR0b24gdWktd2lkZ2V0IHVpLXN0YXRlLWRlZmF1bHQgdWktY29ybmVyLWFsbCc6IHRydWUsICd1aS1idXR0b24tdGV4dC1vbmx5JzogKCFvbkljb24gJiYgIW9mZkljb24pLCBcbiAgICAgICAgICAgICAgICAndWktYnV0dG9uLXRleHQtaWNvbi1sZWZ0JzogKG9uSWNvbiAmJiBvZmZJY29uICYmIGhhc09uTGFiZWwgJiYgaGFzT2ZmTGFiZWwgJiYgaWNvblBvcyA9PT0gJ2xlZnQnKSwgXG4gICAgICAgICAgICAgICAgJ3VpLWJ1dHRvbi10ZXh0LWljb24tcmlnaHQnOiAob25JY29uICYmIG9mZkljb24gJiYgaGFzT25MYWJlbCAmJiBoYXNPZmZMYWJlbCAmJiBpY29uUG9zID09PSAncmlnaHQnKSwndWktYnV0dG9uLWljb24tb25seSc6IChvbkljb24gJiYgb2ZmSWNvbiAmJiAhaGFzT25MYWJlbCAmJiAhaGFzT2ZmTGFiZWwpLFxuICAgICAgICAgICAgICAgICd1aS1zdGF0ZS1hY3RpdmUnOiBjaGVja2VkLCd1aS1zdGF0ZS1mb2N1cyc6Zm9jdXMsJ3VpLXN0YXRlLWRpc2FibGVkJzpkaXNhYmxlZH1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCIgKGtleWRvd24uZW50ZXIpPVwidG9nZ2xlKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1oZWxwZXItaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2NoZWNrYm94IHR5cGU9XCJjaGVja2JveFwiIFthdHRyLmlkXT1cImlucHV0SWRcIiBbY2hlY2tlZF09XCJjaGVja2VkXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJvbkljb258fG9mZkljb25cIiBjbGFzcz1cInVpLWJ1dHRvbi1pY29uLWxlZnRcIiBbY2xhc3NdPVwiY2hlY2tlZCA/IHRoaXMub25JY29uIDogdGhpcy5vZmZJY29uXCIgW25nQ2xhc3NdPVwieyd1aS1idXR0b24taWNvbi1sZWZ0JzogKGljb25Qb3MgPT09ICdsZWZ0JyksIFxuICAgICAgICAgICAgJ3VpLWJ1dHRvbi1pY29uLXJpZ2h0JzogKGljb25Qb3MgPT09ICdyaWdodCcpfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktYnV0dG9uLXRleHQgdWktdW5zZWxlY3RhYmxlLXRleHRcIj57e2NoZWNrZWQgPyBoYXNPbkxhYmVsID8gb25MYWJlbCA6ICd1aS1idG4nIDogaGFzT2ZmTGFiZWwgPyBvZmZMYWJlbCA6ICd1aS1idG4nfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbVE9HR0xFQlVUVE9OX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b24gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcixBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpIG9uTGFiZWw6IHN0cmluZyA9ICdZZXMnO1xuXG4gICAgQElucHV0KCkgb2ZmTGFiZWw6IHN0cmluZyA9ICdObyc7XG5cbiAgICBASW5wdXQoKSBvbkljb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG9mZkljb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBpY29uUG9zOiBzdHJpbmcgPSAnbGVmdCc7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyBzdGF0aWM6IGZhbHNlIH0pIGNoZWNrYm94Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuICAgIFxuICAgIGNoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gICAgXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBcbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94Vmlld0NoaWxkKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3ggPSA8SFRNTElucHV0RWxlbWVudD4gdGhpcy5jaGVja2JveFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRvZ2dsZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5jaGVja2VkKTtcbiAgICAgICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrYm94KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuICAgIFxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuICAgIFxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgfVxuICAgIFxuICAgIGdldCBoYXNPbkxhYmVsKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uTGFiZWwgJiYgdGhpcy5vbkxhYmVsLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIFxuICAgIGdldCBoYXNPZmZMYWJlbCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxhYmVsICYmIHRoaXMub25MYWJlbC5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVG9nZ2xlQnV0dG9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtUb2dnbGVCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvbk1vZHVsZSB7IH1cbiJdfQ==