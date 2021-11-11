import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxFolderviewInputControllerDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        this.folder.isEditMode = false;
    }
    ngAfterViewInit() {
        this.el.nativeElement.focus();
    }
}
NgxFolderviewInputControllerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewInputControllerDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxFolderviewInputControllerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NgxFolderviewInputControllerDirective, selector: "[ngxFolderviewInputController]", inputs: { folder: "folder" }, host: { listeners: { "blur": "onBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewInputControllerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxFolderviewInputController]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { folder: [{
                type: Input
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvbGRlcnZpZXctaW5wdXQtY29udHJvbGxlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZm9sZGVydmlldy9zcmMvbGliL2RpcmVjdGl2ZXMvbmd4LWZvbGRlcnZpZXctaW5wdXQtY29udHJvbGxlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQTJCLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTXZHLE1BQU0sT0FBTyxxQ0FBcUM7SUFHaEQsWUFBb0IsRUFBZ0M7UUFBaEMsT0FBRSxHQUFGLEVBQUUsQ0FBOEI7SUFBRyxDQUFDO0lBRWxDLE1BQU07UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7a0lBWFUscUNBQXFDO3NIQUFyQyxxQ0FBcUM7MkZBQXJDLHFDQUFxQztrQkFIakQsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2lCQUMzQztpR0FFVSxNQUFNO3NCQUFkLEtBQUs7Z0JBSWdCLE1BQU07c0JBQTNCLFlBQVk7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEZvbGRlck5vZGUgfSBmcm9tICcuLi9tb2RlbHMvbmd4LWZvbGRlci1ub2RlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEZvbGRlcnZpZXdJbnB1dENvbnRyb2xsZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hGb2xkZXJ2aWV3SW5wdXRDb250cm9sbGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGZvbGRlcjogTmd4Rm9sZGVyTm9kZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+KSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKSB7XG4gICAgdGhpcy5mb2xkZXIuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=