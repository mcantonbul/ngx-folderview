import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class NgxFolderViewEventService {
    folderCollapsed = new Subject<any>();
    folderExpanded = new Subject<any>();
    newFolder = new Subject<any>();
    newSubFolder = new Subject<any>();
    removeFolder = new Subject<any>();
    folderMoveUp = new Subject<any>();
    folderMoveDown = new Subject<any>();
}