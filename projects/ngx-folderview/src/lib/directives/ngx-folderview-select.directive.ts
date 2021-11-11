import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { NgxFolderNode } from '../models/ngx-folder-node';
import { NgxFolderViewService } from '../services/folderview.service';

@Directive({
  selector: '[ngxFolderviewSelect]'
})
export class NgxFolderviewSelectDirective {
  @Input() folder: NgxFolderNode;

  constructor(private ngxFolderviewService: NgxFolderViewService, private renderer2: Renderer2) { }

  @HostListener('click', ['$event.target']) onClick(element: HTMLBaseElement) {
    this.ngxFolderviewService.setSelectedFolder(this.folder.id, element)
  }

  @HostListener('dblclick') onDblClick() {
    this.folder.isEditMode = true;
  }
}
