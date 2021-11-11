import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export declare class NgxFolderViewEventService {
    folderCollapsed: Subject<any>;
    folderExpanded: Subject<any>;
    newFolder: Subject<any>;
    newSubFolder: Subject<any>;
    removeFolder: Subject<any>;
    folderMoveUp: Subject<any>;
    folderMoveDown: Subject<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFolderViewEventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxFolderViewEventService>;
}
