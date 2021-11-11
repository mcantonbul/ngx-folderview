import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { NgxFolderNode } from '../models/ngx-folder-node';

@Directive({
  selector: '[ngxFolderviewInputController]'
})
export class NgxFolderviewInputControllerDirective implements AfterViewInit {
  @Input() folder: NgxFolderNode;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('blur') onBlur() {
    this.folder.isEditMode = false;
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
