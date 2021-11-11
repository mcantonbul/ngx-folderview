import { AfterViewInit, ElementRef } from '@angular/core';
import { NgxFolderNode } from '../models/ngx-folder-node';
import * as i0 from "@angular/core";
export declare class NgxFolderviewInputControllerDirective implements AfterViewInit {
    private el;
    folder: NgxFolderNode;
    constructor(el: ElementRef<HTMLInputElement>);
    onBlur(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFolderviewInputControllerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxFolderviewInputControllerDirective, "[ngxFolderviewInputController]", never, { "folder": "folder"; }, {}, never>;
}
