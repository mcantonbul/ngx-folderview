import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class NgxFolderViewEventService {
    constructor() {
        this.folderCollapsed = new Subject();
        this.folderExpanded = new Subject();
        this.newFolder = new Subject();
        this.newSubFolder = new Subject();
        this.removeFolder = new Subject();
        this.folderMoveUp = new Subject();
        this.folderMoveDown = new Subject();
    }
}
NgxFolderViewEventService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewEventService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxFolderViewEventService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewEventService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewEventService, decorators: [{
            type: Injectable,
            args: [{ providedIn: "root" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVydmlldy1ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZvbGRlcnZpZXcvc3JjL2xpYi9zZXJ2aWNlcy9mb2xkZXJ2aWV3LWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUcvQixNQUFNLE9BQU8seUJBQXlCO0lBRHRDO1FBRUksb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JDLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUMvQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDbEMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNsQyxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7S0FDdkM7O3NIQVJZLHlCQUF5QjswSEFBekIseUJBQXlCLGNBRFosTUFBTTsyRkFDbkIseUJBQXlCO2tCQURyQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogXCJyb290XCIgfSlcclxuZXhwb3J0IGNsYXNzIE5neEZvbGRlclZpZXdFdmVudFNlcnZpY2Uge1xyXG4gICAgZm9sZGVyQ29sbGFwc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgZm9sZGVyRXhwYW5kZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBuZXdGb2xkZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBuZXdTdWJGb2xkZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICByZW1vdmVGb2xkZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBmb2xkZXJNb3ZlVXAgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBmb2xkZXJNb3ZlRG93biA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxufSJdfQ==