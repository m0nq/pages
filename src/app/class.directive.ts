import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
    selector: '[cqClass]'
})
export class ClassDirective {

    constructor(private element: ElementRef) {}

    @Input('cqClass')
    set classNames(classObj: any) {
        Object.keys(classObj)
            .forEach(key => {
                if (classObj[key]) {
                    this.element.nativeElement.classList.add(key);
                } else {
                    this.element.nativeElement.classList.remove(key);
                }
            });
    }
}
