import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighlight = 'blue';

  constructor(private el: ElementRef) {
    console.log('constructor HighLightDirective', this.appHighlight);
    
   }
   public ngOnInit(): void {
    console.log('ngOnInit HighLightDirective', this.appHighlight)
    this.el.nativeElement.style.color = this.appHighlight;
   }
}
