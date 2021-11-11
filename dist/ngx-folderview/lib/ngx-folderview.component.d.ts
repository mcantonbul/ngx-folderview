import { EventEmitter, TemplateRef } from '@angular/core';
import { NgxFolderNode } from './models/ngx-folder-node';
import { NgxFolderViewEventService } from './services/folderview-event.service';
import { NgxFolderViewService } from './services/folderview.service';
import * as i0 from "@angular/core";
export declare class NgxFolderviewComponent {
    private ngxFolderviewService;
    private ngxFolderviewEventService;
    dataSource: Array<NgxFolderNode>;
    /**
     * @TODO
     */
    customTemplate: TemplateRef<any>;
    onFolderCollapsed: EventEmitter<any>;
    onFolderExpanded: EventEmitter<any>;
    onFolderSelected: EventEmitter<any>;
    constructor(ngxFolderviewService: NgxFolderViewService, ngxFolderviewEventService: NgxFolderViewEventService);
    private _createNewFolderHandler;
    private _createNewSubFolderHandler;
    private _removeFolderHandler;
    private _folderMoveUpHandler;
    private _folderMoveDownHandler;
    findById(id: any): NgxFolderNode;
    removeById(id: any): void;
    moveUpById(id: any): void;
    moveDownById(id: any): void;
    createNewFolder(folder: NgxFolderNode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFolderviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxFolderviewComponent, "ngx-folderview", never, { "dataSource": "dataSource"; "customTemplate": "customTemplate"; }, { "onFolderCollapsed": "onFolderCollapsed"; "onFolderExpanded": "onFolderExpanded"; "onFolderSelected": "onFolderSelected"; }, never, never>;
}
