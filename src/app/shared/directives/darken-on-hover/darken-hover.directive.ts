import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[apDarkHover]'
})

export class DarkHoverDirective {

    @Input() brightValue = "70%";

    constructor(
        private elR: ElementRef,
        private render: Renderer
    ) { }


    @HostListener("mouseover")
    darkOn() {
        this.render.setElementStyle(this.elR.nativeElement, "filter", `brightness(${this.brightValue})`);
    }

    @HostListener("mouseleave")
    darkOff() {
        this.render.setElementStyle(this.elR.nativeElement, "filter", "brightness(100%)");
    }
}