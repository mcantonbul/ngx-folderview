import { Renderer2 } from '@angular/core';
import { NgxFolderNode } from '../models/ngx-folder-node';
import { NgxFolderViewService } from '../services/folderview.service';
import * as i0 from "@angular/core";
export declare class NgxFolderviewSelectDirective {
    private ngxFolderviewService;
    private renderer2;
    folder: NgxFolderNode;
    constructor(ngxFolderviewService: NgxFolderViewService, renderer2: Renderer2);
    onClick(element: HTMLBaseElement): void;
    onDblClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFolderviewSelectDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxFolderviewSelectDirective, "[ngxFolderviewSelect]", never, { "folder": "folder"; }, {}, never>;
}
