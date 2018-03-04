import { Component, Input, ElementRef, ViewChildren, QueryList, Renderer2, ViewChild, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'sm-animated-button-group',
  templateUrl: './animated-button-group.component.html',
  styleUrls: ['./animated-button-group.component.scss']
})
export class AnimatedButtonGroupComponent implements AfterViewInit {

  @Input() default: number = -1;
  @Input() type: string = 'primary'
  @Input() data: Array<string>;
  @Output() select: EventEmitter<number> = new EventEmitter<number>();
  selectedIndex: number = -1;
  isAnimating: boolean = false;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.default >= 0 && this.default < this.data.length) {
      setTimeout(() => {
        this.click(this.default);
      }, 10);
    }
  }


  click(index: number) {
    if (this.selectedIndex == index) return;
    this.isAnimating = true;
    setTimeout(() => {
      this.flyTo(this.selectedIndex, true);
      this.selectedIndex = -1;
      this.flyTo(index);
      this.select.emit(index);
      setTimeout(() => {
        this.isAnimating = false;
        this.selectedIndex = index;
      }, 305);
    }, 10);

  }

  flyTo(index: number, spy: boolean = false) {
    const overlay = this.elementRef.nativeElement.querySelector('#overlay');
    const item = this.elementRef.nativeElement.querySelector(`#item${index}`);
    if (!item || !overlay) return;
    this.renderer.setStyle(overlay, 'visibility', spy ? 'hidden' : 'visible')
    this.renderer.setStyle(overlay, 'transition', spy ? 'unset' : 'all 0.3s ease-in-out');
    this.renderer.setStyle(overlay, 'left', `${item.offsetLeft - 5}px`)
    this.renderer.setStyle(overlay, 'top', `${item.offsetTop - 5}px`)
    this.renderer.setStyle(overlay, 'width', `${item.offsetWidth}px`)
    item.scrollIntoView({ behavior: "smooth" });
  }
}
