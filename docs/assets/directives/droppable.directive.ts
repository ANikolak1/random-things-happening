import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[droppable]'
})
export class DroppableDirective {
  @Output() droppable: EventEmitter<any> = new EventEmitter();
  constructor(private element: ElementRef) { }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])

  onDragOver(event) {
    event.preventDefault();
    this.element.nativeElement.style.opacity = '.25';
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    event.preventDefault();
    this.element.nativeElement.style.opacity = '1';
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    this.element.nativeElement.style.opacity = '1';
    this.droppable.emit(JSON.parse(event.dataTransfer.getData('data')));
  }

}
