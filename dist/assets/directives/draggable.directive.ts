import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective {
  @Input() draggable: any;
  @Input() draggableDisabled?: Boolean = false;

  @HostBinding('draggable')
  get draggableThing() {
    return !this.draggableDisabled;
  }

  constructor() { }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    console.log("is this working?")
    event.dataTransfer.setData('data', JSON.stringify(this.draggable));
    const image = event.currentTarget.closest('.card');
    if (image)
      event.dataTransfer.setDragImage(image, 10, 10);
  }

}
