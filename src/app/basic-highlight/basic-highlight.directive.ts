import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor = 'green';        
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.backgroundColor = 'green';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.elementRef.nativeElement.style.backgroundColor = 'transparent';
        this.backgroundColor = 'transparent';

    }
}