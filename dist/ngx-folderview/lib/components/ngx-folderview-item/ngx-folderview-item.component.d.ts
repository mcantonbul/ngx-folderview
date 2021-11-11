import { TemplateRef } from '@angular/core';
import { NgxFolderViewEventService } from '../../services/folderview-event.service';
import * as i0 from "@angular/core";
export declare class NgxFolderviewItemComponent {
    private ngxFolderviewEventService;
    folder: any;
    template: TemplateRef<any>;
    isTopFolder: boolean;
    constructor(ngxFolderviewEventService: NgxFolderViewEventService);
    onCollapseExpand: () => void;
    onClickRemove: () => void;
    onClickMoveDown: () => void;
    onClickMoveUp: () => void;
    onClickNewFolder: () => void;
    onClickNewSubFolder: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFolderviewItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxFolderviewItemComponent, "ngx-folderview-item", never, { "folder": "folder"; "template": "template"; "isTopFolder": "isTopFolder"; }, {}, never, never>;
}
