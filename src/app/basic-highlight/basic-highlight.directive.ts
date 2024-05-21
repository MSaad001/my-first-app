import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor = 'green';        
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.elementRef.nativeElement.style.backgroundColor = 'green';        
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.elementRef.nativeElement.style.backgroundColor = 'transparent';        
    }
}