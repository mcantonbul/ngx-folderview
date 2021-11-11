import { Component, Input, TemplateRef } from '@angular/core';
import { NgxFolderViewEventService } from '../../services/folderview-event.service';

@Component({
  selector: 'ngx-folderview-item',
  templateUrl: './ngx-folderview-item.component.html',
  styleUrls: ['./ngx-folderview-item.component.scss']
})
export class NgxFolderviewItemComponent {
  @Input() folder: any;
  @Input() template: TemplateRef<any>;
  @Input() isTopFolder: boolean;
  
  constructor(private ngxFolderviewEventService: NgxFolderViewEventService) { 
  }

  onCollapseExpand = () => {
    this.folder.collapsed = !this.folder.collapsed;
    if(this.folder.collapsed) {
      this.ngxFolderviewEventService.folderCollapsed.next(this.folder);
    } else {
      this.ngxFolderviewEventService.folderExpanded.next(this.folder);
    }
  }

  onClickRemove = () => {
    this.ngxFolderviewEventService.removeFolder.next(this.folder);
  }

  onClickMoveDown = () => {
    this.ngxFolderviewEventService.folderMoveDown.next(this.folder);
  }

  onClickMoveUp = () => {
    this.ngxFolderviewEventService.folderMoveUp.next(this.folder);
  }

  onClickNewFolder= () => {
    this.ngxFolderviewEventService.newFolder.next(this.folder);
  }

  onClickNewSubFolder= () => {
    this.ngxFolderviewEventService.newSubFolder.next(this.folder);
  }
}
