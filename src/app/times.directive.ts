import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
    selector: '[cqTimes]'
})
export class TimesDirective {

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) { }

    @Input('cqTimes')
    set render(times: number) {
        this.viewContainer.clear();
        for (let i = 0; i < times; i += 1) {
            this.viewContainer.createEmbeddedView(this.templateRef, {
                index: i
            });
        }
    }
}
