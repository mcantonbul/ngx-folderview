import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NgxFolderviewHelper } from './helpers/ngx-folderview.helper';
import { NgxFolderNode } from './models/ngx-folder-node';
import { NgxFolderViewEventService } from './services/folderview-event.service';
import { NgxFolderViewService } from './services/folderview.service';

@Component({
  selector: 'ngx-folderview',
  templateUrl: './ngx-folderview.component.html',
  styleUrls: ['./ngx-folderview.component.scss']
})
export class NgxFolderviewComponent {

  @Input() dataSource: Array<NgxFolderNode>

  /**
   * @TODO
   */
  @Input() customTemplate: TemplateRef<any>;

  @Output() onFolderCollapsed = new EventEmitter<any>();
  @Output() onFolderExpanded = new EventEmitter<any>();
  @Output() onFolderSelected = new EventEmitter<any>();


  constructor(private ngxFolderviewService: NgxFolderViewService, private ngxFolderviewEventService: NgxFolderViewEventService) {
    this.ngxFolderviewEventService.folderCollapsed.subscribe((folder: any) => {
      this.onFolderCollapsed.emit(folder);
    });

    this.ngxFolderviewEventService.folderExpanded.subscribe((folder: any) => {
      this.onFolderExpanded.emit(folder);
    });

    this.ngxFolderviewEventService.newFolder.subscribe(this._createNewFolderHandler);
    this.ngxFolderviewEventService.newSubFolder.subscribe(this._createNewSubFolderHandler);
    this.ngxFolderviewEventService.removeFolder.subscribe(this._removeFolderHandler);
    this.ngxFolderviewEventService.folderMoveUp.subscribe(this._folderMoveUpHandler);
    this.ngxFolderviewEventService.folderMoveDown.subscribe(this._folderMoveDownHandler);
  }

  private _createNewFolderHandler = (folder: NgxFolderNode) => {
    const findedFolder = this.findById(folder.id);
    this.createNewFolder(findedFolder);
  }

  private _createNewSubFolderHandler = (folder: NgxFolderNode) => {
    const selectedFolderId = this.ngxFolderviewService.getSelectedFolderId();
    if (!selectedFolderId) {
    } else {
      const findedIndex = folder.children?.findIndex(s => s.id === selectedFolderId) || -1;
      if(findedIndex < 0)
        return;
      const selectedFolder = this.findById(selectedFolderId);
      this.createNewFolder(selectedFolder);
    }
  }

  private _removeFolderHandler = (folder: NgxFolderNode) => {
    this.removeById(folder.id);
  }

  private _folderMoveUpHandler = (folder: NgxFolderNode) => {
    this.moveUpById(folder.id);
  }

  private _folderMoveDownHandler = (folder: NgxFolderNode) => {
    this.moveDownById(folder.id);
  }

  findById(id: any): NgxFolderNode {
    let result!: NgxFolderNode;
    const iter = (a: NgxFolderNode) => {
      if (a.id === id) {
        result = a;
        return true;
      }
      return Array.isArray(a.children) && a.children.some(iter);
    }
    this.dataSource.some(iter);
    return result;
  }

  removeById(id: any) {
    const iter = (item: NgxFolderNode, index: number, arr: Array<NgxFolderNode>) => {
      if (item.id === id) {
        arr.splice(index, 1);
        return true;
      }
      return Array.isArray(item.children) && item.children.some(iter);
    }
    this.dataSource.some(iter);
  }

  moveUpById(id: any) {
    const iter = (item: NgxFolderNode, index: number, arr: Array<NgxFolderNode>) => {
      if (item.id === id) {
        if(arr.length > 1 && index !== 0) {
          let temp= arr[index];
          arr[index] = arr[index -1];
          arr[index - 1] = temp;
        } 
        return true;
      }
      return Array.isArray(item.children) && item.children.some(iter);
    }
    this.dataSource.some(iter);
  }

  moveDownById(id: any) {
    const iter = (item: NgxFolderNode, index: number, arr: Array<NgxFolderNode>) => {
      if (item.id === id) {
        if(arr.length > 1 && index !== arr.length - 1) {
          let temp= arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = temp;
        } 
        return true;
      }
      return Array.isArray(item.children) && item.children.some(iter);
    }
    this.dataSource.some(iter);
  }

  createNewFolder(folder: NgxFolderNode) {
    if (!folder.children) {
      folder.children = new Array<NgxFolderNode>();
    }
    folder.children.push({
      id: NgxFolderviewHelper.newGuid(),
      title: "New Folder",
      isEditMode: true
    })
  }
}
